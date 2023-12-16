<template>
  <div class="parent">
    inject parent: {{ money }}
  </div>
  <FirstChild></FirstChild>
</template>

<script  setup lang="ts">
import { provide, ref, watch } from 'vue'
import FirstChild from './FirstChild.vue'

const money = ref<number>(100)

provide('TOKEN', money)

</script>

<style scoped>
.parent {
  width: 300px;
  height: 150px;
  margin: 20px 0;
  background-color: red;
}
</style>