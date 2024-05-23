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
#username{
    margin-top: 10px;
    margin-bottom: 20px;
    height: 30px;
    background-color: #1e2729;
    border:none;
    color: rgb(221, 217, 217);
}
#password {
    margin-top: 10px;
    margin-bottom: 40px;
    height: 30px;
    background-color: #1e2729;
    border:none;
    color: rgb(221, 217, 217);
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    color: rgb(221, 217, 217);
    margin-top: 30px;
    background-color: #343d3f;
    border-radius: 20px;
    width: 500px;   
    height: 500px;
    box-shadow: 0px 5px 10px rgba(99, 193, 132, 0.8), 0px -5px 10px rgba(99, 193, 132, 0.8), 5px 0px 10px rgba(99, 193, 132, 0.8), -5px 0px 10px rgba(99, 193, 132, 0.8);
}

.login-form {
    display: flex;
    flex-direction: column;
    input {
        height: 50px;
        margin-bottom: 50px;
        font-size: 20px;
    }
}
.login-div{
    margin-left: auto;
    margin-right: auto;
    width: 400px;
}

.signup-link {
    display: flex;
    margin-top: 25px;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
        color: rgb(99, 193, 132);
    }
}
.login-button {
    border-style: none;
    background-color: rgb(99, 193, 132);
    color: rgb(221, 217, 217);
    font-size: 20px;
    height: 50px;
    cursor: pointer;
    transition: transform 0.3s ease;
}
.login-button:hover{
    transform: scale(1.05);
}
</style>
