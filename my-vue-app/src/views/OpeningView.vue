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
  <div>
    <h1>{{ openingId }}</h1>
    <div ref="boardEl" style="width: 400px; margin: 1rem auto;"></div>
  </div>
</template>
