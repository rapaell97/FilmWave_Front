<template>
    <h1>홈 페이지</h1>
    <!-- <iframe src="" frameborder="0"></iframe> -->
    <div class="container">
        <button class="scroll-button" @click="scrollLeft">←</button>
        <div class="list-div" ref="slideContainer">
            <div class="slide-div">
                <h1>평점 기반</h1>
                <MovieCard
                    v-for="movie in moviestore.movieList"
                    :key="movie.movie_id"
                    :movie="movie"
                    class="movie-card"
                />
            </div>
        </div>
        <button class="scroll-button" @click="scrollRight">→</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie'
import MovieCard from '@/components/MovieCard.vue'

const moviestore = useMovieStore()
const slideContainer = ref(null)

onMounted(() => {
    moviestore.fetchMovie()
})

const scrollLeft = () => {
    if (slideContainer.value) {
        slideContainer.value.scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth'
        })
    }
}

const scrollRight = () => {
    if (slideContainer.value) {
        slideContainer.value.scrollBy({
            left: window.innerWidth,
            behavior: 'smooth'
        })
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    overflow: hidden;

}

.scroll-button {
    background-color: #ccc;
    border: none;
    padding: 10px;
    cursor: pointer;
    opacity: 20%;
}

.list-div {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    display: flex;
    align-items: center;
}

.slide-div {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
}

.movie-card {
    flex: 0 0 20%;
    padding: 5px;
}
</style>
