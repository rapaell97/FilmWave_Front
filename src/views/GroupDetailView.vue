<template>
    <h1>그룹상세페이지</h1>
    <div class="group-info">
        <img src="@/assets/group2.png" alt="" class="group-img">
        <div>
            <h1>{{ group.title }}</h1>
            <p>{{ group.description }}</p>
            <p>{{ formatDate(group.create_at) }}</p>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGroupStore } from '@/stores/group'
import { formatDate } from '@/utils/datefomatter'


const route = useRoute()
const groupstore = useGroupStore()

const groupId = ref(route.params.groupId)
const group = ref('')

onMounted(() => {
    axios({
      method: 'GET',
      url: `${groupstore.API_URL}/groups/${groupId.value}`,
    })
    .then(response => {
    //   console.log(response.data)
      group.value = response.data
      console.log(group.value)
    })
    .catch(error => {
      console.log(error)
    })
})



</script>

<style scoped>
.group-info{
    width: 100%;
    height: 200px;
    border: 1px solid black;
    display: flex;
}
.group-img{
    width: 150px;

}
</style>