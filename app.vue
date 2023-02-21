<script setup>
const email = 'bogdan.cadar@wolfpack-digital.com';
const password = 'qweqwe123';

const firebaseUser = useFirebaseUser();

onMounted(async () => {
  const credentials = await signInUser(email, password);
  console.log('credentials', credentials);
  // setTimeout(async () => {
  //   const credentials = await signOutUser();
  // }, 3000);
});
</script>

<template lang="pug">
div
  ClientOnly
    pre {{ firebaseUser }}
</template>

<style lang="scss" scoped></style>
