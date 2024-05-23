<template>
  <h1>그룹 생성</h1>
    <form class="create-form" ref="form" @submit.prevent="groupCreate">
      <div>
        <div class="group-div">
          <label for="group-title" > </label>
          <input type="text" id="group_name" name="title" placeholder="그룹 이름을 입력해주세요.">
          <div class="img-div">
              <!-- <img v-if= "group.image === null" src="@/assets/group/default.png" alt="" class="group-img"> -->
              <img src="@/assets/group/default.png" alt="" class="group-img">
              <!-- <img v-else :src="`${group.image}`" :alt="`${ group.id }`" class="group-img"> -->
          </div>
          <div class="file-input">
              <label for="group_img">그룹 이미지</label>
              <input type="file" id="group_img" name="image"/>
          </div>
          <div class="text-div">
              <label id="group-description" for="group_description" ></label>
              <input type="text" id="group_description" name="description"  placeholder="그룹 소개를 입력해주세요.">
              <p><i class="fa-solid fa-crown"></i>{{ userstore.userName }}</p>
              <p><i class="fa-solid fa-users"></i>0</p>
          </div>
        </div>
      </div>
      <div>
        <button class="create-button">생성하기</button>
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

h1 {
  color: white;
}

.create-form {
  display: flex;
  align-items: center;
  justify-content: center;
}


.create-button
.file-input {
  label {
    font-size: 20px;
  }
}

#group_name {
  width: 98%;
  height: 50px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 20px
}

#group_name::placeholder {
  font-size: 20px
}

#group_description {
  width: 98%;
  height: 50px;
  font-size: 20px
}


.group-div{
    margin-left: 20px;
    margin-right: 20px;
    background-image: url('@/assets/group/background.png');
    width: 400px;
    height: 700px;
    border-radius: 3%;
    transition: transform 0.3s ease;
    font-size: 30px;
    box-shadow: 0px 5px 10px rgba(99, 193, 132, 0.8), 1px 3px 10px rgba(99, 193, 132, 0.8); 
}

.group-div:hover {
    transform: scale(1.02)
}

.img-div{
    width: 100%;
    height: 50%;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);

}
.group-img{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
    color: black;
}
.group-title{
    margin: 0;
    text-align: center;
    color: black;
    padding-top: 5px;
    padding-bottom: 5px;
}
.text-div{
    padding-left: 8px;
    padding-right: 8px;
}

.create-button {
  border-style: none;
  background-color: rgb(99, 193, 132);
  color: white;
  font-size: 20px;
}
</style>