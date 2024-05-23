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

/* 스크롤바 스타일 */
::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-track {
  background: #2e2e2e;
}

::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 10px;
  border: 2px solid #2e2e2e;
}

::-webkit-scrollbar-thumb:hover {
  background: #777;
}

body {
  overflow: overlay;
}

html {
  scrollbar-width: thin;
  scrollbar-color: #555 #2e2e2e;
}

</style>

