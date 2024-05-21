import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from './user'

export const useGroupStore = defineStore('group', () => {
  const API_URL = 'http://127.0.0.1:8000'
  const groupList = ref([])
  const userstore = useUserStore()

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

  return { groupList, fetchGroup, API_URL }
})
