<template>
    <div class="movie-grid">
        <MovieCard
            v-for="movie in moviestore.movieList"
            :key="movie.id"
            :movie="movie"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie';
import { useRoute } from 'vue-router';
import MovieCard from '@/components/MovieCard.vue';

const moviestore = useMovieStore()
const route = useRoute()

const genreId = ref(route.params.genreId)

onMounted(() => {
    moviestore.fetchMovie(genreId.value)
})

</script>

<style scoped>
.movie-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 한 줄에 5개의 아이템을 배치 */
    gap: 16px; /* 각 아이템 간격 */
}
</style>
