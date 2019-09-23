<template>
  <div>
    <h1 class="row justify-center">Landing page</h1>
    <div class="row justify-center">
      <img src="../../assets/robo-quasar-logo-full.svg" />
    </div>
    <div class="row justify-center">
      <q-btn
        color="primary"
        class="full-width q-mt-md"
        style="max-width: 400px"
        :to="{name: 'login'}"
      >Login</q-btn>
    </div>
    <div class="row justify-center q-mt-md">ou</div>
    <div class="row justify-center">
      <q-btn
        color="positive"
        class="full-width q-mt-md"
        style="max-width: 400px"
        :to="{name: 'register'}"
      >Registrar</q-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>