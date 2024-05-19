<template>
    <RouterLink :to="{ name: 'groupDetail', params:{ 'groupId': group.id } }">
        <div class="group-div">
            <<{{ group.title }}>>
            <img src="@/assets/group2.png" alt="" class="group-img">
            <p>운영자: {{ group.admin.username }}</p>
            <p>인원: {{ group.members_count }}</p>
            <!-- {{ group }} -->
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    group: Object
})

</script>

<style scoped>
.group-div{
    width: 150px;
    border: 1px solid ;
}

.group-img{
    width: 100%;
}


</style>