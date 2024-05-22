<template>
  <div>
    <h3 style="cursor: pointer;">{{ post.id }}. {{ post.title }} ({{ post.comment_set.length }}) </h3>
    <p>작성자 : {{ post.user.username }}</p>
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