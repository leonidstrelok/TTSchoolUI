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
import dataApi from "@/infrastructure/data-api.js";
import { mapMutations } from "vuex";

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
  },
  methods: {
    ...mapMutations({
      setUser: "user/SET_USER"
    })
  },
  async created() {
    try {
      let { data } = await this.$axios.get(dataApi.auth.check);
      this.setUser(data);
      this.$router.push(`/cabinet/lessons/${data.userIdentifier}`);
    } catch (error) {
      this.notAuthorize = true;
      console.error(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 30px 20px 100px 20px !important;
}
</style>
