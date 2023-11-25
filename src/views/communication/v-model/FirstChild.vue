<template>
  <div class="child">
    <h1>first-child: {{ modelValue }}</h1>
    <h3>{{ money }}</h3>
    <button @click="handelClick">父子数据同步</button>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue'

const props = defineProps(['modelValue'])

const emits = defineEmits(['update:modelValue'])

// ReadOnly
// const money = toRef(props, 'modelValue')
const money = ref<number>(props.modelValue)

const handelClick = () => {
  emits('update:modelValue', (money.value += 100))
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