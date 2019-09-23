<template>
  <div id="register" class="row">
    <div class="col self-center">
      <div class="row justify-center">
        <q-card class="my-card">
          <h1 class="row justify-center">Register</h1>

          <div class="q-pa-md">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input filled type="name" v-model="name" label="name" />
              <q-input filled type="email" v-model="email" label="E-mail" />
              <q-input filled type="password" v-model="password" label="Password" />
              <div>
                <q-btn
                  label="Registrar"
                  type="submit"
                  color="positive"
                  size="18px"
                  class="full-width q-mt-md"
                />
              </div>
            </q-form>
          </div>
        </q-card>
      </div>
      <p>
        <b>access_token</b>
        test: {{token}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "authIndex",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  computed: {
    foo() {
      return this.$store.state.auth.foo;
    },
    token() {
      return this.$store.state.auth.token;
    }
  },
  mounted() {
    console.log("hello");
    this.$store.dispatch("auth/getFoo");
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("auth/register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log("token..:", response);
          this.$router.push({ name: "dashboard-index" });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#register {
  height: 100vh;
  background-color: rgb(240, 240, 240);
}
.my-card {
  max-width: 400px;
  width: 100%;
}
</style>