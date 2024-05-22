<template>
	<MovieSlidebar />
	<GenreBar />
	<RecommendMovieList />
	<PopularMovieList />
	<MovieListWithReview />
</template>

<script setup>
import GenreBar from '@/components/GenreBar.vue'
import MovieSlidebar from '@/components/MovieSlideBar.vue'
import PopularMovieList from '@/components/home/PopularMovieList.vue'
import RecommendMovieList from '@/components/home/RecommendMovieList.vue'
import MovieListWithReview from '@/components/home/MovieListWithReview.vue'
</script>

<style scoped>

</style>
