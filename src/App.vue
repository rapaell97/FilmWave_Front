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
.main-div{
  background-color: rgb(91, 91, 236);
  width: 100%;
}

html, body, template{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
