<template>
  <div>
    <h1>선호도 조사 뷰</h1>
    <!-- {{ genres }} -->
    <form @submit.prevent="submitServey">
      <div>
        <div v-for="genre in genres">
          <label :for="genre.name">{{ genre.name }}</label>
          <input type="checkbox" :id="genre.name" :value="genre.id" v-model="serveyResult">
        </div>
      </div>
      <input type="submit" value="확인">
    </form>
    {{ serveyParams }}
    <RouterLink :to="{ name: 'home' }">다음에 진행할게요</RouterLink>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movie';

const genres = ref([])
const serveyResult = ref([])
const moviestore = useMovieStore()
const serveyParams = ref('')

onMounted(() => {
  axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/genre/movie/list`,
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${moviestore.API_TOKEN}`
  }
  })
  .then(res => {
    console.log(res.data.genres)
    genres.value = res.data.genres
  })
  .catch(err => {
    console.log(err)
  })
})

const submitServey = function() {
  serveyParams.value = serveyResult.value.join('%')

  axios({
    method: 'POST',
    url: 'https://example.com/submit/', 
    params: {
      genres: serveyParams.value
    }
  })
  .then(res => {
    console.log('제출완료')
  })
  .catch(err => {
    console.log(err)
  })
}

</script>

<style scoped>

</style>