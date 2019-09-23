<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-card class="my-card">
        <h1>Login</h1>
        <div class="q-pa-md">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input filled v-model="name" label="E-mail" />

            <q-input filled type="password" v-model="password" label="Password" />

            <div>
              <q-btn label="Login" type="submit" color="primary" />
            </div>
          </q-form>
        </div>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "authIndex",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("login");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>