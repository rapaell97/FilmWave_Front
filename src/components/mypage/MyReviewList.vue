<template>
  <div>
    <h2 style="margin-left: 20px; margin-top: 60px;">{{ userName }}님이 작성한 리뷰</h2>
    <div class="review-box">
      <MovieWithReviewCard 
        v-for="review in reviews"
        :key="review.id"
        :reviewWithMovie="review"
      />
    </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import MovieWithReviewCard from '../MovieWithReviewCard.vue';
import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { useRoute } from 'vue-router';


const route = useRoute()
const userStore = useUserStore()
const reviews = ref([])
const userName = ref(route.params.username)

onMounted(() => {
  axios({
    method: 'GET',
    url: `${userStore.API_URL}/movies/${route.params.username}/user-reviews/`,
  })
  .then(res => {
    console.log(res.data)
    reviews.value = res.data
  })
  .catch(err => {
    console.log(err)
  })
})

</script>

<style scoped>
.review-box {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  overflow-y: auto;
  max-height: 80vh; 
  box-sizing: border-box;
}
.review-box::-webkit-scrollbar {
  width: 8px; /* 스크롤바의 너비를 조정 */
}

.review-box::-webkit-scrollbar-track {
  background: rgb(43, 44, 44); /* 트랙의 배경색 */
}

.review-box::-webkit-scrollbar-thumb {
  background: rgb(99, 193, 132); /* 스크롤바의 색상 */
  border-radius: 10px; /* 스크롤바의 모서리를 둥글게 */
}

.review-box::-webkit-scrollbar-thumb:hover {
  background: rgb(99, 193, 132); /* 스크롤바에 마우스를 올렸을 때 색상 */
}
</style>
