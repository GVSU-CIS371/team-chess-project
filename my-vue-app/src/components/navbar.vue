<script setup lang="ts">
import type { PropType } from 'vue'

// Define an interface for the opening object for better type safety
interface Opening {
  id: string;
  name: string;
}

// This component receives the list of openings as a prop from its parent (App.vue)
defineProps({
  openings: {
    type: Array as PropType<Opening[]>,
    required: true
  }
})
</script>

<template>
  <aside class="sidebar">
    <nav>
      <router-link to="/" class="home-link">Home</router-link>
      <h3>Openings</h3>
      <ul>
        <li v-for="opening in openings" :key="opening.id">
          <router-link :to="`/openings/${opening.id}`">{{ opening.name }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>

</style>
