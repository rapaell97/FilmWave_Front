<template>
  <div>
    <h3>내 그룹</h3>
    <div class="group-container">
      <GroupCard 
        v-for="group in groups"
        :key="group.id"
        :group="group.group"
      />
    </div>
  </div>
</template>

<script setup>
import GroupCard from '../GroupCard.vue';

import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const userStore = useUserStore()
const groups = ref([])


onMounted(() => {
  axios({
    method: 'GET',
    url: `${userStore.API_URL}/groups/my/`,
    headers: {
      Authorization: `Token ${userStore.token}`
    }
  })
  .then(res => {
    console.log(res.data)
    groups.value = res.data
  })
  .catch(err => {
    console.log(err)
  })
})
</script>

<style scoped>
.group-container {
  display: flex;
}
</style>
