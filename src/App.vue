<template class="template-div">
  <div class="main-div">
    <HeadNavbar/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadNavbar from '@/components/HeadNavbar.vue'

</script>

<style>
.main-div {
  background-image: url('@/assets/background.png');
  background-size: cover; 
  background-position: center; 
  width: 100%;
  height: 100%;
}

html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
