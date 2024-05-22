<template>
  <div>
    <h3>{{ post.id }}. {{ post.title }}</h3>
    <p><i class="fa-solid fa-comment" style="color: #36383a;"></i> {{ post.comment_set.length }}개 댓글</p>
    <hr>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  post: Object
})

</script>

<style scoped>

</style>