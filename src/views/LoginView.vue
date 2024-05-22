<template>
    <div class="container">
        <h1>로그인</h1>
        <div class="login-div">
            <form class="login-form" @submit.prevent="login">
                <label for="username">아이디를 입력하세요</label>
                <input type="text" id="username" v-model.trim="username">

                <label for="password1">비밀번호를 입력하세요</label>
                <input type="password" id="password" v-model.trim="password">

                <input class="login-button" type="submit" value="확인">
            </form>
            <div class="signup-link">
                <p>아직 회원이 아니신가요?</p>
                <RouterLink :to="{ name: 'signup' }">회원가입하기</RouterLink>
            </div>
        </div>
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
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: black;
    margin-top: 30px;
    background-color: white;
    border-radius: 20px;
    width: 600px;   
    height: 900px;

    h1 {
        margin-top: 50px;
        font-size: 40px;
    }
}

.login-form {
    display: flex;
    flex-direction: column;
    label {
        font-size: 20px;
        margin-bottom: 10px;
    }
    input {
        height: 50px;
        margin-bottom: 80px;
        font-size: 20px;
    }
}
.login-div{
    margin: auto;
    width: 400px;
    height: 500px;
}

.signup-link {
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
    }
}
.login-button {
    border-style: none;
    background-color: rgb(99, 193, 132);
    color: white;
    font-size: 20px;
}
</style>
