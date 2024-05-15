<template>
    <div class="signup-div">
        <h1>회원가입 페이지</h1>
        <form class="signup-form" @submit.prevent="signup">
            <label for="username">아이디를 입력하세요</label>
            <input type="text" id="userid" v-model.trim="username">

            <label for="password1">비밀번호를 입력하세요</label>
            <input type="password" id="password1" v-model.trim="password1">

            <label for="password2">비밀번호를 다시 입력하세요</label>
            <input type="password" id="password2" v-model.trim="password2">
            <p v-if="userstore.errorMessage != ''">{{ userstore.errorMessage }}</p>
            <input type="submit" value="확인">
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

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
.signup-div{
    /* border: 1px solid ; */
    margin: auto;
    width: 300px;
    height: 300px;
}
.signup-form{
    display: flex;
    flex-direction: column;
}

</style>