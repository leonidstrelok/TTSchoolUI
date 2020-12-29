<template>
  <v-form ref="registrationForm" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="oldPassword"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Old Password"
          hint="Enter you old password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="newPassword"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="New Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          block
          v-model="verify"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, passwordMatch]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Confirm Password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
        <v-btn x-large block color="success" @click="registrate">Change password</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      valid: true,
      oldPassword: "",
      newPassword: "",
      verify: "",
      show1: false
    };
  },
  computed: {
    ...mapGetters({
      user: "user/getUser"
    }),
    passwordMatch() {
      return () => this.newPassword === this.verify || "Password must match";
    },
    rules() {
      return {
        required: value => !!value || "Required.",
        min: value => (value && value.length >= 8) || "Min 8 characters"
      };
    }
  },
  methods: {
    ...mapActions({
      changePassword: "auth/change_password"
    }),
    async registrate() {
      let result = this.$refs.registrationForm.validate();
      if (result) {
        let reg = {
          currentPassword: this.oldPassword,
          password: this.newPassword
        };
        await this.changePassword(reg);
      }
    }
  }
};
</script>

