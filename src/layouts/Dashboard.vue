<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar class="navbar">
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>&nbsp; App
        </q-toolbar-title>
        <q-btn dense flat round icon="person_pin" style="font-size:20px;" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list>
        <q-item-label header>Dashboard</q-item-label>

        <q-item :to="{name: 'dashboard-index'}">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Main page</q-item-label>
          </q-item-section>
        </q-item>

        <q-item :to="{name: 'dashboard-chart'}">
          <q-item-section avatar>
            <q-icon name="bar_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Chart</q-item-label>
            <q-item-label caption>Chart Sample</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="right" side="right" bordered>
      <div class="profile">
        <div class="row justify-center">
          <q-avatar color="primary" text-color="white">{{user.name[0].toUpperCase()}}</q-avatar>
        </div>
        <div class="row justify-center">
          <div class="profile-information">{{user.name}}</div>
        </div>

        <div class="profile-options">
          <q-list>
            <q-item :to="{name: 'dashboard-setting'}">
              <q-item-section avatar>
                <q-icon name="build" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Configuração</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable @click="confirm=true">
              <q-item-section avatar>
                <q-icon name="subdirectory_arrow_left" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="keyboard_return" color="primary" text-color="white"></q-avatar>
          <span class="q-ml-sm">Tem certeza que deseja sair?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup></q-btn>
          <q-btn flat label="Sim" color="primary" @click="logout" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer elevated class="bg-grey-8 text-white">footer</q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false,
      confirm: false
    };
  },
  computed: {
    email() {
      return this.$store.state.auth.email;
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.$store.dispatch("auth/retrieveUser");
  },
  methods: {
    logout() {
      console.log("destroy token");

      this.$store.dispatch("auth/destroyToken").then(response => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.navbar {
  background: #fff;
  color: $primary;
}
.profile {
  margin-top: 30px;
}
.profile-options {
  border-top: 1px solid rgb(241, 241, 241);
  margin-top: 15px;
  color: #555;
}
.profile-information {
  color: #555;
  margin: 15px 0;
}
</style>