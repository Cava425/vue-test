<template>
  <div>
    <div ref="box"
         class="wraps">
      <div class="item"
           v-for="item in chatList"
           :key="item">
        <span>{{ item.name }}:</span>
        <span>{{item.message }}</span>
      </div>
    </div>

    <el-input v-model="input"
              :rows="2"
              type="textarea"
              placeholder="请输入" />
    <el-button type="success"
               round
               @click="send">发送</el-button>
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue'

const input = ref<string>('')
const box = ref<HTMLDivElement>()
let chatList = reactive([{ name: '小张', message: 'xxxxxxx' }])

const send = async () => {
  chatList.push({ name: '小徐', message: input.value })
  /**
   * 刷新Dom和更新数据是异步执行的，下面这行代码要在Dom刷新后执行，因此需要放到nextTick中执行
   */

  // 方案一：回调函数模式
  // nextTick(() => {
  //   box.value.scrollTop = 99999
  // })

  // 方案二：async await
  await nextTick()
  box.value!.scrollTop = 99999
}
</script>
<style scoped>
.wraps {
  height: 300px;
  border: 2px solid red;
  overflow: auto;
}
</style>