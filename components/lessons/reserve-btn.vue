<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn :disabled="ready" block v-bind="attrs" v-on="on">Reserve</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Reserve this time?</v-card-title>
      <v-card-text>
        <h1 class="date">{{ date | formatDate }}</h1>
        <div class="time_flex">
          <h2 class="date">{{ startTime | formatTime }} - {{ endTime | formatTime }}</h2>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";
export default {
  props: {
    ready: {
      type: Boolean,
      default: false
    },
    startTime: {},
    endTime: {},
    date: {}
  },
  data() {
    return {
      dialog: false
    };
  },
  filters: {
    formatDate(value) {
      moment.locale("ru");
      return moment(value).format("L");
    },
    formatTime(value) {
      moment.locale("ru");
      return moment(value).format("LT");
    }
  }
};
</script>

<style lang="scss">
.date {
  text-align: center;
}
.time_flex {
  margin: 30px 0 0 0;
}
</style>