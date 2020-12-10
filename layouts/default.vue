<template>
  <v-app light>
    <!-- <my-header /> -->
    <v-main>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </v-main>
    <my-footer />
  </v-app>
</template>

<script>
import MyHeader from "~/components/main-component/my-header.vue";
import MyFooter from "~/components/main-component/my-footer.vue";
export default {
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style lang="scss" scoped>
.v-main .v-content {
  padding: 0 0 30px 0 !important;
}
</style>
