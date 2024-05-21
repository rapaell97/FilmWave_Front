<template>
    <h1>그룹페이지</h1>
    <div class="container"> 
        <div class="groupList-div" v-if="groupstore.groupList.length">
            <GroupCard
            v-for="group in groupstore.groupList"
            :key="group.id"
            :group="group"
            />
        </div>
        <div v-else>
            <p>현재 생성된 그룹이 없습니다..</p>
        </div>
    </div>
    <RouterLink :to="{ name: 'group-create' }">그룹 생성하기</RouterLink>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useGroupStore } from '@/stores/group'
import GroupCard from '@/components/GroupCard.vue'

const groupstore = useGroupStore()

onMounted(() => {
    groupstore.fetchGroup()
})

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.groupList-div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px; 
}

</style>
