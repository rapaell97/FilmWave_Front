<template>
  <div class="main-div">
    <HeadNavbar/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadNavbar from '@/components/HeadNavbar.vue'

</script>

<style scoped>
.main-div {
    background: linear-gradient(to bottom, navy, rgb(173, 173, 255)); /* 그라데이션 효과 추가 */
    width: 100%;
    height: 100%; /* 예제 높이 설정, 필요에 따라 조정 가능 */
}

html, body, template{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
