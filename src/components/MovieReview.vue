<template>
    <h1>{{ movieId }}영화 리뷰</h1>
    <div class="review-div">
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
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router';

const starScores = ref([false, false, false, false, false])
const numScore = ref(0)
const reviewContent = ref('')

const userstore = useUserStore()
const route = useRoute()
const movieId = ref(route.params.movieId)

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
    console.log(userstore.token)
    console.log(numScore.value)
    axios({
      method: 'POST',
      url: `${userstore.API_URL}/movies/${movieId.value}/reviews/`,
      headers:{
        Authorization: `Token ${userstore.token}`
      },
      data:{
        content: reviewContent.value,
        score: numScore.value
      }
    })
    .then(response => {
      console.log('리뷰작성 성공')
      starScores.value = [false, false, false, false, false]
      reviewContent.value = ''
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