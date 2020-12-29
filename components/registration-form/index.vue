<template>
  <div class="registration_form_wrapper">
    <div class="registration_form">
      <div>
        <v-tabs
          v-model="tab"
          show-arrows
          background-color="deep-purple accent-4"
          icons-and-text
          dark
          grow
        >
          <v-tabs-slider color="purple darken-4"></v-tabs-slider>
          <v-tab v-for="(i, index) in tabs" :key="index">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
          </v-tab>
          <v-tab-item>
            <login />
          </v-tab-item>
          <v-tab-item>
            <registration />
          </v-tab-item>
          <v-tab-item>
            <forgotPassword />
          </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </div>
</template>


<script>
import login from "~/components/registration-form/login.vue";
import registration from "~/components/registration-form/registration.vue";
import forgotPassword from "~/components/registration-form/forgot-password.vue";
export default {
  components: {
    login,
    registration,
    forgotPassword
  },
  data() {
    return {
      tab: 0
    };
  },
  computed: {
    tabs() {
      return [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" },
        { name: "Forgot", icon: "mdi-shield-account-outline" }
      ];
    }
  },
  methods: {}
};
</script>


<style lang="scss">
.registration_form {
  max-width: 600px;
  min-width: 300px;
  margin: 5% auto 0 auto;
  -webkit-box-shadow: 5px 5px 24px 0px rgba(50, 50, 50, 0.68);
  -moz-box-shadow: 5px 5px 24px 0px rgba(50, 50, 50, 0.68);
  box-shadow: 5px 5px 24px 0px rgba(50, 50, 50, 0.68);
}
</style>