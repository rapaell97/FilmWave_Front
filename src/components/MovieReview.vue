<template>
    <h1>{{ movieId }}영화 리뷰</h1>
    <div class="review-create">
        <form @submit.prevent="reviewSubmit">
            <div class="star-div">
                <div v-for="(score, idx) in starScores" :key="idx" @click="starClick(idx)">
                    <img v-if="starScores[idx]===false" src="@/assets/starScore1.png" :alt="`reviewstar${idx}`">
                    <img v-else src="@/assets/starScore2.png" :alt="`reviewstar${idx}`">
                </div>
            </div>
            <textarea v-model="reviewContent"></textarea>
            <input type="submit">
        </form>
    </div>

    <div class="review-list">
        <h3>{{ reviewList.length }}개의 리뷰</h3>
        <div v-for="review in reviewList">
            <span><img src="@/assets/starScore2.png" alt="">{{ review.score }}</span>
            <p>{{ review.content }}</p>
            <p>{{ formatDate(review.create_at) }}</p>
            <button v-if="review.user === userstore.userId" @click="reviewDelete(review.id)">삭제</button>
            <p>sdfsdf{{ userstore.userId }}</p>
            {{ review.user }}
            <hr>
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
const route = useRoute()


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
    width: 80%;
    height: 6.25em;
    border: none;
    resize: none;
}
</style>