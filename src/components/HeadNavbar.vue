<template>
    <nav>
        <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/logo.png" alt="#" class="logo-icon">
        </RouterLink>
        <div class="left-nav">
            <RouterLink :to="{ name: 'myPage' }">Mypage</RouterLink>
            <img src="@/assets/search.png" alt="" class="icon">
            <input type="text">
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const store = useUserStore()

</script>

<style scoped>
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: navy;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
}

.left-nav{
    display: flex;
    align-items: center;
}

.logo-icon{
    width: 80px;
    height: 40px
}

.icon{
    width: 30px;
    height: 30px;
}


</style>