import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', () => {
  const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdjYTE1YjJmYjY0NmVmZmEyNzhkYmNlYTBhN2ZmNSIsInN1YiI6IjY2Mjc0NGFkZTg5NGE2MDE2NDNiNmIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ojNZptYmrdr0SLNqbb71r_P3QCQOctr2r3h-33fzBA'
  const movieList = ref([])
  const movieDetailList = ref([])

  const fetchMovie = function(){
    axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=ko-KOR&page=1',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
          }
      })
      .then(response => {
        console.log(response.data.results)
        movieList.value = response.data.results
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fetchMovieDetail = function(movieId){
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    .then(res => {
      console.log(res.data)
      movieDetailList.value = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return { fetchMovie, fetchMovieDetail, movieList, movieDetailList }
})
