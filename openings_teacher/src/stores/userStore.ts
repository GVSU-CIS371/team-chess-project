// Utilities
import { defineStore } from 'pinia'
import db from "../firebase.ts";
import type { User } from "firebase/auth";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null as User | null,
  }),

  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
    async markLineCompleted(lineId: string) {
      if (!this.user) return;

      const userDocRef = doc(db, 'users', this.user.uid);

      try {
        await setDoc(userDocRef, { completedLines: arrayUnion(lineId) }, { merge: true });
      } catch (error) {
        console.error("Error marking line as completed:", error);
      }
    }
  }
})
