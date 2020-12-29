<template>
  <v-app light v-if="userInfo">
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
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CabinetNavigation,
    MyFooter
  },
  computed: {
    ...mapGetters({ userInfo: "auth/getUserInfo" })
  },
  methods: {
    ...mapActions({
      getUserInfo: "auth/get_user_info"
    })
  },
  async created() {
    try {
      await this.getUserInfo();
      this.$router.push("/cabinet/lessons/" + this.userInfo.userIdentifier);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 30px 20px 100px 20px !important;
}
</style>
