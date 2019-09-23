<template>
  <div id="login" class="row">
    <div class="col self-center">
      <div class="row justify-center">
        <q-card class="my-card">
          <h1 class="row justify-center">Login</h1>
          <div class="q-pa-md">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input filled type="email" v-model="name" label="E-mail" />
              <q-input filled type="password" v-model="password" label="Password" />
              <div>
                <q-btn
                  label="Login"
                  type="submit"
                  color="primary"
                  size="18px"
                  class="full-width q-mt-md"
                />
              </div>
            </q-form>
          </div>
        </q-card>
      </div>
    </div>
  </div>
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
      console.log("name", this.name, " | Password", this.password);
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: rgb(240, 240, 240);
}
.my-card {
  max-width: 400px;
  width: 100%;
}
</style>