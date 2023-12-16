<template>
  <div>
    演示：
  </div>
  <div class="nav">
    <RouterLink to="/communication/props">props</RouterLink>
    <RouterLink to="/communication/customevent">custom-event</RouterLink>
    <RouterLink to="/communication/vmodel">event-bus</RouterLink>
    <RouterLink to="/communication/vmodel">v-model</RouterLink>
    <RouterLink to="/communication/attrs">useAttrs</RouterLink>
    <RouterLink to="/communication/inject">provide-inject</RouterLink>
    <RouterLink to="/communication/pinia">pina</RouterLink>
    <RouterLink to="/communication/slot">slot</RouterLink>
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