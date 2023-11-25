import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useMoneyStore = defineStore('money', () => {
  const money = ref(10)
  const doubleMoney = computed(() => money.value * 2)
  function updateMoney() {
    money.value++
    console.log(money.value)
  }
  function getMoney(): number {
    return money.value
  }

  return { money, doubleMoney, updateMoney, getMoney }
})

export default useMoneyStore
