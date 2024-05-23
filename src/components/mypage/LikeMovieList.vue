<template>
  <div class="container">
    <h3>좋아하는 영화 목록</h3>
    <MovieCard 
      v-for="likeMovie in likeMovies"
      :key="likeMovie.movie_id"
      :movie="likeMovie"
    />
  </div>
</template>

<script setup>
import MovieCard from '../MovieCard.vue';

import axios from 'axios';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const userStore = useUserStore()
const likeMovies = ref([])


onMounted(() => {
  axios({
    method: 'GET',
    url: `${userStore.API_URL}/movies/${route.params.username}/likes/`,
  })
  .then(res => {
    console.log(res.data)
    likeMovies.value = res.data
  })
  .catch(err => {
    console.log(err)
  })
})
</script>

<style scoped>
.container {
  display: flex;
}
</style>
