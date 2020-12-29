<template>
  <v-app light>
    <!-- <my-header /> -->
    <!-- <v-main>
    <v-container>-->
    <div class="content">
      <nuxt />
    </div>
    <!-- </v-container>
    </v-main>-->
    <script ript src="//code.jivosite.com/widget/tAFm0I2x2p" async></script>
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

<style lang="scss">
.content {
  padding: 0 0 100px 0 !important;
}
.wrap_2d94 {
  bottom: 10vh !important;
}
</style>
