import { defineStore } from 'pinia'

const useMoneyStore = defineStore('money', {
  // 状态
  state: () => {
    return {
      money: 99
    }
  },
  // 方法
  actions: {
    updateMoney(val: number) {
      this.money = val
    }
  },
  // 计算属性
  getters: {}
})

export default useMoneyStore
