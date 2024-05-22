<template>
    <div class="container">
        <img class="movie-img" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title" >
        <div>
            <p>{{ review.score }}</p>
            <p>{{ review.content }}</p>
            <p>{{ writer.username }}</p>
        </div>
        <p>{{ review.created_at }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    reviewWithMovie: Object
})

const movie = props.reviewWithMovie.movie
const review = props.reviewWithMovie
const writer = props.reviewWithMovie.user
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
    background-color: dimgrey;
}


 div {
    color: white;
 }
</style>
