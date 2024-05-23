<template>
    <div class="review-box">
      <div class="review-create">
        <h1>관람평 작성하기</h1>
          <form @submit.prevent="reviewSubmit">
              <div class="star-div">
                  <div v-for="(score, idx) in starScores" :key="idx" @click="starClick(idx)">
                      <button v-if="starScores[idx]===false" class="icon-btn"><i class="fa-regular fa-star" style="color: rgba(99, 193, 132); height: 50px;"></i></button>
                      <button v-else class="icon-btn"><i class="fa-solid fa-star" style="color: rgba(99, 193, 132); height: 50px;"></i></button>
                  </div>
              </div>
              <div class="review-create-input">
                <textarea v-model="reviewContent"></textarea>
                <input type="submit" value="작성" class="review-create-btn">
              </div>
          </form>
      </div>
    </div>

    <div class="review-list">
        <h3 style="margin: 0;">{{ reviewList.length }}개의 리뷰</h3>
        <div v-for="review in reviewList" class="review-content">
            <div class="score-div">
              <i class="fa-solid fa-star" style="color: rgba(99, 193, 132); height: 22px;"></i>
              <b style="font-size: 22px;">{{ review.score }}</b>
            </div>
            <p>{{ review.content }}</p>
            <div class="bottom-info">
              <div class="review-user-info">
                <p>{{ review.user.username }}</p>
                <p style="opacity: 0.7;">{{ formatDate(review.created_at) }}</p>
              </div>
              <button class="delete-button" v-if="review.user.id === userstore.userId" @click="reviewDelete(review.id)" style="height: 90%;">삭제</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/datefomatter'

const props = defineProps({
  movieId: Number
})

const starScores = ref([false, false, false, false, false])
const numScore = ref(0)
const reviewContent = ref('')

const userstore = useUserStore()

const reviewList = ref([])

onMounted(() => {
    axios({
      method: 'GET',
      url: `${userstore.API_URL}/movies/${props.movieId}/reviews/`,
    })
    .then(response => {
      console.log(response.data)
      reviewList.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
})

const starClick = function(idx){
    starScores.value.forEach((starScore, num) => {
        if (num <= idx) {
            starScores.value[num] = true
        } else {
            starScores.value[num] = false
        }
    })
}

const reviewSubmit = function(){
    starScores.value.forEach(starScore => {
        numScore.value += starScore
    })
    axios({
      method: 'POST',
      url: `${userstore.API_URL}/movies/${props.movieId}/reviews/`,
      headers:{
        Authorization: `Token ${userstore.token}`
      },
      data:{
        content: reviewContent.value,
        score: numScore.value
      }
    })
    .then(response => {
      console.log(response)
      console.log('리뷰작성 성공')
      reviewList.value.push(response.data)
      starScores.value = [false, false, false, false, false]
      reviewContent.value = ''
    })
    .catch(error => {
      console.log(error)
    })
}

const reviewDelete = function(reviewId) {
    axios({
      method: 'DELETE',
      url: `${userstore.API_URL}/movies/${movieId.value}/reviews/${reviewId}`,
      headers: {
        Authorization: `Token ${userstore.token}`
      }
    })
    .then(response => {
      console.log(response.data)
      const idx = reviewList.value.findIndex(review => review.id == reviewId)
      reviewList.value.splice(idx, 1)
    })
    .catch(error => {
      console.log(error)
    })
}

</script>

<style scoped>

.star-div{
    display:flex;
}

textarea {
    width: 1000px;
    height: 3em;
    border: none;
    resize: none;
    font-size: 20px;
    background-color: #343d3f;
    color: aliceblue;
}

.icon-btn{
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  margin-left: 0;
  background-color: rgb(0,0,0,0);
  border: none;
  margin-right: 10px;
}

.review-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  color: rgb(221, 217, 217);
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  /* border: solid 1px salmon; */
  /* background-color: #343d3f; */
}

.review-list{
    border: solid 1px salmon;
    width: 70%;
    height: 500px;
    margin-top: 50px;
    /* margin-bottom: 400px; */
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: #343d3f;
    box-shadow: 0 0 10px 5px rgba(99, 193, 132, 0.7);
    color: rgb(221, 217, 217);
    overflow-y: auto;
}

.review-create-btn{
  cursor: pointer;
  width: 70px;
  height: 40px;
  background-color: rgb(99, 193, 132);
  border: none;
  border-radius: 5%;
  font-weight: bolder;
  margin-left: 10px;
}

.review-create-btn:hover{
  box-shadow: 0 0 10px 5px rgba(99, 193, 132, 0.7);
  border: 2px solid rgb(157, 233, 208);
}

.review-create-input{
  display: flex;
  align-items: center;
}
.review-content{
  width: 70%;
  margin: auto;
  /* border: 1px solid salmon; */
  background-color: #1e2729;
  margin-bottom: 20px;
  padding: 15px;
}
.score-div{
  display: flex;
  align-items: center;
}
.review-user-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  /* border: 1px solid salmon; */
}

.review-list::-webkit-scrollbar {
  width: 10px; /* 스크롤 바의 너비 */
}

.review-list::-webkit-scrollbar-thumb {
  background-color: rgba(228, 235, 236, 0.5); /* 스크롤 바 손잡이의 색상 및 투명도 */
  border-radius: 10px; /* 스크롤 바 손잡이의 모서리 반경 */
}

.review-list::-webkit-scrollbar-track {
  background-color: rgba(52, 61, 63, 0.2); /* 스크롤 바 트랙의 색상 및 투명도 */
}

.bottom-info {
  display: flex;
  justify-content: space-between;
}
.delete-button {
  width: 50px;
}
</style>
