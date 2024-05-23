<template>
	<div>
    <h2 class="category-name">최신 인기 영화</h2>
    <div class="container">
        <button class="scroll-btn btn-left" @click="scrollLeft"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="list-div" ref="slideContainer">
            <div class="slide-div">
                <MovieCard
                    v-for="movie in moviestore.movieList"
                    :key="movie.movie_id"
                    :movie="movie"
                    class="movie-card"
                />
            </div>
        </div>
        <button class="scroll-btn btn-right" @click="scrollRight"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
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
            left: -window.innerWidth * 0.3,
            behavior: 'smooth'
        })
    }
}

const scrollRight = () => {
    if (slideContainer.value) {
        slideContainer.value.scrollBy({
            left: window.innerWidth * 0.3,
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
    position: relative;
}

.scroll-btn{
    width: 40px;
    height: 80px;
    background-color: #ccc;
    border: none;
    padding: 10px;
    cursor: pointer;
    opacity: 20%;
    transition: transform 0.5s ease, box-shadow 0.3s ease;
}

.btn-left{
    position: absolute;
    top: 150px;
    z-index: 1;
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
}
.btn-right{
    position: absolute;
    top:150px;
    right: 0px;
    border-top-left-radius: 20%;
    border-bottom-left-radius: 20%;
}
.btn-left:hover{
    opacity: 0.7;
    transform: scale(1.1);
    background-color: black;
}
.btn-left:hover .fa-arrow-left {
    color: white; 
}
.btn-right:hover{
    opacity: 0.7;
    transform: scale(1.1);
    background-color: black;
}
.btn-right:hover .fa-arrow-right {
    color: white; 
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
    flex: 0 0 12%;
    padding: 5px;
}
.category-name{
    color: rgb(221, 217, 217);
    margin-left: 25px;
    margin-bottom: 10px;
}
</style>
