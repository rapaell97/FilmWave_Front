<template>
    <nav :style="{backgroundColor: navBackgroundColor, boxShadow: navShadow}">
        <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/logo.png" alt="logo-img" class="logo-icon">
        </RouterLink>
        <div class="right-nav">
            <RouterLink v-if="userstore.isLogin===false" :to="{ name: 'login' }">
                <b class="log-tag">Login</b>
            </RouterLink>
            <b v-if="userstore.isLogin" @click="userstore.logout" class="log-tag">Logout</b>
            <RouterLink v-if="userstore.isLogin" :to="{ name: 'mypage', params: {'username': userstore.userName} }">
                <i class="fa-solid fa-user nav-icon" style="color: #ffffff;"></i>
            </RouterLink>
            <RouterLink :to="{ name: 'group' }">
                <i class="fa-solid fa-users nav-icon" style="color: #ffffff;"></i>
            </RouterLink>
            <RouterLink :to="{ name: 'search' }">
                <i class="fa-solid fa-magnifying-glass nav-icon" style="color: #ffffff;"></i>
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
    return `rgba(0, 0, 1, ${opacity})`
})

const navShadow = computed(() => {
    const shadowOpacity = nowScroll.value > 0 ? 0.2 : 0;
    return `0 4px 6px rgba(99, 193, 132, ${shadowOpacity})`;
});

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
    width: 100%;
    height: 70px;
    transition: background-color 0.3s ease-in-out;
    z-index: 1000;
}

.right-nav{
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.logo-icon{
    width: 80px;
    height: 40px;
    transition: transform 0.3s ease;
}
.logo-icon:hover{
    transform: scale(1.2);
}

.log-tag{
    color: aliceblue;
    transition: transform 0.2s ease;
}
.log-tag:hover{
    cursor: pointer;
    transform: scale(1.1);
}
.nav-icon{
    transition: transform 0.2s ease;
}
.nav-icon:hover{
    transform: scale(1.2);
}

</style>
