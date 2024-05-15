import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)
  const API_URL = 'http://127.0.0.1:8000/'
  
  const signup = function(payload){
    const { username, password1, password2 } = payload
  }

  axios({
    method: 'post',
    url: `${API_URL}/accounts/signup/`,
    data: {
      username, password1, password2
    }
  })
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
  return { isLogin, signup }
})
