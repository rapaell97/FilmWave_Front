<template>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="MembershipRequest-div">
        <p>가입승인요청</p>

        <div v-for="(membershipRequest, idx) in MembershipRequestList" :key="membershipRequest.id">
          <!-- {{membershipRequest}} -->
          <p>요청자: {{ membershipRequest.user.username }}</p>
          <p>요청일시: {{ formatDate(membershipRequest.date_requested) }}</p>
          <p>상태 : {{ membershipRequest.status }}</p>

          <div v-if="MembershipRequestStatus[idx]===false">
            <button @click="RequestApprove(idx, membershipRequest.id)">승인</button>
            <button @click="RequestReject(idx, membershipRequest.id)">거절</button>
          </div>
          <div v-else>
            <p>{{ MembershipRequestStatusMessage[idx] }}</p>
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
const MembershipRequestList = ref('')
const isModalOpen = ref(false)
const MembershipRequestStatus = ref('')
const MembershipRequestStatusMessage = ref('')

const fetchMembershipRequest = function(){
    axios({
      method: 'GET',
      url: `${groupstore.API_URL}/groups/${groupId.value}/membership-requests/`,
      headers:{
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      MembershipRequestList.value = response.data
      MembershipRequestStatus.value = Array(MembershipRequestList.value.length).fill(false)
      MembershipRequestStatusMessage.value = Array(MembershipRequestList.value.length).fill(null)
    })
    .catch(error => {
      console.log(error)
    })
}

const openModal = () => {
    fetchMembershipRequest()
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const RequestApprove = function(requestIdx, membershipRequestId){
    axios({
      method: 'PATCH',
      url: `${groupstore.API_URL}/groups/${groupId.value}/membership-requests/${membershipRequestId}/`,
      data: {
        approval: 'true'
      },
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      MembershipRequestStatus.value[requestIdx] = true
      MembershipRequestStatusMessage.value[requestIdx] = '승인되었습니다'
    })
    .catch(error => {
      console.log(error)
    })
}
const RequestReject = function(requestId, requestIdx){
    axios({
      method: 'PATCH',
      url: `${groupstore.API_URL}/groups/${groupId.value}/membership-requests/${requestId}/`,
      data: {
        approval: 'false'
      },
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      MembershipRequestStatus.value[requestId] = true
      MembershipRequestStatusMessage.value[requestIdx] = '거절되었습니다'
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

.MembershipRequest-div {
  margin-bottom: 20px;
}
</style>
