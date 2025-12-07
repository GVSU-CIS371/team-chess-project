<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 mb-2">Opening View</h1>
        <h2 class="text-h5 font-weight-light">Line</h2>
        <p class="text-body-1 mt-1">description</p>
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
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useOpeningsStore } from '@/stores/openingStore.ts'
// Import the chessboard.js library's CSS and JS
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.css';

// This tells TypeScript that a global `window.Chessboard` will exist at runtime.
declare global {
  interface Window { Chessboard: any; $: any; }
}

const route = useRoute()
const openingsStore = useOpeningsStore()

  openingsStore.init();

const boardEl = ref<HTMLElement | null>(null)
const board = ref<any>(null);

onMounted(() => {
  // Define an async function to handle the board setup.
  // This avoids using `async` directly on the onMounted callback.
  const initializeBoard = async () => {
    if (boardEl.value) {
      // 2. Dynamically import the chessboard.js script.
      await import('@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.js');

      // 3. Now that the script has loaded, initialize the board.
      board.value = new window.Chessboard(boardEl.value, {
        position: 'start',
        pieceTheme: '/img/chesspieces/wikipedia/{piece}.png'
      });
    }
  };
  // Call the async setup function.
  initializeBoard();
});
</script>