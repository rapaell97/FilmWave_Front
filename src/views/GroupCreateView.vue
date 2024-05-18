<template>
    <div>
        <h1>그룹 생성 페이지</h1>
        <div class="group-create">
            <label for="groupname">그룹이름 : </label>
            <input type="text" id="group_name" v-model="groupName">
            <label for="group_description">그룹 설명</label>
            <input type="text" id="group_description" v-model="groupDescription">
            <button @click="groupCreate">생성하기</button>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userstore = useUserStore()
const groupName = ref('')
const groupDescription = ref('')

const groupCreate = function(){
    console.log(userstore.token)
    axios({
      method: 'POST',
      url: `${userstore.API_URL}/groups/`,
      data:{
        title: groupName.value,
        description: groupDescription.value
      },
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}



</script>

<style scoped>

</style>