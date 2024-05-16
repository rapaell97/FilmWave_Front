import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', () => {
  const movieList = ref([])
  const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdjYTE1YjJmYjY0NmVmZmEyNzhkYmNlYTBhN2ZmNSIsInN1YiI6IjY2Mjc0NGFkZTg5NGE2MDE2NDNiNmIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ojNZptYmrdr0SLNqbb71r_P3QCQOctr2r3h-33fzBA'

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
  
  return { fetchMovie, movieList }
})
