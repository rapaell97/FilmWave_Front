<template>
  <div class="slide-div">
    <div class="slide-container" :style="{ transform: `translateX(-${currentSlide * 100}vw)` }">
      <div
        v-for="movie in moviestore.movieList"
        class="slide-box"
      >
      <RouterLink :to="{name: 'movieDetail', params:{'movieId': movie.movie_id}}">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="" class="slide-img">
      </RouterLink>
      <div>
        <div>
          <img src="" alt="">
        </div>
        <h3>{{ movie.title }}</h3>
        <p></p>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movie'
import MovieSlideCard from '@/components/MovieSlideCard.vue'

const moviestore = useMovieStore()
const currentSlide = ref(0)

const startSlideShow = () => {
  const totalSlides = moviestore.movieList.length
  let slideInterval

  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides
  }, 5000)

  // Clear the interval when the component is unmounted
  return () => {
    clearInterval(slideInterval)
  }
}

onMounted(() => {
  const clearSlideInterval = startSlideShow()
  // Clear interval on unmounted
  return () => {
    clearSlideInterval()
  }
})
</script>


<style scoped>
.slide-div {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 800px;
  position: relative;
}

.slide-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 1s ease;
}

.slide-box {
  flex: 0 0 100vw;
  height: 100%;
  box-sizing: border-box; 
  overflow: hidden;
}
.slide-img{
  width: 100%;
  height: 100%;
}
</style>
