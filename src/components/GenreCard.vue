<template>
    <div class="genre-card">
        <h3>{{ genre.name }}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
    genre: Object
})

</script>

<style scoped>
.genre-card{
    width: 120px;
    height: 90px;
    border: 1px solid black;
}

</style>