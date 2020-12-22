<template>
  <RegistrationForm v-if="notAuthorize" />
</template>

<script>
import RegistrationForm from "~/components/main-component/registration-form.vue";
import dataApi from "@/infrastructure/data-api.js";
export default {
  components: {
    RegistrationForm
  },
  data() {
    return {
      notAuthorize: false
    };
  },
  async created() {
    try {
      let { data } = await this.$axios.get(dataApi.auth.check);
      this.$router.push(`/cabinet/lessons/${data.userIdentifier}`);
    } catch (error) {
      this.notAuthorize = true;
      console.error(error);
    }
  }
};
</script>
