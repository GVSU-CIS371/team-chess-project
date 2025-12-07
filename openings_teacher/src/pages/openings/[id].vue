<template>
  <v-container>
    <v-card>
    <v-row justify="center">
      <v-col v-if="openingData" cols="12" class="text-center">
        <h1 class="text-h3 mb-2">{{ openingData.name }}</h1>
        <h2 v-if="currentLine" class="text-h5 font-weight-light">{{ currentLine.name }}</h2>
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
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useOpeningStore } from '@/stores/openingStore.ts'
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.css';

declare global {
  interface Window { Chessboard: any; $: any; }
}

const props = defineProps<{
  id: string;
}>();

const openingStore = useOpeningStore();
const { currentLineIndex } = storeToRefs(openingStore);

const openingData = computed(() => openingStore.getOpening(props.id));

const currentLine = computed(() => {
  if (!openingData.value || openingData.value.lines.length === 0) return null;
  return openingData.value.lines[currentLineIndex.value];
});

watch(() => props.id, (newId) => {
  openingStore.selectedOpeningId = newId;
  openingStore.currentLineIndex = 0;
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