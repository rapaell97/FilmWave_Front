<template>
    <div class="container">
        <h1 style="margin-left: 20px;">{{ userName }}님의 페이지</h1>
        <div class="box">
            <h2 style="padding-left: 50px;">{{ userName }}님의 선호도 분포</h2>
            <div class="section">
                <LikeChart />
            </div>
        </div>
        <LikeMovieList
            :userName="userName"
        />
        <MyGroupList
            :userName="userName"
        />
        <MyReviewList
            :userName="userName"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import LikeMovieList from '@/components/mypage/LikeMovieList.vue';
import MyGroupList from '@/components/mypage/MyGroupList.vue';
import MyReviewList from '@/components/mypage/MyReviewList.vue';
import LikeChart from '@/components/mypage/LikeChart.vue';

const route = useRoute()
const userName = ref(route.params.username)

</script>

<style scoped>
.container {
    color: white;
    padding-left: 30px;
    padding-right: 30px;
}

.section {
    display: flex;
    justify-content: space-between;
    width: 40%;
    height: 150px;
}
.box{
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 10px rgba(99, 193, 132, 0.8), 0px -5px 10px rgba(99, 193, 132, 0.8), 5px 0px 10px rgba(99, 193, 132, 0.8), -5px 0px 10px rgba(99, 193, 132, 0.8);
    background-color: #343d3f;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    margin-bottom: 70px;
    padding: 30px;
}
</style>

