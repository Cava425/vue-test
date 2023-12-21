<template>
    <div>
      演示：
    </div>
    <div class="nav">
      <RouterLink to="/html/table">Table</RouterLink>
    </div>
    <RouterView />
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped>
  .nav a {
    margin: 20px 0;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }
  </style>