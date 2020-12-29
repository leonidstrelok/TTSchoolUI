<template>
  <div>
    <v-card class="px-4">
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
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
            <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
              <v-btn x-large block color="success" @click="login">Login</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
    <snackbar :snackbar="snackbar" :snackbarText="snackbarText" />
  </div>
</template>


<script>
import snackbar from "~/components/main-component/snackbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    snackbar
  },
  data() {
    return {
      snackbar: false,
      snackbarText: "",
      valid: true,
      email: "",
      password: "",
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
    }
  },
  methods: {
    ...mapActions({
      sendLogin: "auth/login",
      getUserInfo: "auth/get_user_info"
    }),
    async login() {
      let result = this.$refs.form.validate();
      if (result) {
        const params = new URLSearchParams();
        params.append("client_id", "TTSchool.API");
        params.append("grant_type", "password");
        params.append("username", this.email);
        params.append("password", this.password);
        try {
          const token = await this.sendLogin(params);
          localStorage.setItem("user", token);
          await this.getUserInfo();
          this.$router.push(`/cabinet/lessons/${this.userInfo.userIdentifier}`);
        } catch ({ response }) {
          this.snackbar = true;
          let err = response.data.error;
          if (err === "invalid_grant") {
            this.snackbarText = "Incorrect login or password";
          } else {
            this.snackbarText = err;
          }
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