<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon color="grey">mdi-close-circle</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Are you sure</v-card-title>
        <v-card-text>Сancel this activity?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="red darken-1" text @click="cancel">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    cancel() {
      this.dialog = false;
      this.$emit("cancel");
    }
  }
};
</script>