<template>
    <div>
        <h1>마이 페이지</h1>
    </div>
    <LikeMovieList />
    <MyGroupList />
    <MyReviewList />
</template>

<script setup>
import LikeMovieList from '@/components/mypage/LikeMovieList.vue';
import MyGroupList from '@/components/mypage/MyGroupList.vue';
import MyReviewList from '@/components/mypage/MyReviewList.vue';
</script>

<style scoped>

</style>
