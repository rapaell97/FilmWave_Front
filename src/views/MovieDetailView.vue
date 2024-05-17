<template>
    <h1>영화상세정보</h1>
    <h1>동영상</h1>
    <div class="info-div">
        <img class="movie-img" :src="`https://image.tmdb.org/t/p/original/${moviestore.movieDetailList.poster_path}`" alt="" >
        <div >
            <h3>{{ moviestore.movieDetailList.title }}</h3>
            <p>{{ moviestore.movieDetailList.overview }}</p>
            <p>기타 정보...</p>
            <span v-if="isLike === false" @click="movieLike">좋아요버튼</span>
            <span v-else @click="movieLike">안좋아요버튼</span>
            {{ isLike }}
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movie';

const route = useRoute()
const moviestore = useMovieStore()
const movieId = ref(route.params.movieId)
const isLike = ref(false)

const movieLike = function() {
    axios({
      method: 'post',
      url: `${moviestore.API_URL}`,
      params: movieId 
    })
    .then((res) => {
      console.log(res.data)
      isLike.value = true
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
    moviestore.fetchMovieDetail(movieId.value)
})
</script>

<style scoped>
.info-div{
    display: flex;
    padding: 10px;
}
.movie-img{
    width: 200px;
}

</style>