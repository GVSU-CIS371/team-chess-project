import { defineStore } from 'pinia'
import type { opening, line } from '@/types/openingTypes'
import openingsData from '@/data/openings.json'

export const useOpeningStore = defineStore('openings', {
  state: () => ({
    openings: [] as opening[],
    selectedOpeningId: null as string | null,
    currentLineIndex: 0,
    
  }),

  actions: {
    init() {
      this.openings = openingsData as opening[];
      this.selectedOpeningId = null;
      this.currentLineIndex = 0;
    },

    getOpening(id: string) {
      return this.openings.find(opening => opening.id === id) || null;
    },

    getSelectedOpeningId() {
      return this.selectedOpeningId;
    }
  }
})