import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from './user'

export const useGroupStore = defineStore('group', () => {
  const userstore = useUserStore()
  const API_URL = 'http://127.0.0.1:8000'
  const groupList = ref([])
  const groupMovieList = ref([])
  const groupPostList = ref([])

  const fetchGroup = function(){
    axios({
        method: 'GET',
        url: `${API_URL}/groups/`,
        headers: {
          Authorization: `Token ${userstore.token}`
        }
      })
      .then(response => {
        groupList.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fetchGroupMovie = function(groupId){
    axios({
      method: 'GET',
      url: `${API_URL}/groups/${groupId}/movies/`,
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(res => {
      console.log(res.data)
      groupMovieList.value = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  const fetchGroupPost = function(groupId){
    axios({
      method: 'GET',
      url: `${API_URL}/groups/${groupId}/posts/`,
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(res => {
      console.log(res.data)
      groupPostList.value = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  return { groupList, fetchGroup, API_URL, fetchGroupMovie, groupMovieList, fetchGroupPost, groupPostList }
})
