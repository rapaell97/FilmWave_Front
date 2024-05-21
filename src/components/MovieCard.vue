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
    align-items: center;
    margin: 0;
    box-sizing: border-box;
}
.img-div {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.movie-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* 이미지를 중앙에 맞추고 잘리지 않도록 설정 */
}
</style>