<script setup lang="ts">
import navbar from './components/navbar.vue'

const openings = [
  { id: 'ruy-lopez', name: 'Ruy López' },
  { id: 'sicilian-defense', name: 'Sicilian Defense' },
  { id: 'italian-game', name: 'Italian Game' },
]
</script>

<template>
  <v-app>
    <navbar :openings="openings" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>

</style>