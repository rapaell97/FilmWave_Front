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
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userstore = useUserStore()
const router = useRouter()
const groupName = ref('')
const groupDescription = ref('')

const groupCreate = function(){
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
      groupName.value = ''
      groupDescription.value = ''
      router.push({name: 'group'})
    })
    .catch(error => {
      console.log(error)
    })
}



</script>

<style scoped>

</style>