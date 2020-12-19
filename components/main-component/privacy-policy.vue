<template>
  <div>
    <v-dialog v-model="dialog" width="50vw">
      <template v-slot:activator="{ on, attrs }">
        <a color="red lighten-2" dark v-bind="attrs" v-on="on">Privacy Policy</a>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">Site Policy</v-card-title>

        <v-card-text>
          <h1 class="mt-3">You can rest assured our site</h1>
          <h2 class="mt-3">-Doesn't use cookies</h2>
          <h2 class="mt-3">-Safely stores your credentials</h2>
          <h2 class="mt-3">-All information about users is confidential</h2>
          <h1 class="mt-3">We are glad that you trust us. Have a nice day!</h1>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
