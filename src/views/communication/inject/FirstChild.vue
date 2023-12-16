<template>
  <div class="child">
    <h1>first-child: {{ money }}</h1>
    <button @click="handelClick">父子数据同步</button>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, toRef } from 'vue'

const money = inject('TOKEN')

const handelClick = () => {
  console.log(money)
  money.value++
}
</script>

<style scoped>
.child {
  width: 300px;
  height: 150px;
  margin: 20px 0;
  background-color: skyblue;
}
</style>