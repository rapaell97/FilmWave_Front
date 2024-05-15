<template>
  <div>
    <HeadNavbar/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadNavbar from '@/components/HeadNavbar.vue'

</script>

<style scoped>

</style>
