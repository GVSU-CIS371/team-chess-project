<template>
  <v-container>
    <v-row justify="center">
      <v-col v-if="openingData" cols="12" class="text-center">
        <h1 class="text-h3 mb-2">{{ openingData.name }}</h1>
        <h2 class="text-h5 font-weight-light">{{ openingData.lines }}</h2>
        <p class="text-body-1 mt-1">{{ openingData.description }}</p>
      </v-col>
      <v-col v-else>
        <p class="text-center">Loading opening...</p>
      </v-col>

      <v-col cols="12" class="d-flex justify-center my-4">
        <div ref="boardEl" style="width: 400px; max-width: 100%;"></div>
      </v-col>

      <v-col cols="auto">
        <v-btn>Previous Line</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn>Next Line</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useOpeningStore } from '@/stores/openingStore.ts'
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.css';

// This tells TypeScript that a global `window.Chessboard` will exist at runtime.
declare global {
  interface Window { Chessboard: any; $: any; }
}

const props = defineProps<{
  id: string;
}>();

const openingStore = useOpeningStore();

const openingData = computed(() => openingStore.getOpening(props.id));

// Watch the id prop for changes (e.g., navigating between openings)
// and update the central store with the new selected opening ID.
watch(() => props.id, (newId) => {
  openingStore.selectedOpeningId = newId;
}, { immediate: true }); // 'immediate: true' runs this on component load.

const boardEl = ref<HTMLElement | null>(null)
const board = ref<any>(null);

onMounted(() => {
  const initializeBoard = async () => {
    if (boardEl.value) {
      await import('@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.js');

      board.value = new window.Chessboard(boardEl.value, {
        position: 'start',
        pieceTheme: '/img/chesspieces/wikipedia/{piece}.png'
      });
    }
  };

  initializeBoard();
});
</script>