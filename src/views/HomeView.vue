<template>
	<MovieSlidebar />
	<GenreBar />
	<RecommendMovieList />
	<PopularMovieList />
	<MovieListWithReview />
	<!-- <Footer /> -->
</template>

<script setup>
import GenreBar from '@/components/GenreBar.vue'
import MovieSlidebar from '@/components/MovieSlideBar.vue'
import PopularMovieList from '@/components/home/PopularMovieList.vue'
import RecommendMovieList from '@/components/home/RecommendMovieList.vue'
import MovieListWithReview from '@/components/home/MovieListWithReview.vue'
import Footer from '@/components/app/Footer.vue'

</script>

<style scoped>

</style>
