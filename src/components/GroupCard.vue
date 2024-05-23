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
    background-color: #343d3f;
    width: 200px;
    height: 350px;
    border-radius: 3%;
    transition: transform 0.3s ease;
    padding: 15px;
    box-shadow: 0px 5px 10px rgba(99, 193, 132, 0.8), 0px -5px 10px rgba(99, 193, 132, 0.8), 5px 0px 10px rgba(99, 193, 132, 0.8), -5px 0px 10px rgba(99, 193, 132, 0.8);
}
.group-div:hover {
    transform: scale(1.02)
}

.img-div{
    width: 100%;
    height: 45%;
}
.group-img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    filter: brightness(0.9);
}
a{
    text-decoration: none;
    color: black;
    color: rgb(221, 217, 217);
}
.group-title{
    margin: 0;
    text-align: center;
    color: rgb(221, 217, 217);
    padding-top: 5px;
    padding-bottom: 10px;
}
.text-div{
    padding-left: 8px;
    padding-right: 8px;
}
</style>