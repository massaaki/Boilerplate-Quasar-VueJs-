<template>
  <div>
    Hello, {{user.name}}
    <div class="q-pa-md">
      <q-btn color="primary" @click="showNotif" label="Mostrar notificação de exemplo"></q-btn>
    </div>
  </div>
</template>

<script>
import { Notify } from "quasar";
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    showNotif() {
      this.$q.notify({
        position: "bottom",
        message: "Aceita as políticas de cookies?",
        color: "gray",
        timeout: 999999,
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
        actions: [
          {
            icon: "check_box",
            label: "Reply",
            color: "white",
            handler: () => {
              /* console.log('wooow') */
            }
          },
          {
            icon: "close",
            label: "Dismiss",
            color: "yellow",
            handler: () => {
              /* console.log('wooow') */
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>