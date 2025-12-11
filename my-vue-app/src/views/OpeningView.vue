<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'


declare global {
  interface Window { Chessboard: any; }
}

const route = useRoute()
const openingId = computed(() => route.params.id)

const boardEl = ref<HTMLElement | null>(null)

onMounted(() => {
  if (boardEl.value) {
    const board = new window.Chessboard(boardEl.value, {
      position: 'start',
      pieceTheme: '/img/chesspieces/wikipedia/{piece}.png'
    })
  }
})

</script>

<template>
  <!--
  <div id="board">
    <h1>{{ openingId }}</h1>
    <h2>Line</h2>
    <p>description</p>
    <div ref="boardEl" style="width: 400px; margin: 1rem auto;"></div>
    <button>Previous Line</button>
    <button>Next Line</button>
  </div>
  -->
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 mb-2">{{ openingId }}</h1>
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
