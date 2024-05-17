<template>
    <h1>로그인 페이지</h1>
    <div class="login-div">
        <form class="login-form" @submit.prevent="login">
            <label for="username">아이디를 입력하세요</label>
            <input type="text" id="username" v-model.trim="username">

            <label for="password1">비밀번호를 입력하세요</label>
            <input type="password" id="password" v-model.trim="password">

            <input type="submit" value="확인">
        </form>
        <br>
        <p>아직 회원이 아니신가요?</p>
        <RouterLink :to="{ name: 'signup' }">회원가입하기</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';

const username = ref('')
const password = ref('')
const userstore = useUserStore()

const login = function(){
    const payload = {
        username: username.value,
        password: password.value
    }
    userstore.login(payload)
}
</script>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
}
.login-div{
    margin: auto;
    width: 300px;
    height: 300px;
}

</style>