<template>
    <div class="genrebar-div">
        <GenreCard
        v-for="genre in genrestore.genreList"
        :key="genre.id"
        :genre="genre"
        />
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useGenreStore } from '@/stores/genre'
import GenreCard from '@/components/GenreCard.vue'

const genrestore = useGenreStore()

onMounted(() => {
    genrestore.fetchGenre()
})


</script>

<style scoped>

.genrebar-div{
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    justify-content: space-evenly;
}

</style>