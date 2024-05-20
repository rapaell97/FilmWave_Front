<template>
    <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="" class="slide-img">
</template>

<script setup>
const props = defineProps({
  movie: Object
})

</script>

<style scoped>
.card-div{
  width: 100%;
}
.slide-img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>