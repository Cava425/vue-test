<template>
  <div class="child">
    <h1>first-child: {{ money }}</h1>
    <h2>double: {{ doubleMoney }}</h2>
    <button @click="handelClick">父子数据同步</button>
  </div>
</template>

<script setup lang="ts">
import useMoneyStore from '@/stores/modules/money2';
import { ref, toRef } from 'vue'

const { money, doubleMoney, updateMoney } = useMoneyStore()

const handelClick = () => {
  console.log(123)
  updateMoney()
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