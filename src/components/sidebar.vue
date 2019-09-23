<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-white">
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
</template>

<script>
export default {
  name: "sidebar",
  props: ["leftDrawerOpen"]
};
</script>

<style>
</style>