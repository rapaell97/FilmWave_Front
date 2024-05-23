<template>
    <h1>주요 {{ genreName }} 영화</h1>
    <div class="movie-grid">
        <MovieCard
            v-for="movie in moviestore.movieList"
            :key="movie.id"
            :movie="movie"
        />
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useMovieStore } from '@/stores/movie';
import { useGenreStore } from '@/stores/genre';
import MovieCard from '@/components/MovieCard.vue';

const moviestore = useMovieStore()
const genrestore = useGenreStore()
const route = useRoute()

const genreId = ref(route.params.genreId)
const genreName = ref('')

onMounted(async () => {
    await moviestore.fetchMovie(genreId.value)
    await genrestore.fetchGenre()
    await nextTick()

    const genre = genrestore.genreList.find(genre => genre.genre_id === genreId.value)
    if (genre) {
        genreName.value = genre.name
    }
})

watch(() => genrestore.genreList, (newList) => {
    const genre = newList.find(genre => genre.genre_id === genreId.value)
    if (genre) {
        genreName.value = genre.name
    }
})

</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 50px;
    color: rgb(221, 217, 217);
}
.movie-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 16px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: -10px 0 20px -5px rgba(99, 193, 132, 0.6), 10px 0 20px -5px rgba(99, 193, 132, 0.6);}
</style>
