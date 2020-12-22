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
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'eye' : 'eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                      <v-btn x-large block color="success" @click="login">Login</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="registrationForm" v-model="valid" lazy-validation>
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
          </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import dataApi from "@/infrastructure/data-api.js";

export default {
  data() {
    return {
      tab: 0,
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
    tabs() {
      return [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" }
      ];
    },
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
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
    }
  },
  methods: {
    ...mapActions({
      getToken: "auth/post_access_token",
      registration: "auth/post_registration"
    }),
    async login() {
      let result = this.$refs.loginForm.validate();
      if (result) {
        const params = new URLSearchParams();
        params.append("client_id", "TTSchool.API");
        params.append("grant_type", "password");
        params.append("username", this.email);
        params.append("password", this.password);
        const token = await this.getToken(params);
        localStorage.setItem("user", token);
        try {
          let { data } = await this.$axios.get(dataApi.auth.check);
          this.$router.push(`/cabinet/lessons/${data.userIdentifier}`);
        } catch (error) {
          return false;
        }
      }
    },
    async registrate() {
      let result = this.$refs.registrationForm.validate();
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
          this.login();
        } catch (error) {
          return false;
        }
      }
    }
  }
};
</script>


<style lang="scss">
.registration_form {
  max-width: 600px;
  min-width: 360px;
  margin: 5% auto 0 auto;
  -webkit-box-shadow: 5px 5px 24px 0px rgba(50, 50, 50, 0.68);
  -moz-box-shadow: 5px 5px 24px 0px rgba(50, 50, 50, 0.68);
  box-shadow: 5px 5px 24px 0px rgba(50, 50, 50, 0.68);
}
</style>