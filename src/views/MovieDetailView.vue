<template>
    <h1>영화상세정보</h1>
    <div>
        <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${moviestore.trailerKey}?autoplay=1&controls=0&roof=1&playlist=${moviestore.trailerKey}&mute=1`" allow="autoplay" frameborder="0"></iframe>
    </div>
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
    <MovieReview
    :movieId="movieId"
    />
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movie'
import { useUserStore } from '@/stores/user'
import MovieReview from '@/components/MovieReview.vue'

const route = useRoute()
const moviestore = useMovieStore()
const userstore = useUserStore()
const movieId = ref(route.params.movieId)
const isLike = ref(false)

const movieLike = function() {
    console.log(userstore.token)
    moviestore.movieDetailList.like_users.forEach(user => {
        if (user.username === moviestore.username){
            isLike.value = true
        }
    })
    
    if (isLike.value === true){
        axios({
            method: 'DELETE',
            url: `${moviestore.API_URL}/movies/${movieId.value}/like/`,
            headers: {
                Authorization: `Token ${userstore.token}`
            }
        })
        .then((res) => {
            console.log(res.data)
            isLike.value = false
        })
        .catch((err) => {
            console.log(err)
        })
    }
    else{
        axios({
            method: 'POST',
            url: `${moviestore.API_URL}/movies/${movieId.value}/like/`,
            headers: {
                Authorization: `Token ${userstore.token}`
            }
        })
        .then((res) => {
            console.log(res.data)
            isLike.value = true
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

onMounted(() => {
    moviestore.fetchMovieDetail(movieId.value)
    moviestore.fetchTrailer(movieId.value)
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