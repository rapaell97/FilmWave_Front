import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGenreStore = defineStore('genre', () => {
  const API_URL = 'http://127.0.0.1:8000'
  const genreList = ref([])
  const genreCategory = ['로맨스', '애니메이션', '범죄', '코미디', '액션', '공포', '모험', 'SF']

  const fetchGenre = function(){
    axios({
        method: 'GET',
        url: `${API_URL}/movies/genres/`,
      })
      .then(response => {
        response.data.forEach(res => {
            if( genreCategory.includes(res.name) && genreList.value.length < 8){
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
