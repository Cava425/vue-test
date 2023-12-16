<template>
  <div class="parent">
    props parent: {{ moneyStore.money }}
  </div>
  <FirstChild></FirstChild>
</template>

<script  setup lang="ts">
import { ref, watch } from 'vue'
import FirstChild from './FirstChild.vue'
import useMoneyStore from '../../../stores/modules/money2';

const moneyStore = useMoneyStore()
const { money, doubleMoney, updateMoney, getMoney } = useMoneyStore()



</script>

<style scoped>
.parent {
  width: 300px;
  height: 150px;
  margin: 20px 0;
  background-color: red;
}
</style>