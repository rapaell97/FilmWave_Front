<template>
  <h2 class="category-name">그룹 게시판</h2>
  <div class="container">

    <div class="postBoard-div">
      <GroupPostArticle
        v-for="post in groupstore.groupPostList"
        :post="post"
      />
      <button v-if="isPostCreateOpen===false" class="icon-btn" @click="postCreateOpen">
        <i class="fa-solid fa-pen-to-square fa-2xl"></i>
      </button>
    </div>

    <div v-if="isPostCreateOpen" class="post-create">
      <form @submit.prevent="postCreate">
        <input type="text" placeholder="제목을 입력하세요" v-model="newPostTitle">
        <textarea placeholder="게시글을 입력하세요.." v-model="newPostContent"></textarea>
        <button>작성</button>
      </form>
      <!-- <button @click="postCreateClose">취소</button> -->
    </div>

  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useGroupStore } from '@/stores/group'
import { useUserStore } from '@/stores/user'
import GroupPostArticle from '@/components/group/GroupPostArticle.vue'

const route = useRoute()
const groupstore = useGroupStore()
const userstore = useUserStore()

const groupId = ref(route.params.groupId)
const isPostCreateOpen = ref(false)
const newPostTitle = ref('')
const newPostContent = ref('')

const postCreateOpen = function() {
  isPostCreateOpen.value = true
}
const postCreateClose = function(){
  isPostCreateOpen.value = false
}

const postCreate = function() {
  axios({
    method: 'POST',
    url: `${groupstore.API_URL}/groups/${groupId.value}/posts/`,
    headers: {
          Authorization: `Token ${userstore.token}`
    },
    data: { 
      title: newPostTitle.value,
      content: newPostContent.value
    }
  })
  .then(res => {
    console.log(res.data)
    newPostTitle.value=''
    newPostContent.value=''
    groupstore.fetchGroupPost(groupId.value)
  })
  .catch(err => {
    console.log(err)
  })
}
</script>

<style scoped>
.category-name {
  color: rgb(221, 217, 217);
  margin-left: 15px;
  margin-bottom: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.postBoard-div {
  width: 80%;
  height: 400px;
  background-color: aliceblue;
  margin-bottom: 10px;
}
.post-create {
  width: 80%;
}
textarea {
  width: 100%;
  height: 3em;
  border: none;
  resize: none;
  padding: 0;
  font-size: 1.5em;
}
.icon-btn {
  background: none;
  border: none;
  padding: 0;  /* 패딩 제거 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn i {
  margin: 0;  /* 아이콘 주변 여백 제거 */
}

.post-btn {
  display: flex;
  justify-content: flex-end;  /* 오른쪽 끝으로 정렬 */
  margin-top: 5px;
}
</style>