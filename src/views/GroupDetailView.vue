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

    <div class="group-div" :style="groupDivStyle">
      <div class="group-box" v-if="group.admin">
        <div class="group-info">
          <div class=group-img-div>
            <img :src="group.image" alt="" class="group-img">
          </div>
          <div class="info-detail">
              <h1>{{ group.title }}</h1>
              <p>소개 : {{ group.description }}</p>
              <p>운영자 : {{ group.admin.username }}</p>
              <p>개설일자 : {{ formatDate2(group.created_at) }}</p>
          </div>
        </div>
        <div class="info-btn-div">
          <button
            v-if="isMember === false"
            @click="MembershipRequest"
            class="info-btn"
            >
            가입하기
          </button>
          <button class="members-btn info-btn" @click="openMemberModal">Members</button>
        </div>
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

    <GroupMovieList/>
    <GroupPostBoard/>

</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
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


const groupDivStyle = computed(() => {
  if (groupstore.groupMovieList.length > 0) {
    return {
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${groupstore.groupMovieList[0].backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  } else {
    return {
      backgroundImage: 'url(@/assets/example.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }
})
</script>

<style scoped>
.group-div{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
  box-shadow: 0 1px 10px rgba(99, 193, 132, 1);
}

.group-box{
    width: 100%;
    height: 100%;
    background-color: rgba(26, 30, 31, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.group-info{
  width: 40%;
  height: 200px;
  display: flex;
  align-items: center;
  padding-left: 200px;
}
.info-detail{
  margin-left: 30px;
  position: relative;
  color: rgb(221, 217, 217);
}

.group-img-div{
  width: 180px;
  height: 70%
}
.group-img{
    width: 100%;
    height: 100%;
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
.info-btn-div{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.info-btn{
  width: 100px;
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgba(99, 193, 132);
  border: none;
  font-weight: bold;
}
.info-btn:hover{
  cursor: pointer;
}
</style>