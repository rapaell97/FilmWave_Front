<template>
    <div class="container">
        <div class="section1">
            <MyInfo />
            <LikeChart />
        </div>
        <LikeMovieList />
        <MyGroupList />
        <MyReviewList />
    </div>
</template>

<script setup>

import LikeMovieList from '@/components/mypage/LikeMovieList.vue';
import MyGroupList from '@/components/mypage/MyGroupList.vue';
import MyReviewList from '@/components/mypage/MyReviewList.vue';
import MyInfo from '@/components/mypage/MyInfo.vue';
import LikeChart from '@/components/mypage/LikeChart.vue';

</script>

<style scoped>
.container {
    color: white;
}

.section1 {
    display: flex;
    border: 1px solid grey;
}
</style>

