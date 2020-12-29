<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
            <v-btn x-large block color="success" @click="sendPassword">Send</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
    
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true
    };
  },
  computed: {
    emailRules() {
      return [
        value => !!value || "E-mail is required",
        value => /.+@.+\..+/.test(value) || "E-mail must be valid"
      ];
    }
  },
  methods: {
    ...mapActions({
      forgotPassword: "auth/forgot_password"
    }),
    async sendPassword() {
      let result = this.$refs.form.validate();
      if (result) {
        try {
          await this.forgotPassword(this.email);
        } catch (error) {
          return false;
        }
      }
    }
  }
};
</script>