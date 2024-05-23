<template class="template-div">
  <div class="main-div">
    <HeadNavbar/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadNavbar from '@/components/app/HeadNavbar.vue'
</script>

<style>
.main-div {
  background-size: cover; 
  background-position: center; 
  width: 100%;
  padding-bottom: 150px;
}
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 200px;
  background-image: url('@/assets/background.png');
}

</style>
