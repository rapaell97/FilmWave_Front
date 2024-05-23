<template>
    <div class="container">
        <img @click="moveToDetail(movie.movie_id)"  class="movie-img" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title" >
        <div class="review">
            <div class="score-container">
                <div class="score-container2">
                    <i class="fa-solid fa-star fa-xl" style="color: #df3030;"></i>
                    <h2 class="score">{{ review.score }}</h2>
                </div>
                <p>{{ formatTimeDifference(review.created_at) }}</p>
            </div>
            <div class="content-container">
                <p class="content">{{ review.content }}</p>
                <RouterLink :to="{name:'mypage', params: {'username': writer.username} }" class="writer">
                    {{ writer.username }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formatTimeDifference } from '@/utils/dateDifferenceFormatter'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
    reviewWithMovie: Object
})

const movie = props.reviewWithMovie.movie
const review = props.reviewWithMovie
const writer = props.reviewWithMovie.user

const moveToDetail = function (movie_id) {
    router.push({name:'movieDetail', params: {movieId: movie_id}})
}
</script>

<style scoped>

.movie-img {
    width: 175px;
    height: 225px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
}
.movie-img:hover{
    transform: scale(1.1);
}

.container {
    display: flex;
    align-items: center;
    width: 470px;
    height: 300px;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
}

div {
    color: white;
}

.review {
    border: 2px solid rgb(99, 193, 132, 0.7);
    background-color: rgb(27, 46, 34);
    width: 400px;
    height: 200px;
    border-radius: 10px;
    margin-left: 10px;
    padding: 10px;
}

.score-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
}

.score-container2 {
    display: flex;
    align-items: center;
}

.score {
    margin:0;
    padding-left: 5px;
}

.content-container {
    padding: 30px;
}

.content {
    font-size: 25px;
    margin: 0;
}

.writer {
    color: grey;
}
</style>
