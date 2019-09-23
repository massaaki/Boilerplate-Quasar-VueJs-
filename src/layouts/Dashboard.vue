<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="navbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>App</q-toolbar-title>
        <router-link :to="{name: 'dashboard-profile'}">
          <div class="q-gutter-x-sm">
            <q-avatar color="primary" text-color="white">M</q-avatar>
          </div>
        </router-link>
      </q-toolbar>
    </q-header>

    <sidebar :leftDrawerOpen="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import sidebar from "../components/sidebar.vue";

export default {
  name: "MyLayout",
  components: {
    sidebar
  },
  data() {
    return {
      leftDrawerOpen: true
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #fff;
  color: $primary;
}
</style>
