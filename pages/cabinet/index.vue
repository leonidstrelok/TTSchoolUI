<template>
  <div></div>
</template>
<script>
import dataApi from "@/infrastructure/data-api.js";
import { mapGetters } from "vuex";
export default {
  layout: "cabinet",
  computed: {
    ...mapGetters({
      userInfo: "auth/getUserInfo"
    })
  },
  created() {
    this.$router.push(`/cabinet/lessons/${this.userInfo.userIdentifier}`);
  }
};
</script>