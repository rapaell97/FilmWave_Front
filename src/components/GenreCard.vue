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
    height: 80px;
    border: 1px solid black;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

a{
    text-decoration: none;
}

</style>