<script setup>
const router = useRouter();
const signinForm = ref({ email: '', password: '' });

const loginUser = async () => {
  await signInUser(signinForm.value.email, signinForm.value.password);
  router.push('/');
};
</script>

<template lang="pug">
div
  p LOGIN

  form(@submit.prevent="loginUser")
    label(for="email") email
    input(name="email" type="text" v-model="signinForm.email")
    label(for="password") password
    input(name="password" type="password" v-model="signinForm.password")
    button(type="submit") Login
</template>

<style lang="scss" scoped></style>
