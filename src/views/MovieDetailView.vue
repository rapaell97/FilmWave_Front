<template>
    <div class="info-box" :style="infoBoxStyle">
        <div class="info-div">
            <div class="info-container">
                <img class="movie-img" :src="`https://image.tmdb.org/t/p/original/${moviestore.movieDetailList.poster_path}`" alt="" >
                <div class="info-txt-div">
                    <h3 class="title-txt">{{ moviestore.movieDetailList.title }}</h3>
                    <p class="info-txt" style="margin-bottom: 20px;">
                        {{ formatDate3(moviestore.movieDetailList.release_date) }} | {{ average(moviestore.movieDetailList.vote_average) }} | {{ (moviestore.movieDetailList.genres && moviestore.movieDetailList.genres.length > 0) ? moviestore.movieDetailList.genres[0].name : 'Unknown Genre' }}
                    </p>
                    <p class="info-txt">{{ moviestore.movieDetailList.overview }}</p>
                    <button v-if="!isLike" @click="movieLike" class="like-btn"><i class="fa-regular fa-heart fa-2xl" style="color: rgba(99, 193, 132);"></i></button>
                    <button v-else @click="movieLike" class="like-btn"><i class="fa-solid fa-heart fa-2xl" style="color: rgba(99, 193, 132);"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div class="video-div">
        <iframe width="60%" height="90%" :src="`https://www.youtube.com/embed/${moviestore.trailerKey}?autoplay=1&controls=0&roof=1&playlist=${moviestore.trailerKey}&mute=1`" allow="autoplay" frameborder="0"></iframe>
    </div>
    <MovieReview
    :movieId="movieId"
    />
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movie'
import { useUserStore } from '@/stores/user'
import MovieReview from '@/components/MovieReview.vue'
import { average } from '@/utils/voteaverage'
import { formatDate3 } from '@/utils/datefomatter'

const route = useRoute()
const moviestore = useMovieStore()
const userstore = useUserStore()
const movieId = ref(route.params.movieId)
const isLike = ref(false)
const myMovieList = ref([])

const infoBoxStyle = computed(() => {
    const imageUrl = `url(https://image.tmdb.org/t/p/original/${moviestore.movieDetailList.backdrop_path})`;
    const gradient = 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.5),rgba(0,0,0,0) 100%)';
    
    return {
        backgroundImage: `${gradient}, ${imageUrl}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
});

const movieLike = function() {

    if (isLike.value === true){
        axios({
            method: 'DELETE',
            url: `${moviestore.API_URL}/movies/${movieId.value}/like/`,
            headers: {
                Authorization: `Token ${userstore.token}`
            }
        })
        .then((res) => {
            console.log(res.data)
            isLike.value = false
        })
        .catch((err) => {
            console.log(err)
        })
    }
    else{
        axios({
            method: 'POST',
            url: `${moviestore.API_URL}/movies/${movieId.value}/like/`,
            headers: {
                Authorization: `Token ${userstore.token}`
            }
        })
        .then((res) => {
            console.log(res.data)
            isLike.value = true
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

const fetchMyMovie = function(){
    axios({
      method: 'GET',
      url: `${moviestore.API_URL}/movies/likes/`,
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      console.log(response.data)
      response.data.forEach(res => {
        if(res.movie_id === movieId.value){
            isLike.value = true
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

onMounted(() => {
    moviestore.fetchMovieDetail(movieId.value)
    moviestore.fetchTrailer(movieId.value)
    fetchMyMovie()
})
</script>

<style scoped>
.video-div{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 600px;
    display: flex;
    justify-content: center;
    /* border: 1px solid salmon; */
}
.info-box{
    display: flex;
    margin: auto;
    width: 100%;
    height: 850px;
    box-shadow: 0 0 10px 5px rgba(99, 193, 132, 0.7)
}
.info-div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* background-color: rgba(26, 30, 31, 0.7); */
}
.info-container{
    width: 80%;
    height: 300px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
}
.movie-img{
    height: 100%;
    width: 200px;
}

h3, p{
    color: rgb(221, 217, 217);
}
.title-txt{
    margin-top: 5px;
    margin-bottom: 5px;
}
.info-txt{
    margin-top: 0;
    margin-bottom: 0;
}
.info-txt-div{
    width: 400px;
    padding-left: 20px;
    padding-right: 20px;
}
.like-btn{
    cursor: pointer;
    border: none;
    background-color: rgb(221, 217, 217, 0);
    margin-top: 5px;
}

</style>