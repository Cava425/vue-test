<template>
  <div class="table-container" v-infinite-scroll="onLoadMore">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>出生日期</th>
          <th>个人简介</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of tableData" :key="index">
          <td style="text-align: center; width: 100px;">{{ item.id }}</td>
          <td style="text-align: center; width: 100px;">{{ item.name }}</td>
          <td style="text-align: center; width: 100px;">{{ item.birthday }}</td>
          <td>{{ item.profile }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vInfiniteScroll } from '@vueuse/components'

const tableData = ref(
  new Array(20).fill({
    id: 1,
    name: '张三',
    birthday: '1990-05-15',
    profile:
      '张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。'
  })
)

const onLoadMore = () => {
    console.log('load....')
    tableData.value.push(...tableData.value, new Array(10).fill({
    id: 1,
    name: '张三',
    birthday: '1990-05-15',
    profile:
      '张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。张三是一个爱好运动的人。'
  }))
}
</script>

<style scoped>
.table-container {
  margin: 24px;
  padding: 0 20px;
  max-height: 300px;
  overflow-y: scroll;
}

.table-container table {
  width: 100%;
  border-collapse: collapse; /* 合并边框，使边框更整齐 */
}

.table-container th,
.table-container td {
  border: none; /* 添加边框样式 */
  border-bottom: 1px solid #000;
  padding: 8px; /* 可选：增加单元格内边距 */
}

/* 固定表头样式 */
.table-container thead th {
  position: sticky;
  top: 0;
  color: #fff;
  background-color: #000; /* 可选：为固定的表头添加背景色 */
}

/* 遮罩层，防止向上滚动溢出 */
.table-container::before {
  content: '';
  position: absolute;
  left: 52px;
  right: 52px;
  height: 0.42rem;
  background-color: #000;
}

/* 个人简介列样式 */
.table-container td:nth-child(4) {
  overflow-y: auto; /* 当超出3行时，启用垂直滚动条 */
  word-break: break-word; /* 当内容过长时进行单词换行 */
  display: -webkit-box; /* 为了使用 line-clamp */
  -webkit-box-orient: vertical; /* 为了使用 line-clamp */
  -webkit-line-clamp: 3; /* 设置行数 */
}
</style>
