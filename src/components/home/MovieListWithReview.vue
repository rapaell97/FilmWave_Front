<template>
  <div class="recent-review-div">
    <h3 class="category-name">최근 리뷰가 달린 영화</h3>
    <div class="test-div">
      <div class="review-container" v-if="reviewsWithMovie">
        <MovieWithReviewCard 
          v-for="reviewWithMovie in reviewsWithMovie"
          :key="reviewWithMovie.id"
          :reviewWithMovie="reviewWithMovie"
        />    
      </div>
    </div>
  </div>
</template>

<script setup>
import MovieWithReviewCard from '../MovieWithReviewCard.vue'

import { ref, onMounted } from 'vue';
import axios from 'axios';

const reviewsWithMovie = ref(null)

onMounted(() => {
  axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/movies/recent_reviewed/`,
    })
    .then(response => {
      console.log(response.data)
      reviewsWithMovie.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
})

</script>

<style scoped>
.category-name {
  color: rgb(221, 217, 217);
  font-size: 25px;
  margin-left: 25px;
  margin-bottom: 10px;
}

.review-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 5px;
  margin: auto;
  width: 95%;
}
.recent-review-div{
  width: 98%;
  margin: auto;
}
.test-div{
  width: 100%;
  margin: auto;
}
</style>
