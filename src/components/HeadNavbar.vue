<template>
    <nav :style="{backgroundColor: navBackgroundColor}">
        <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/logo.png" alt="#" class="logo-icon">
        </RouterLink>
        <div class="right-nav">
            <RouterLink v-if="usestore.isLogin" :to="{ name: 'login' }">로그인</RouterLink>
            <button @click="logout">로그아웃</button>
            <RouterLink :to="{ name: 'mypage' }">Mypage</RouterLink>

            <img src="@/assets/search.png" alt="" class="icon">
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const usestore = useUserStore()
const nowScroll = ref(0)

const updateScroll = function() {
    nowScroll.value = window.scrollY
    console.log(nowScroll.value)
}

const navBackgroundColor = computed(() => {
    const opacity = nowScroll.value > 10 ? 1 : 0.3
    return `rgba(0, 0, 128, ${opacity})` // navy 색상의 RGBA 표현
})

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})

const logout = function() {
    usestore.isLogin = false
}

</script>

<style scoped>
nav{
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: navy;
    width: 100%;
    height: 60px;
    transition: background-color 0.3s ease-in-out;
}

.right-nav{
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