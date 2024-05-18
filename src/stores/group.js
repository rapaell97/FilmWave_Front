import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGroupStore = defineStore('group', () => {
  const API_URL = 'http://127.0.0.1:8000'
  const groupList = ref([])

  const fetchGroup = function(){
    axios({
        method: 'GET',
        url: `${API_URL}/groups/`,
      })
      .then(response => {
        console.log(response)
        groupList.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  return { groupList, fetchGroup }
})
