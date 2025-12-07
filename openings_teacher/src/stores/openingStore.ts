import { defineStore } from 'pinia'
import type { opening, line } from '@/types/openingTypes'
import openingsData from '@/data/openings.json'

export const useOpeningsStore = defineStore('openings', {
  state: () => ({
    openings: [] as opening[],
    selectedOpening: null as opening | null,
    selectedLine: null as line | null,
  }),

  actions: {
    init() {
      this.openings = openingsData as opening[];
      console.log('Openings loaded:', this.openings.length);
    }
  }
})