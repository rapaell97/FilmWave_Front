<template>
    <RouterLink :to="{ name: 'genreDetail', params: { 'genreId' : genre.genre_id } }">
        <div class="genre-card">
            <h3>{{ genre.name }}</h3>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    genre: Object
})

</script>

<style scoped>
.genre-card{
    width: 120px;
    height: 90px;
    border: 1px solid black;
}

</style>