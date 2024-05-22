<template>
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


    <div class="group-info" v-if="group.admin">
        <img src="@/assets/group/default.png" alt="" class="group-img">
        <div class="info-detail">
            <h1>{{ group.title }}</h1>
            <p>소개 : {{ group.description }}</p>
            <p>운영자 : {{ group.admin.username }}</p>
            <p>개설일자 : {{ formatDate2(group.create_at) }}</p>
            <button class="members-btn" @click="openMemberModal">Members</button>
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

    <GroupMovieList/>
    <GroupPostBoard/>

</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useGroupStore } from '@/stores/group'
import { useUserStore } from '@/stores/user'
import { formatDate2 } from '@/utils/datefomatter'

import GroupMovieList from '@/components/group/GroupMovieList.vue'
import GroupPostBoard from '@/components/group/GroupPostBoard.vue'

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

    groupstore.fetchGroupMovie(groupId.value)
    groupstore.fetchGroupPost(groupId.value)
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
    width: 40%;
    height: 200px;
    background-color: #343d3f;
    display: flex;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;

}
.info-detail{
  margin-left: 30px;
  position: relative;
}
.members-btn {
  position: absolute;
  left: 500px;
  bottom: 15px;
  margin: 0;
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
  z-index: 1000;
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
  z-index: 1000;
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