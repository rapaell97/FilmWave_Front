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
    color: rgb(221, 217, 217);
    margin-top: 30px;
    background-color: #343d3f;
    border-radius: 20px;
    width: 500px;   
    height: 500px;
    box-shadow: 0px 5px 10px rgba(99, 193, 132, 0.8), 0px -5px 10px rgba(99, 193, 132, 0.8), 5px 0px 10px rgba(99, 193, 132, 0.8), -5px 0px 10px rgba(99, 193, 132, 0.8);
}
#userid, #password1, #password2{
    margin-top: 10px;
    margin-bottom: 20px;
    height: 30px;
    background-color: #1e2729;
    border:none;
    color: rgb(221, 217, 217);
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
    cursor: pointer;
    transition: transform 0.3s ease;
}
.signup-button:hover{
    transform: scale(1.05);
}

</style>
