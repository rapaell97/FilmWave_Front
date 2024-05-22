<template>
    <div>
        username: {{ store.userName }}
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';

const store = useUserStore()
</script>

<style lang="scss" scoped>

</style>