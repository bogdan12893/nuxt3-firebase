<script setup>
definePageMeta({
  middleware: 'auth',
});

const firebaseUser = useFirebaseUser();
</script>

<template lang="pug">
div
  p SECRET USER DATA PAGE
  ClientOnly
    pre {{ firebaseUser }}
</template>

<style lang="scss" scoped></style>
