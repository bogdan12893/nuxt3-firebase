export default defineNuxtRouteMiddleware(() => {
  const { $auth } = useNuxtApp();
  console.log('middleware aici', $auth?.currentUser);

  if (!$auth?.currentUser?.uid) {
    return abortNavigation();
  }
});
