<template>
  <h1>당신의 그룹을 생성하세요</h1>
    <form class="create-form" ref="form" @submit.prevent="groupCreate">
      <div>
        <div class="group-div">
          <label for="group-title"></label>
          <input type="text" id="group_name" name="title" placeholder="그룹 이름을 입력해주세요.">

          <div class="file-input">
            <label for="file">
              <i class="fa-solid fa-image file-icon" style="height: 130px;" @click="triggerFileInput"></i>
              <input type="file" accept="image/*" id="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
            </label>
          </div>

          <div class="description-input">
            <label id="group-description" for="group_description" ></label>
            <input type="text" id="group_description" name="description"  placeholder="그룹 소개를 입력해주세요.">
          </div>
          
          <button class="create-button">생성</button>

        </div>
      </div>

    </form>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userstore = useUserStore()
const router = useRouter()
const form = ref(null)
const fileInput = ref(null)
const selectedFile = ref(null)

const handleFileChange = () => {
  const file = fileInput.value.files[0]
  if (file) {
    selectedFile.value = file
  }
}

const triggerFileInput = () => {
  fileInput.value.click()
}

const groupCreate = function(){
  const data = new FormData(form.value)

  if (selectedFile.value) {
    data.append('image', selectedFile.value)
  }
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
h1 {
  color: white;
  text-align: center;
  margin-bottom: 30px;
}

.create-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.file-input {
  width: 80%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(99, 193, 132);
  margin-top: 20px;
  margin-bottom: 20px;
}

.description-input{
  width: 90%;
  height: 200px;
  display: flex;
  justify-content: center;
}

.file-input:hover{
  cursor: pointer;
}
.file-icon:hover{
  cursor: pointer;
}

#group_name {
  width: 90%;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: rgb(221, 217, 217);
  background-color: #1e2729;
  padding-left: 10px;
  padding-right: 10px;
}

#group_name::placeholder {
  font-size: 20px
}

#group_description {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  color: rgb(221, 217, 217);
  background-color: #1e2729;
  border: none;
}


.group-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 20px;
    background-color: #343d3f;
    width: 350px;
    height: 600px;
    border-radius: 5%;
    transition: transform 0.3s ease;
    font-size: 30px;
    box-shadow: 0px 5px 10px rgba(99, 193, 132, 0.8), 0px -5px 10px rgba(99, 193, 132, 0.8), 5px 0px 10px rgba(99, 193, 132, 0.8), -5px 0px 10px rgba(99, 193, 132, 0.8);
}

.img-div{
    width: 80%;
    height: 50%;
    padding: 10px;
}
.group-img{
    width: 100%;
    height: 100%;
}

.text-div{
    padding-left: 8px;
    padding-right: 8px;
}

.create-button {
  cursor: pointer;
  border-style: none;
  background-color: rgb(99, 193, 132);
  color: white;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 5%;
  transition: transform 0.2s ease
}

.create-button:hover{
  transform: scale(1.1);
}
</style>