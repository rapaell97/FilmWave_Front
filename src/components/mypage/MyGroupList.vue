<template>
  <div>
    <h2 style="margin-left: 20px; margin-bottom: 50px;">{{ userName }}님의 그룹</h2>
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
import axios from 'axios';
import GroupCard from '../GroupCard.vue';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const userStore = useUserStore()
const groups = ref([])

const route = useRoute()
const userName = ref(route.params.username)

onMounted(() => {
  axios({
    method: 'GET',
    url: `${userStore.API_URL}/groups/${route.params.username}/approved/`,
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
