<template>
    <div class="movie-div">
        <RouterLink :to="{name: 'movieDetail', params:{'movieId': movie.id}}">
            <img class="movie-img" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="" >
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
.movie-div{
    width: 250px;
    height: 150px;
    padding: 20px;
    display: flex;
    margin: 0px;
}
.movie-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>