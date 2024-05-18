import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGenreStore = defineStore('genre', () => {
//   const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdjYTE1YjJmYjY0NmVmZmEyNzhkYmNlYTBhN2ZmNSIsInN1YiI6IjY2Mjc0NGFkZTg5NGE2MDE2NDNiNmIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ojNZptYmrdr0SLNqbb71r_P3QCQOctr2r3h-33fzBA'
  const API_URL = 'http://127.0.0.1:8000'
  const genreList = ref([])
  const genreCategory = ['로맨스', '애니메이션', '범죄', '코미디', '액션', '공포']

  const fetchGenre = function(){
    axios({
        method: 'GET',
        url: `${API_URL}/movies/genres/`,
      })
      .then(response => {
        response.data.forEach(res => {
            if( genreCategory.includes(res.name) && genreList.value.length < 7){
                genreList.value.push(res)
            }
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return { fetchGenre, genreList, API_URL }
})
