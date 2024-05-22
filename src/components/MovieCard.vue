<template>
    <div class="movie-div">
        <RouterLink :to="{name: 'movieDetail', params:{'movieId': movie.movie_id}}">
            <div class="img-div">
                <img class="movie-img" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="" >
            </div>
            <h3 class="movie-title">{{ movie.title }}</h3>
        </RouterLink>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
    movie: Object
})
</script>

<style scoped>
.movie-div {
    width: 200px; 
    height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    box-sizing: border-box;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.img-div {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.movie-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 3%; 
}
a{
    text-decoration: none;
    color: rgb(221, 217, 217);
}
.movie-title{
    margin-top: 5px;
    margin-bottom: 0px;
    text-align: center;
}
.movie-div:hover{
    transform: scale(1.04);
}

</style>