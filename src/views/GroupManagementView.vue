<template>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="signup-div">
        <p>가입승인요청</p>

        <div v-for="(signup, idx) in signupList" :key="signup.id">
          <p>요청자: {{ signup.user.username }}</p>
          <p>요청일시: {{ formatDate(signup.date_requested) }}</p>
          <p>상태 : {{ signup.status }}</p>

          <div v-if="signupStatus[idx]===false">
            <button @click="signupApprove(signup.user.id, idx)">승인</button>
            <button @click="signupReject(signup.user.id, idx)">거절</button>
          </div>
          <div v-else>
            <p>{{ signupStatusMessage[idx] }}</p>
          </div>

          <hr>
        </div>
      </div>
      <button @click="closeModal">닫기</button>
    </div>
  </div>

    <div>
        <h1>{{ groupId }} 그룹 관리 페이지</h1>
        <button @click="openModal">가입요청 확인</button>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useGroupStore } from '@/stores/group'
import { formatDate } from '@/utils/datefomatter' 

const route = useRoute()
const userstore = useUserStore()
const groupstore = useGroupStore()
const groupId = ref(route.params.groupId)
const signupList = ref('')
const isModalOpen = ref(false)
const signupStatus = ref('')
const signupStatusMessage = ref('')

const fetchGroupSignup = function(){
    axios({
      method: 'GET',
      url: `${groupstore.API_URL}/groups/${groupId.value}/membership-requests/`,
      headers:{
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      console.log(response.data)
      signupList.value = response.data
      signupStatus.value = Array(signupList.value.length).fill(false)
      signupStatusMessage.value = Array(signupList.value.length).fill(null)
    })
    .catch(error => {
      console.log(error)
    })
}

const openModal = () => {
  fetchGroupSignup()
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const signupApprove = function(signupId, signupIdx){
    axios({
      method: 'PATCH',
      url: `${groupstore.API_URL}/groups/${groupId.value}/membership-requests/${signupId}/`,
      data: {
        approval: 'true'
      },
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      console.log(response.data)
      signupStatus.value[signupIdx] = true
      signupStatusMessage.value[signupIdx] = '승인되었습니다'
    })
    .catch(error => {
      console.log(error)
    })
}
const signupReject = function(signupId, signupIdx){
    axios({
      method: 'PATCH',
      url: `${groupstore.API_URL}/groups/${groupId.value}/membership-requests/${signupId}/`,
      data: {
        approval: 'false'
      },
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      console.log(response.data)
      signupStatus.value[signupIdx] = true
      signupStatusMessage.value[signupIdx] = '거절되었습니다'
    })
    .catch(error => {
      console.log(error)
    })
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}

.signup-div {
  margin-bottom: 20px;
}
</style>
