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
.sidebar { width: 250px; border-right: 1px solid #eee; padding: 1rem; background-color: #f9fafb; }
.sidebar h3 { margin-top: 1.5rem; color: black}
.sidebar ul { list-style: none; padding: 0; }
.sidebar li a { display: block; padding: 0.5rem; color: #333; border-radius: 4px; }
.sidebar li a:hover { background-color: #e5e7eb; }
.sidebar li a.router-link-active { font-weight: bold; background-color: #e0e7ff; }
.home-link {
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
}
</style>
