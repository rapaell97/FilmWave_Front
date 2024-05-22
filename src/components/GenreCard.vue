<template>
    <RouterLink :to="{ name: 'genreDetail', params: { 'genreId' : genre.genre_id } }">
        <div class="genre-card"  @mouseover="isHovered = true" @mouseleave="isHovered = false" :style="cardStyle">
            <!-- {{ genre.genre_id }} -->
            <h3>{{ genre.name }}</h3>
        </div>
    </RouterLink>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    genre: Object
})

const imageUrl = new URL(`../assets/genre/genre_${props.genre.genre_id}.png`, import.meta.url).href;

const isHovered = ref(false)

const cardStyle = computed(() => {
  return {
    transform: isHovered.value ? 'scale(1.3)' : '',
    backgroundImage: isHovered.value ? `url(${imageUrl})` : 'linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))',
    backgroundSize: isHovered.value ? 'cover' : '',
    backgroundPosition: isHovered.value ? 'center' : '',
    border: isHovered.value ? '3px solid white' : '3px solid transparent'
  };
});

</script>

<style scoped>
.genre-card{
    width: 150px;
    height: 100px;
    border-radius: 10%;
    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
}

/* .genre-card:hover{
    transform: scale(1.1);
    background-image: url(`@/assets/genre_${genre.genre_id}.png`);
} */

a{
    text-decoration: none;
    color: aliceblue
}

</style>