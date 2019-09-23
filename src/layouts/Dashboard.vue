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

        <q-btn dense flat round icon="person_pin" @click="right = !right" />
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

        <q-item :to="{name: 'dashboard-list'}">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>List</q-item-label>
            <q-item-label caption>List Itens</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="right" side="right" bordered>
      <div class="profile">
        <div class="row justify-center">
          <q-avatar color="primary" text-color="white">M</q-avatar>
        </div>
        <div class="row justify-center">Mauricio Massaaki</div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">footer</q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false
    };
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
</style>