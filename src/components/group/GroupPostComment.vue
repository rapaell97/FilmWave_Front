<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button @click="closeModal">Close</button>
      <h2>제목 : {{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <p>작성자 : {{ post.user.username }}</p>
      <hr>

      <div v-if="post.comment_set">
        <div v-for="comment in post.comment_set">
            {{ comment }}
        </div>
      </div>
      <p v-if="post.comment_set.length===0">아직 댓글이 없습니다</p>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  post: Object,
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
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
.comment {
  margin-bottom: 10px;
}
</style>
