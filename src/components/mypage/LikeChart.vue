<template>
    <div v-if="chartData.labels">
        <Doughnut :data="chartData" :options="options" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import axios from 'axios';
import { useUserStore } from '@/stores/user';

ChartJS.register(ArcElement, Tooltip, Legend)

const userStore = useUserStore()

const chartData = ref({
  labels: [],
  datasets: [
    {
      backgroundColor: [],
      data: []
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false, // 그래프의 크기를 조절하기 위해 사용
  plugins: {
    legend: {
      position: 'left',
      align: 'start',
      labels: {
        boxWidth: 20,
        padding: 20
      }
    }
  },
  layout: {
    padding: {
      left: 50
    }
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

onMounted(() => {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/likes/genre-frequency/',
        headers: {
            'Authorization': `Token ${userStore.token}`
        }
    })
    .then(response => {
        console.log(response.data)
        const labels = Object.keys(response.data)
        const data = Object.values(response.data)
        const backgroundColors = labels.map(() => getRandomColor())
        chartData.value = {
        labels: labels,
        datasets: [
            {
            backgroundColor: backgroundColors,
            data: data
            }
        ]
        }

        console.log(chartData.value)
    })
})
</script>

<style lang="scss" scoped>

</style>