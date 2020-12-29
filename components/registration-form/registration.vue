<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="firstName"
              :rules="[rules.required]"
              label="First Name"
              maxlength="50"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lastName"
              :rules="[rules.required]"
              label="Last Name"
              maxlength="50"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
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
            <v-btn x-large block color="success" @click="registrate">Register</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      verify: "",
      show1: false
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "auth/getUserInfo"
    }),
    rules() {
      return {
        required: value => !!value || "Required.",
        min: value => (value && value.length >= 8) || "Min 8 characters"
      };
    },
    emailRules() {
      return [
        value => !!value || "E-mail is required",
        value => /.+@.+\..+/.test(value) || "E-mail must be valid"
      ];
    },
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    ...mapActions({
      sendLogin: "auth/login",
      registration: "auth/registration",
      getUserInfo: "auth/get_user_info"
    }),
    async registrate() {
      const params = new URLSearchParams();
      params.append("client_id", "TTSchool.API");
      params.append("grant_type", "password");
      params.append("username", this.email);
      params.append("password", this.password);
      let result = this.$refs.form.validate();
      if (result) {
        let reg = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          confirmPassword: this.verify
        };
        try {
          await this.registration(reg);
          const token = await this.sendLogin(params);
          localStorage.setItem("user", token);
          await this.getUserInfo();
          this.$router.push(`/cabinet/lessons/${this.userInfo.userIdentifier}`);
        } catch (error) {
          return false;
        }
      }
    }
  }
};
</script>