<template>
  <div>
    {{ post }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  post: Object
})

</script>

<style scoped>

</style>