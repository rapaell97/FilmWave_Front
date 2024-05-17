import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const API_URL = 'http://127.0.0.1:8000/'

  const isLogin = ref(false)
  const token = ref('')
  const errorMessage = ref('')
  
  const signup = function(payload){
    const { username, password1, password2 } = payload
  if( password1 !== password2 ) {
    errorMessage.value = "비밀번호를 다시 확인하세요."
  }
  else if(password1.length < 8){
    errorMessage.value = "비밀번호가 너무 짧습니다."
  }
  else{
    errorMessage.value = ''
    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2
      }
    })
    .then(response => {
      console.log(response.data)
      console.log("회원가입 성공")
      router.push({name: 'preferenceservey'})
    })
    .catch(error => {
      console.log(error)
    })
  }

  }

  const login = function(payload){
    const { username, password } = payload
    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    })
    .then(response => {
      console.log("로그인 성공")
      console.log(response.data)
      token.value = response.data.key
      router.push({name: 'home'})
    })
    .catch(error => {
      console.log(error)
    })

  }
  return { isLogin, signup, login, token, errorMessage }
})
