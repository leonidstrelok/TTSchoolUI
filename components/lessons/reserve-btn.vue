<template>
  <div>
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
          <v-btn color="green darken-1" text @click="registrateTime">Agree</v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">Disagree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar color="green" v-model="snackbar">
      Reserved
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
    <v-snackbar color="green" v-model="snackbar">
      Error
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbarError = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import moment from "moment";
import dataApi from "@/infrastructure/data-api.js";
import { mapGetters } from "vuex";

export default {
  props: {
    ready: {
      type: Boolean,
      default: false
    },
    id: {},
    startTime: {},
    endTime: {},
    date: {}
  },
  data() {
    return {
      dialog: false,
      snackbar: false,
      snackbarError: false
    };
  },
  computed: {
    ...mapGetters({
      user: "user/getUser"
    })
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
  },
  methods: {
    async registrateTime() {
      try {
        let time = {
          id: this.id,
          dateEmploymentLessonDTO: {
            startDateLesson: this.date,
            endTimeLesson: moment(this.endTime).format("LT"),
            startTimeLesson: moment(this.startTime).format("LT")
          }
        };
        await this.$axios.post(dataApi.lessons.registrateTime, time);
        this.$router.push("/cabinet/lessons/" + this.user.userIdentifier);
        this.dialog = false;
        this.snackbar = true;
      } catch (error) {
        console.log(error);
        this.dialog = false;
        this.snackbarError = true;
      }
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