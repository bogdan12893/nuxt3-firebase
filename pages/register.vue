<script setup>
const registerForm = ref({ email: '', password: '' });
const registerMessage = ref();

const registerUser = async () => {
  const credentials = await createUser(registerForm.value.email, registerForm.value.password);
  registerForm.value = { email: '', password: '' };

  if (credentials) {
    registerMessage.value = `Successfully registered: ${credentials.user.email}`;
    setTimeout(() => {
      registerMessage.value = '';
    }, 3000);
  }
};
</script>

<template lang="pug">
div
  p REGISTER
  p {{ registerMessage }}

  form(@submit.prevent="registerUser")
    label(for="email") email
    input(name="email" type="text" v-model="registerForm.email")
    label(for="password") password
    input(name="password" type="password" v-model="registerForm.password")
    button(type="submit") Register
</template>

<style lang="scss" scoped></style>
