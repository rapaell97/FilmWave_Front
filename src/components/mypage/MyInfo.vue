<template>
    <div>
        {{ route.params.username }}님의 프로필
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style lang="scss" scoped>

</style>