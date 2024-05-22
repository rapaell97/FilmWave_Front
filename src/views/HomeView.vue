<template>
	<MovieSlidebar />
	<GenreBar />
	<RecommendMovieList />
	<PopularMovieList />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie'
import MovieCard from '@/components/MovieCard.vue'
import GenreBar from '@/components/GenreBar.vue'
import MovieSlidebar from '@/components/MovieSlideBar.vue'
import PopularMovieList from '@/components/home/PopularMovieList.vue'
import RecommendMovieList from '@/components/home/RecommendMovieList .vue'

const moviestore = useMovieStore()
const slideContainer = ref(null)

onMounted(() => {
	moviestore.fetchMovie()
})

const scrollLeft = () => {
	if (slideContainer.value) {
		slideContainer.value.scrollBy({
			left: -window.innerWidth * 0.99,
			behavior: 'smooth'
		})
	}
}

const scrollRight = () => {
	if (slideContainer.value) {
		slideContainer.value.scrollBy({
			left: window.innerWidth * 0.99,
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

.scroll-btn {
	width: 40px;
	height: 80px;
	background-color: #ccc;
	border: none;
	padding: 10px;
	cursor: pointer;
	opacity: 20%;
	border-radius: 0%;
	transition: transform 0.5s ease, box-shadow 0.3s ease;
}

.btn-left {
	position: absolute;
	top: 150px;
	z-index: 1;
}

.btn-right {
	position: absolute;
	top: 150px;
	right: 0px;
}

.btn-left:hover {
	opacity: 0.7;
	transform: scale(1.1);
	background-color: black;
}

.btn-left:hover .fa-arrow-left {
	color: white;
}

.btn-right:hover {
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
	flex: 0 0 20%;
	padding: 5px;
}

.category-name {
	color: rgb(221, 217, 217);
	margin-left: 15px;
	margin-bottom: 10px;
}
</style>
