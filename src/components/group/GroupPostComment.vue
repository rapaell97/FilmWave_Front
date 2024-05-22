<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button @click="closeModal">Close</button>
      <h2>제목 : {{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <p>작성자 : {{ post.user.username }}</p>

      <div v-if="post.comment_set" class="comment-div">
        <div v-for="comment in post.comment_set">
            {{ comment.user.username }}: {{ comment.content }}
            <hr>
        </div>
      </div>

      <p v-if="post.comment_set.length===0">아직 댓글이 없습니다</p>
      <div class="comment-create-div">
        <b @click="createDivOpen" style="cursor: pointer;">댓글 작성하기</b>
        <div v-if="isCreateDivOpen">
          <input type="text" v-model="newComment" class="comment-input">
          <button @click="createComment(post.id)">작성</button>
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

const userstore = useUserStore()
const groupstore = useGroupStore()
const route = useRoute()


const props = defineProps({
  post: Object,
  isOpen: Boolean,
})

const groupId = ref(route.params.groupId)

const emit = defineEmits(['close'])
const newComment = ref('')
const isCreateDivOpen = ref(false)

const createDivOpen = function() {
  isCreateDivOpen.value = true
}

const closeModal = () => {
  emit('close')
}

const createComment = function(postId){
  axios({
    method: 'POST',
    url: `${userstore.API_URL}/groups/${groupId.value}/posts/${postId}/comments/`,
    headers:{
        Authorization: `Token ${userstore.token}`
      },
    data: {
      content : newComment.value
    }
  })
  .then(res => {
    console.log(res.data)
    groupstore.fetchGroupPost(groupId.value)
    newComment.value = ''
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
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 800px;
}
.comment-create-div {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.comment-div{
  border: solid 1px;
  padding: 10px;
}
.comment-input{
  width: 500px;
  margin-top: 5px;
  margin-right: 5px;
}


</style>
