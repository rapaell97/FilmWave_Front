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
.review-box{
  
}

</style>
