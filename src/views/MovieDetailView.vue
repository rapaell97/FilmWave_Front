<template>
    <div>
        <iframe width="100%" height="300" :src="`https://www.youtube.com/embed/${moviestore.trailerKey}?autoplay=1&controls=0&roof=1&playlist=${moviestore.trailerKey}&mute=1`" allow="autoplay" frameborder="0"></iframe>
    </div>
    <div class="info-box" :style="infoBoxStyle">
        <div class="info-div">
            <div class="info-container">
                <img class="movie-img" :src="`https://image.tmdb.org/t/p/original/${moviestore.movieDetailList.poster_path}`" alt="" >
                <div class="info-txt-div">
                    <h3 class="title-txt">{{ moviestore.movieDetailList.title }}</h3>
                    <p class="info-txt">개봉일: {{ moviestore.movieDetailList.release_date }}</p>
                    <p class="info-txt" style="padding-bottom: 15px;">평점: {{ average(moviestore.movieDetailList.vote_average) }}</p>
                    <p class="info-txt">줄거리</p>
                    <p class="info-txt">{{ moviestore.movieDetailList.overview }}</p>
                    <i v-if="!isLike" @click="movieLike" class="fa-regular fa-heart fa-2xl" style="color: rgba(99, 193, 132);"></i>
                    <i v-else @click="movieLike" class="fa-solid fa-heart" style="color: rgba(99, 193, 132);"></i>
                    <!-- <p v-else @click="movieLike">안좋아요버튼</p> -->
                </div>
            </div>
        </div>
    </div>
    <MovieReview
    :movieId="movieId"
    />
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movie'
import { useUserStore } from '@/stores/user'
import MovieReview from '@/components/MovieReview.vue'
import { average } from '@/utils/voteaverage'

const route = useRoute()
const moviestore = useMovieStore()
const userstore = useUserStore()
const movieId = ref(route.params.movieId)
const isLike = ref(false)

const infoBoxStyle = computed(() => {
    return {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviestore.movieDetailList.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
})

const movieLike = function() {
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
iframe{
    margin-bottom: 50px;
}
.info-box{
    display: flex;
    margin: auto;
    width: 95%;
    height: 400px;
    box-shadow: 0 0 10px 5px rgba(99, 193, 132, 0.7)
}
.info-div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(26, 30, 31, 0.7);
}
.info-container{
    width: 80%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid salmon; */
}
.movie-img{
    height: 100%;
    width: 200px;
}

h3, p{
    color: rgb(221, 217, 217);
}
.title-txt{
    margin-top: 5px;
    margin-bottom: 5px;
}
.info-txt{
    margin-top: 0;
    margin-bottom: 0;
}
.info-txt-div{
    padding-left: 20px;
    padding-right: 20px;
}

</style>