<template>
    <div>
        <h1>로그인 페이지</h1>
        
        <p>아직 회원이 아니신가요?</p>
        <RouterLink :to="{ name: 'signup' }">회원가입하기</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>