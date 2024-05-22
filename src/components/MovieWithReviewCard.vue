<template>
    <div class="container">
        <img @click="moveToDetail(movie.movie_id)"  class="movie-img" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title" >
        <div class="review">
            <div class="score-container">
                <div class="score-container2">
                    <img src="@/assets/starScore2.png" alt="star">
                    <p class="score">{{ review.score }}</p>
                </div>
                <p>{{ formatTimeDifference(review.created_at) }}</p>
            </div>
            <div class="content-container">
                <p class="content">{{ review.content }}</p>
                <p class="writer">{{ writer.username }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formatTimeDifference } from '@/utils/dateDifferenceFormatter'
import { useRouter } from 'vue-router';

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

img {
    border-radius: 10px;
}

.container {
    border-radius: 10px;
    width: 45%;
    height: 300px;
    display: flex;
    margin: 30px;
}

div {
    color: white;
}

.review {
    border: 2px solid rgb(99, 193, 132, 0.7);
    background-color: rgb(27, 46, 34);
    width: 100%;
    border-radius: 10px;
    margin-left: 10px;
}

.score-container {
    display: flex;
    justify-content: space-between;
    img {
        width:40px;
        height: 40px;
    }
}

.score-container2 {
    display: flex;
}

.score {
    font-size: 20px;
}

.content-container {
    padding: 30px;
}

.content {
    font-size: 25px;
}

.writer {
    color: grey;
}
</style>
