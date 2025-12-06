<template>
  <v-container>
    <v-card>
      <v-card-title>{{ opening.id }}</v-card-title>
      <v-card-text>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute('/openings/[id]')

    interface Opening {
        id: string;
    }

    const opening = computed<Opening>(() => {
        return { id: route.params.id }
    })
</script>