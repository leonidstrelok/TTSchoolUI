<template>
  <v-app light>
    <CabinetNavigation />
    <div class="content">
      <nuxt />
    </div>
    <my-footer />
  </v-app>
</template>

<script>
import CabinetNavigation from "~/components/cabinet/navigation-drawer.vue";
import MyFooter from "~/components/main-component/my-footer.vue";
export default {
  components: {
    CabinetNavigation,
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
.content {
  padding: 30px 20px 100px 20px !important;
}
</style>
