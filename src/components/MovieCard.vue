<template>
    <div class="movie-div">
        <RouterLink :to="{name: 'movieDetail', params:{'movieId': movie.movie_id}}">
            <div class="img-div">
                <img class="movie-img" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="" >
            </div>
            <h3>{{ movie.title }}</h3>
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
    height: 500px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 0px;
}
.img-div {
    width: 100%;
    height: 80%;
    overflow: hidden;
}
.movie-img {
    width: 300px;
    height: 400px;
    object-fit: contain; 
}

</style>