<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div v-if="postArticle" class="modal-content" @click.stop>
      <button @click="closeModal">Close</button>
      <h2 v-if="postArticle.title">제목 : {{ postArticle.title }}</h2>
      <b v-if="postArticle.content">{{ postArticle.content }}</b>
      <p v-if="postArticle.user && postArticle.user.username">작성자 : {{ postArticle.user.username }}</p>
      <p>작성시간 : {{ formatDate(postArticle.create_at) }}</p>
      <div v-if="postArticle.comment_set.length > 0" class="comment-div">
        <div v-for="comment in postArticle.comment_set" :key="comment.id">
          <div class="oneline-comment">
            <p>{{ comment.user.username }}: {{ comment.content }}</p>
            <button @click.stop="deleteComment(postArticle.id, comment.id)" class="comment-delete-btn">
              <i class="fa-solid fa-x" style="color: #1e2729;"></i>
            </button>
          </div>
          <hr>
        </div>
      </div>

      <p v-else>아직 댓글이 없습니다</p>
      <div class="comment-create-div">
        <b @click="createDivOpen" style="cursor: pointer;">댓글 작성하기</b>
        <div v-if="isCreateDivOpen">
          <input type="text" v-model="newComment" class="comment-input">
          <button @click="createComment(postId)">작성</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useGroupStore } from '@/stores/group'
import { formatDate } from '@/utils/datefomatter'

const userstore = useUserStore()
const groupstore = useGroupStore()
const route = useRoute()

const props = defineProps({
  postId: Number,
  isOpen: Boolean
})

const groupId = ref(route.params.groupId)
const emit = defineEmits(['close'])
const newComment = ref('')
const isCreateDivOpen = ref(false)
const postArticle = ref(null)

const createDivOpen = function() {
  isCreateDivOpen.value = true
}

const closeModal = () => {
  emit('close')
}

const deleteComment = function(postId, commentId){
  axios({
    method: 'DELETE',
    url: `${userstore.API_URL}/groups/${groupId.value}/posts/${postId}/comments/${commentId}/`,
    headers: {
      Authorization: `Token ${userstore.token}`
    }
  })
  .then(response => {
    fetchComment()
  })
  .catch(error => {
    console.log(error)
  })
}

const fetchComment = function() {
  axios({
    method: 'GET',
    url: `${userstore.API_URL}/groups/${groupId.value}/posts/`,
    headers: {
      Authorization: `Token ${userstore.token}`
    }
  })
  .then(response => {
    console.log(response.data)
    response.data.forEach((res) => {
      if (res.id === props.postId) {
        postArticle.value = res
      }
    })
    console.log(postArticle.value)
  })
  .catch(err => {
    console.log(err)
  })
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    fetchComment()
  }
})

const createComment = function(postId) {
  axios({
    method: 'POST',
    url: `${userstore.API_URL}/groups/${groupId.value}/posts/${postId}/comments/`,
    headers: {
      Authorization: `Token ${userstore.token}`
    },
    data: {
      content: newComment.value
    }
  })
  .then(res => {
    console.log(res.data)
    groupstore.fetchGroupPost(groupId.value)
    newComment.value = ''
    fetchComment()
  })
  .catch(err => {
    console.log(err)
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
  background-color: #343d3f;
  padding: 20px;
  border-radius: 8px;
  width: 1000px;
}
.comment-create-div {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.comment-div {
  padding: 10px;
  background-color: #1e2729;
}
.comment-input {
  color: aliceblue;
  width: 500px;
  margin-top: 5px;
  margin-right: 5px;
  background-color: #1e2729;
}

h2, p, b{
  color: rgb(221, 217, 217);
}
.oneline-comment{
  display: flex;
  align-items: center
}

.comment-delete-btn{
  cursor: pointer;
  width: 25px;
  margin-left: 10px;
}
</style>
