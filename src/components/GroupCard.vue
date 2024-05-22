<template>
    <RouterLink :to="{ name: 'groupDetail', params:{ 'groupId': group.id } }">
        <div class="group-div">
            <h3 class="group-title">{{ group.title }}</h3>
            <div class="img-div">
                <img v-if= "group.image === null" src="@/assets/group/default.png" alt="" class="group-img">
                <img v-else :src="`${group.image}`" :alt="`${ group.id }`" class="group-img">
            </div>
            <div class="text-div">
                <p>소개: {{ group.description }}</p>
                <p><i class="fa-solid fa-crown"></i> {{ group.admin.username }}</p>
                <p><i class="fa-solid fa-users"></i> {{ group.members_count }}</p>
            </div>
            
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
    margin-left: 20px;
    margin-right: 20px;
    background-image: url('@/assets/group/background.png');
    width: 200px;
    height: 350px;
    border-radius: 3%;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 5px rgba(255, 255, 255, 0.3), 0 6px 20px rgba(255, 255, 255, 0.3); 
}
.group-div:hover {
    transform: scale(1.02)
}

.img-div{
    width: 100%;
    height: 50%;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);

}
.group-img{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
    color: black;
}
.group-title{
    margin: 0;
    text-align: center;
    color: black;
    padding-top: 5px;
    padding-bottom: 5px;
}
.text-div{
    padding-left: 8px;
    padding-right: 8px;
}
</style>