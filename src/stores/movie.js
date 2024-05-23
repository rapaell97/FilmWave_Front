import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from './user'

export const useMovieStore = defineStore('movie', () => {
  const API_URL = 'http://127.0.0.1:8000'
  const userstore = useUserStore()

  const movieList = ref([])
  const movieRecommendList = ref([])
  const movieDetailList = ref([])
  const movieGenreList = ref([])
  const trailerKey = ref('')

  const fetchMovie = function(genreId=''){
    axios({
        method: 'GET',
        url: `${API_URL}/movies/`,
        params: {genreId}
      })
      .then(response => {
        movieList.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fetchRecommendMovie = function(){
    console.log('token', userstore.token)
    axios({
        method: 'GET',
        url: `${API_URL}/movies/recommend/`,
        headers: {
          Authorization: `Token ${userstore.token}`
        }
      })
      .then(response => {
        movieRecommendList.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fetchMovieDetail = function(movieId){
    axios({
      method: 'GET',
      url: `${API_URL}/movies/${movieId}`,
    })
    .then(res => {
      console.log(res.data)
      movieDetailList.value = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  const fetchTrailer = function(movieId){
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    .then(res => {
      // console.log(res.data.results)
      res.data.results.forEach((result) => {
        if (result.type === 'Trailer'){
          trailerKey.value = result.key
        }
      })
      console.log(trailerKey.value)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return { fetchMovie, fetchRecommendMovie, fetchMovieDetail, fetchTrailer ,movieList, movieRecommendList, movieDetailList, API_URL, trailerKey }
})
