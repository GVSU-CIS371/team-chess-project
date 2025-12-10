<template>
  <h1>Sam's Chess Openings Teacher</h1>
  <p>Here you can learn and practice some of the most common lines from some of the most popular chess openings.</p>
  <v-card>
    <v-card-title>Sam's Chess Openings Teacher</v-card-title>
    <div v-if="!userStore.user">
      <v-card-text>
        <p>
          You're free to jump in and try out any of the openings, but if you're a returning user or want to save your progress for 
          next time, click the button below.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="withGoogle">Sign In With Google</v-btn>
      </v-card-actions>
    </div>
    <div v-else>
      <v-card-text>
        <p>Welcome back, {{ userStore.user.displayName }}!</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="signOutUser">Sign Out</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../firebase.ts"
import { useUserStore } from "../stores/userStore";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    userStore.setUser(currentUser);
  });
});

const withGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error during sign in:", error);
  }
};

const signOutUser = async () => {
  await signOut(auth);
};
</script>
