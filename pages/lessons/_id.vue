<template>
  <div class="lesson_id_wrapper">
    <v-card-title>Название урока</v-card-title>
    <div class="calendar">
      <v-date-picker
        :min="now"
        first-day-of-week="1"
        locale="ru"
        v-model="date"
        color="green lighten-1"
        full-width
        height="50vh"
        header-color="primary"
      ></v-date-picker>
    </div>
    <div class="time_wrapper">
      <v-chip-group column>
        <v-chip
          :disabled="time.disabled"
          @click="setTime(time.value)"
          v-for="(time,index) in lessonTime"
          :key="index"
        >{{ time.value | formatDate }}</v-chip>
      </v-chip-group>
    </div>
    <div class="selected_time">
      <v-chip-group class="ma-2" label text-color="white">
        <v-chip
          :class="{'teal accent-3':!isEndTime}"
          @click="setStartTime"
        >Начало:{{startTime | formatDate}}</v-chip>
        <v-chip
          :class="{'teal accent-3':isEndTime}"
          @click="setEndTime"
        >Конец:{{endTime | formatDate}}</v-chip>
      </v-chip-group>
      <v-btn block>Занять</v-btn>
    </div>
  </div>
</template>


<script>
import moment from "moment";

export default {
  data() {
    return {
      startTime: new Date(0, 0, 0, 0, 0, 0, 0),
      endTime: new Date(0, 0, 0, 0, 0, 0, 0),
      isEndTime: false,
      date: new Date().toISOString().substr(0, 10),
      lessonTime: [
        {
          value: new Date(0, 0, 0, 8, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 9, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 10, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 11, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 12, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 13, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 14, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 15, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 16, 0, 0, 0),
          disabled: false
        },
        {
          value: new Date(0, 0, 0, 17, 0, 0, 0),
          disabled: false
        }
      ]
    };
  },
  computed: {
    now() {
      let today = new Date();
      return today.toISOString().substring(0, 10);
    }
  },
  filters: {
    formatDate(value) {
      moment.locale("ru");
      return moment(value).format("LT");
    }
  },
  // watch: {
  //   endTime() {
  //     this.lessonTime.forEach(element => {
  //       if (element.value > this.endTime) {
  //         element.disabled = true;
  //       }
  //     });
  //   }
  // },
  methods: {
    setTime(time) {
      if (!this.isEndTime) {
        this.startTime = time;
        this.lessonTime.forEach(element => {
          if (element.value < time) {
            element.disabled = true;
          }
        });
      } else {
        this.endTime = time;
        this.lessonTime.forEach(element => {
          if (element.value > time) {
            element.disabled = true;
          }
        });
      }
    },
    setStartTime() {
      this.isEndTime = false;
      this.lessonTime.forEach(element => {
        if (element.value < this.startTime) {
          element.disabled = false;
        }
      });
      this.startTime = new Date(0, 0, 0, 0, 0, 0, 0);
    },
    setEndTime() {
      let noTime = new Date(0, 0, 0, 0, 0, 0, 0).getHours();
      if (this.endTime.getHours() != noTime) {
        this.lessonTime.forEach(element => {
          if (element.value > this.endTime) {
            element.disabled = false;
          }
        });
      }
      this.endTime = new Date(0, 0, 0, 0, 0, 0, 0);
      this.isEndTime = true;
    }
  },
  created() {
    console.log(this.$route.params);
  }
};
</script>


<style lang="scss">
.lesson_id_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.time_wrapper {
  display: flex;
  justify-content: center;
}
</style>