<template>
  <div id="login" class="row">
    <div class="col self-center">
      <div class="row justify-center">
        <q-card class="my-card">
          <h1 class="row justify-center">Login</h1>
          <!-- <p class="row justify-center">
            Axios Test..: &nbsp;
            <b>{{foo}}</b>
          </p>-->

          <div class="q-pa-md">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input filled type="email" v-model="username" label="E-mail" />
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
      <!-- <p>
        <b>access_token</b>
        test: {{token}}
      </p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "authIndex",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    // foo() {
    //   return this.$store.state.auth.foo;
    // },
    // token() {
    //   return this.$store.state.auth.token;
    // }
  },
  mounted() {
    // console.log("Getting foo element");
    // this.$store.dispatch("auth/getFoo");
  },
  methods: {
    async onSubmit() {
      // this.$q.loading.show();
      // console.log("login");
      // console.log("username", this.username, " | Password", this.password);
      await this.$store
        .dispatch("auth/retrieveToken", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          // console.log("token..:", response);
          this.$router.push({ name: "dashboard-index" });
          // this.$q.loading.hide();
        });
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