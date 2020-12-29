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
    <snackbar :snackbar="snackbar" :snackbarText="snackbarText" />
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import snackbar from "~/components/main-component/snackbar.vue";
export default {
  data() {
    return {
      valid: true,
      oldPassword: "",
      newPassword: "",
      verify: "",
      show1: false,
      snackbar: false,
      snackbarText: ""
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "auth/getUserInfo"
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
        try {
          await this.changePassword(reg);
          this.snackbarText = "Password changed";
          this.snackbar = true;
          setTimeout(() => {
            this.$router.push(
              `/cabinet/lessons/${this.userInfo.userIdentifier}`
            );
          }, 2000);
        } catch (error) {
          this.snackbarText = "Invalid password";
          this.snackbar = true;
          console.log({ error });
        } finally {
          setTimeout(() => {
            this.snackbar = false;
          }, 2000);
        }
      }
    }
  }
};
</script>

