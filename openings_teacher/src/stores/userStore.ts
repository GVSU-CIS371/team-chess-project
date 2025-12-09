// Utilities
import { defineStore } from 'pinia'
import db from "../firebase.ts";
import type { User } from "firebase/auth";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null as User | null,
  }),

  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
  }
})
