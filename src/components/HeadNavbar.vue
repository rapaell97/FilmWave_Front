<template>
    <nav :style="{backgroundColor: navBackgroundColor}">
        <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/logo.png" alt="logo-img" class="logo-icon">
        </RouterLink>
        <div class="right-nav">
            <RouterLink v-if="userstore.isLogin===false" :to="{ name: 'login' }">
                <button>로그인</button>
            </RouterLink>
            <button v-if="userstore.isLogin" @click="userstore.logout">로그아웃</button>
            <RouterLink v-if="userstore.isLogin" :to="{ name: 'mypage' }">
                <img src="@/assets/profile_icon2.png" alt="icon_img" class="icon">
            </RouterLink>
            <RouterLink :to="{ name: 'group' }">
                <img src="@/assets/group1.png" alt="" class="icon">
            </RouterLink>
            <RouterLink :to="{ name: 'search' }">
                <img src="@/assets/search.png" alt="search-img" class="icon">
            </RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userstore = useUserStore()
const nowScroll = ref(0)

const updateScroll = function() {
    nowScroll.value = window.scrollY
}

const navBackgroundColor = computed(() => {
    const opacity = nowScroll.value > 0 ? 1 : 0.2
    return `rgba(0, 0, 128, ${opacity})`
})

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
})


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
    z-index: 1000;
}

.right-nav{
    display: flex;
}

.logo-icon{
    width: 80px;
    height: 40px
}

.icon{
    width: 30px;
    height: 30px;
}

.sign-button{

}

</style>