<template>
    <h1>그룹상세페이지</h1>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <p>가입 요청이 성공적으로 전송되었습니다!</p>
        <button @click="closeModal">닫기</button>
      </div>
    </div>
    <div class="group-info">
        <img src="@/assets/group2.png" alt="" class="group-img">
        <div>
            <h1>{{ group.title }}</h1>
            <p>{{ group.description }}</p>
            <p>{{ formatDate(group.create_at) }}</p>
        </div>
    </div>
    <div v-if="group.admin">
      <button
        v-if="userstore.userId === group.admin.id"
        @click="groupDelete"
        >
      그룹 삭제</button>
    </div>
    <RouterLink :to="{name:'groupManageMent', params:{'groupId': groupId }}">그룹 관리</RouterLink>
    <button
    v-if="isMember === false"
    @click="groupSignupRequest"
    >
    가입하기</button>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useGroupStore } from '@/stores/group'
import { useUserStore } from '@/stores/user'
import { formatDate } from '@/utils/datefomatter'

const route = useRoute()
const router = useRouter()
const groupstore = useGroupStore()
const userstore = useUserStore()

const groupId = ref(route.params.groupId)
const group = ref('')
const isMember = ref(false)
const isModalOpen = ref(false)

const groupDelete = function(){
  axios({
    method: 'DELETE',
    url: `${groupstore.API_URL}/groups/${groupId.value}`,
    headers:{
        Authorization: `Token ${userstore.token}`
      }
  })
  .then(response => {
    console.log(response.data)
    router.push({name:'group'})
  })
  .catch(error => {
    console.log(error)
  })
}

onMounted(() => {
    axios({
      method: 'GET',
      url: `${groupstore.API_URL}/groups/${groupId.value}`,
    })
    .then(response => {
    //   console.log(response.data)
      group.value = response.data
      console.log(group.value)
      isMemberCheck()
    })
    .catch(error => {
      console.log(error)
    })
})

const isMemberCheck = function(){
  group.value.members.forEach((member) => {
    if (member.id === userstore.userId){
      isMember.value = true
    }
  })
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const groupSignupRequest = function() {
  axios({
    method: 'POST',
    url: `${groupstore.API_URL}/groups/${groupId.value}/membership-requests/`,
    headers:{
        Authorization: `Token ${userstore.token}`
      }
  })
  .then(response => {
    console.log(response.data)
    openModal()
  })
  .catch(error => {
    console.log(error)
  })
}

</script>

<style scoped>
.group-info{
    width: 100%;
    height: 200px;
    border: 1px solid black;
    display: flex;
}
.group-img{
    width: 150px;
}
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
  width: 300px;
  text-align: center;
}
</style>