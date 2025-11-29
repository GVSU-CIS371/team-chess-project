<script setup lang="ts">
import navbar from './components/navbar.vue'

const openings = [
  { id: 'ruy-lopez', name: 'Ruy López' },
  { id: 'sicilian-defense', name: 'Sicilian Defense' },
  { id: 'italian-game', name: 'Italian Game' },
]
</script>

<template>
  <div class="app-layout">
    <navbar :openings="openings" />

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-layout { display: flex; height: 100vh; }

</style>