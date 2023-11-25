<template>
  <div class="parent">
    parent: {{ money }}
  </div>
  <!-- <FirstChild :modelValue="money" @update:modelValue="handleUpdate"></FirstChild> -->
  <FirstChild v-model:modelValue="money"></FirstChild>
</template>

<script  setup lang="ts">
import { ref } from 'vue'
import FirstChild from './FirstChild.vue'

const money = ref<number>(1000)

const handleUpdate = (val: number) => {
  money.value = val
}
</script>

<style scoped>
.parent {
  width: 300px;
  height: 150px;
  margin: 20px 0;
  background-color: red;
}
</style>