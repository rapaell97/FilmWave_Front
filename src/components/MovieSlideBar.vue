<template>
  <div class="slide-div">
    <div class="slide-container" :style="{ transform: `translateX(-${currentSlide * 100}vw)` }">
      <div
        v-for="movie in validMovies"
        class="slide-box"
      >
      <RouterLink :to="{name: 'movieDetail', params:{'movieId': movie.movie_id}}">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="" class="slide-img">
      <div class="movie-info">
        <div style="margin: auto;">
          <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="" class="info-poster">
        </div>
        <div>
          <h3 class="info">{{ movie.title }}</h3>
            <p class="info">장르: {{ movie.genres[0].name }}</p>
            <p class="info">줄거리: {{ replaceOverview(movie.overview) }}</p>
          </div>
        </div>
      </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movie'

const moviestore = useMovieStore()
const currentSlide = ref(0)

const validMovies = computed(() => {
  return moviestore.movieList.filter(movie => movie && movie.overview && movie.overview.length > 0)
})

const startSlideShow = () => {
  const totalSlides = moviestore.movieList.length
  let slideInterval

  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides
  }, 5000)

  return () => {
    clearInterval(slideInterval)
  }
}

const replaceOverview = (overview) => {
  const maxLength = 248
  if (overview.length > maxLength) {
    return overview.substring(0, maxLength) + '...'
  }
  return overview
}

onMounted(() => {
  const clearSlideInterval = startSlideShow()
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
  box-shadow: 0 -15px 15px -10px rgba(0, 0, 0, 0.7), 0 15px 15px -10px rgba(0, 0, 0, 0.7);
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
  position: relative;
}
.slide-img{
  width: 100%;
  height: 100%;
}
.movie-info{
  display: flex;
  width: 600px;
  height: 330px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 50px;
  right: 100px;
  border-radius: 8%;
  transition: background-color 0.5s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.movie-info:hover {
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}

.info-poster{
  width: 200px;
  margin-right: 15px;
  border-radius: 10%;
}
.info{
  color: aliceblue;
  margin-bottom: 0;
}

</style>
