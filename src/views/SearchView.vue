<template>
    <h1>검색페이지</h1>
    <h3>{{ searchMessage }}</h3>
    <input type="text" v-model="keyword" @keyup.enter="fetchKewordResult">
    <div class="movie-grid">
        <MovieCard
        v-for="movie in searchResult"
        :key="movie.movie_id"
        :movie="movie"
        />
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useMovieStore } from '@/stores/movie'
import MovieCard from '@/components/MovieCard.vue';

const keyword = ref('')
const searchMessage = ref('검색어를 입력하세요')
const searchResult = ref('')
const moviestore = useMovieStore()

const fetchKewordResult = function() {
    searchMessage.value = `${keyword.value} 검색결과`
    axios({
      method: 'GET',
      url: `${moviestore.API_URL}/movies/search/`,
      params: {
        q: keyword.value
      }
    })
    .then(res => {
      console.log(res.data)
      searchResult.value = res.data
    })
    .catch(err => {
      console.log(err)
    })
}

</script>

<style scoped>
.movie-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 16px; 
}
</style>