<template>
	<MovieSlidebar />
	<GenreBar />
	<template v-if="userStore.token">
		<RecommendMovieList />
	</template>
	<PopularMovieList />
	<MovieListWithReview />
</template>

<script setup>
import GenreBar from '@/components/GenreBar.vue'
import MovieSlidebar from '@/components/MovieSlideBar.vue'
import PopularMovieList from '@/components/home/PopularMovieList.vue'
import RecommendMovieList from '@/components/home/RecommendMovieList.vue'
import MovieListWithReview from '@/components/home/MovieListWithReview.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()


</script>

<style scoped>

</style>
