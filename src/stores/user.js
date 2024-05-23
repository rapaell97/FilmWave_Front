import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const API_URL = 'http://127.0.0.1:8000'

  const isLogin = ref(false)
  const token = ref('')
  const errorMessage = ref('')
  const userName = ref('')
  const userId = ref('')
    
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
      token.value = response.data.key
      isLogin.value = true
      router.push({name: 'home'})
      axios({
        method: 'GET',
        url: `${API_URL}/accounts/user/`,
        headers: {
          Authorization: `Token ${token.value}`
        }
      })
      .then(res => {
        userName.value = res.data.username
        userId.value = res.data.pk
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(error => {
      console.log(error)
    })

  }

  const logout = function() {
    axios({
      method: 'POST',
      url: `${API_URL}/accounts/logout/`,
    })
    .then(res => {
      token.value = ''
      userId.value = ''
      userName.value = ''
      isLogin.value = false
      router.push({name: 'home'})
    })
    .catch(err => {
      console.log(err)
    })
  }


  return { isLogin, signup, login, logout, token, errorMessage, userName, API_URL, userId }
}, { persist: true })
