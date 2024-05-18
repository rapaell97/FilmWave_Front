<template>
    <h1>그룹페이지</h1>
    <div class="groupList-div">
        <GroupCard
        v-for="group in groupstore.groupList"
        :key="group.id"
        :group="group"
        />
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
.groupList-div {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개의 아이템을 배치 */
  gap: 16px; /* 각 아이템 간격 */
  justify-content: center; /* 그리드를 중앙에 배치 */
  align-items: center; /* 수직 중앙 정렬 (필요한 경우) */
  padding: 16px; /* 그리드 주변에 여백 추가 */
}

</style>
