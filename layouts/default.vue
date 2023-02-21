<script setup>
const firebaseUser = useFirebaseUser();
const router = useRouter();

const signOut = async () => {
  await signOutUser();
  router.push('/login');
};
</script>

<template lang="pug">
.default-layout
  ClientOnly
    div.p-4.bg-slate-400
      NuxtLink(to="/") homepage
      NuxtLink(to="/secret" v-if="firebaseUser") secret page
      NuxtLink(to="/login" v-if="!firebaseUser") login page
      NuxtLink(to="/register" v-if="!firebaseUser") register page
      span(@click="signOut()" v-if="firebaseUser") sign out
    div.p-4
      slot
</template>

<style lang="scss" scoped>
.default-layout {
  a {
    @apply block;
  }
}
</style>
