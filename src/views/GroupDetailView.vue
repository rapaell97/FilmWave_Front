<template>
    <h1>그룹상세페이지</h1>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <p>가입 요청이 성공적으로 전송되었습니다!</p>
        <button @click="closeModal">닫기</button>
      </div>
    </div>


    <div v-if="isMemberModalOpen" class="member-modal-overlay" @click="closeMemberModal">
      <div class="member-modal-content" @click.stop>
        <div v-for="member in group.members" class="member-div" :key="member.id">
          <i class="fa-solid fa-user"></i>
          <p class="member-info">멤버: {{ member.username }}</p>
          <hr>
        </div>
        <button @click="closeMemberModal">닫기</button>
      </div>
    </div>


    <div class="group-info">
        <img src="@/assets/group2.png" alt="" class="group-img">
        <div>
            <h1>{{ group.title }}</h1>
            <!-- {{ group }} -->
            <p>{{ group.description }}</p>
            <p>{{ formatDate(group.create_at) }}</p>
            <button @click="openMemberModal">Members</button>
        </div>
    </div>
    <div v-if="group.admin">
      <button
        v-if="userstore.userId === group.admin.id"
        @click="groupDelete"
        >
      그룹 삭제
      </button>
      <RouterLink :to="{name:'groupManageMent', params:{'groupId': groupId }}">
        <button v-if="userstore.userId === group.admin.id">그룹 관리</button>
      </RouterLink>
    </div>
    <button
      v-if="isMember === false"
      @click="MembershipRequest"
      >
      가입하기
    </button>
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
const isMemberModalOpen = ref(false)

const groupDelete = function(){
  axios({
    method: 'DELETE',
    url: `${groupstore.API_URL}/groups/${groupId.value}/`,
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
      url: `${groupstore.API_URL}/groups/${groupId.value}/`,
      headers:{
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      group.value = response.data
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

const openMemberModal = () => {
  isMemberModalOpen.value = true
}

const closeMemberModal = () => {
  isMemberModalOpen.value = false
}

const MembershipRequest = function() {
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
    width: 80%;
    height: 200px;
    border: 1px solid black;
    display: flex;
    margin: auto;
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

.member-div{
  display: flex;
  align-items: center;
}

.member-modal-overlay {
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

.member-modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}
.member-info {
  margin-left: 3px;
}
</style>