<template>
  <div class="article-div">
    <h3 style="cursor: pointer;">{{ post.id }}. {{ post.title }} ({{ post.comment_set.length }}) </h3>
    <p>작성자 : {{ post.user.username }}</p>
    <hr>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})

</script>

<style scoped>
.article-div{
  color: rgb(221, 217, 217);
}

</style>