<template>
  <h1>그룹 생성 페이지</h1>
    <form ref="form" @submit.prevent="groupCreate">
      <div>
        <label for="groupname">그룹이름 : </label>
        <input type="text" id="group_name" name="title">
      </div>

      <div>
        <label for="group_description">그룹 소개 : </label>
        <input type="text" id="group_description" name="description">
      </div>

      <div>
        <label for="group_img">그룹 대표 사진 : </label>
        <input type="file" id="group_img" name="image">
      </div>

      <button>생성하기</button>
    </form>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userstore = useUserStore()
const router = useRouter()
const form = ref(null)

const groupCreate = function(){
  const data = new FormData(form.value)

    axios({
      method: 'POST',
      url: `${userstore.API_URL}/groups/`,
      data,
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      form.value.reset()
      router.push({name: 'group'})
    })
    .catch(error => {
      console.log(error)
    })
}

</script>

<style scoped>

</style>