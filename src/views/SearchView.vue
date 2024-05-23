<template>
  <div class="search-info">
    <h1 v-if="!searchResult" class="search-txt">원하는 영화를 검색하세요</h1>
    <h1 v-else class="search-txt">{{ keyword }} 검색 결과</h1>
    <input type="text" v-model="keyword" @keyup.enter="fetchKewordResult" class="search-input">
  </div>

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
    grid-template-columns: repeat(6, 1fr); 
    gap: 16px;
    width: 85%;
    margin-left: auto;
    margin-right: auto; 
}
.search-txt{
  color: rgb(221, 217, 217);
}
.search-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}
.search-input{
  width: 80%;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #343d3f;
  border: none;
  box-shadow: 0px 5px 10px rgba(99, 193, 132, 0.8), 0px -5px 10px rgba(99, 193, 132, 0.8), 5px 0px 10px rgba(99, 193, 132, 0.8), -5px 0px 10px rgba(99, 193, 132, 0.8);
  color: rgb(221, 217, 217);
}

</style>
