<template>
  <div>
    演示：
  </div>
  <div class="nav">
    <RouterLink to="/communication/vmodel">props</RouterLink>
    <RouterLink to="/communication/vmodel">custom-event</RouterLink>
    <RouterLink to="/communication/vmodel">event-bus</RouterLink>
    <RouterLink to="/communication/vmodel">v-model</RouterLink>
    <RouterLink to="/communication/vmodel">useAttrs</RouterLink>
    <RouterLink to="/communication/vmodel">provide-inject</RouterLink>
    <RouterLink to="/communication/pinia">pina</RouterLink>
    <RouterLink to="/communication/vmodel">slot</RouterLink>
  </div>
  <RouterView />
</template>

<script setup>
import VModel from './v-model/VModel.vue'

</script>

<style scoped>
.nav a {
  margin: 20px 0;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>