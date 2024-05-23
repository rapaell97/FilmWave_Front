<template>
  <h2 style="margin-bottom: 0; margin-left: 20px;">{{ userName }}님이 좋아하는 영화 목록</h2>
  <div class="container">
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

const props = defineProps({
  userName: String
})

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
