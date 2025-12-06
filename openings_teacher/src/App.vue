<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Openings Teacher</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          to="/"
        ></v-list-item>
             
        <v-list-subheader
          class="d-flex justify-center text-h6 font-weight-bold white--text">
          Openings
        </v-list-subheader>

        <v-list-item
          v-for="opening in openings"
          :key="opening.id"
          :title="opening.name"
          :to="`/openings/${opening.id}`"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const drawer = ref(true)
  const openings = [
    { id: 'ruy-lopez', name: 'Ruy López' },
    { id: 'sicilian-defense', name: 'Sicilian Defense' },
    { id: 'italian-game', name: 'Italian Game' },
  ]
</script>
