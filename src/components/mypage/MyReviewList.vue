<template>
  <div>
    <h3>내가 쓴 리뷰</h3>
    <MovieWithReviewCard 
      v-for="review in reviews"
      :key="review.id"
      :reviewWithMovie="review"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import MovieWithReviewCard from '../MovieWithReviewCard.vue';
import { useUserStore } from '@/stores/user';
import axios from 'axios';

const userStore = useUserStore()
const reviews = ref([])


onMounted(() => {
  axios({
    method: 'GET',
    url: `${userStore.API_URL}/movies/reviews/my/`,
    headers: {
      Authorization: `Token ${userStore.token}`
    }
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

</style>
