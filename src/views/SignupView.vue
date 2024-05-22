<template>
    <div class="container">
        <h1>회원가입</h1>
        <div class="signup-div ">
            <form class="signup-form" @submit.prevent="signup">
                <label for="username">아이디를 입력하세요</label>
                <input type="text" id="userid" v-model.trim="username">
    
                <label for="password1">비밀번호를 입력하세요</label>
                <input type="password" id="password1" v-model.trim="password1">
    
                <label for="password2">비밀번호를 다시 입력하세요</label>
                <input type="password" id="password2" v-model.trim="password2">
                <p v-show="userstore.errorMessage != ''">{{ userstore.errorMessage }}</p>
                <input class="signup-button" type="submit" value="확인">
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
// import { RouterLink } from 'vue-router';

const userstore = useUserStore()

const username = ref('')
const password1 = ref('')
const password2 = ref ('')

const signup = function() {
    const payload = {
        username: username.value ,
        password1: password1.value,
        password2: password2.value
    }
    userstore.signup(payload)
}


</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    color: black;
    margin-top: 30px;
    background-color: white;
    border-radius: 20px;
    width: 600px;
    height: 900px;

    h1 {
        font-size: 40px;
        padding: 30px;
        margin-bottom: 100px;
    }
}

.signup-form {
    display: flex;
    flex-direction: column;
    label {
        font-size: 20px;
        margin-bottom: 10px;
    }
    input {
        height: 50px;
        margin-bottom: 50px;
        font-size: 20px;
    }
}
.signup-div{
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
.signup-button {
    border-style: none;
    background-color: rgb(99, 193, 132);
    color: white;
    font-size: 20px;
}

</style>
