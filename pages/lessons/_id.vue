<template>
  <div class="lesson_id_wrapper">
    <v-card-title>{{ title }}</v-card-title>
    <div class="calendar">
      <v-date-picker
        :min="now"
        first-day-of-week="1"
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
        >Start:{{startTime | formatDate}}</v-chip>
        <v-chip
          :class="{'teal accent-3':isEndTime}"
          @click="setEndTime"
        >End:{{endTime | formatDate}}</v-chip>
      </v-chip-group>
      <ReserveBtn
        :id="lessonId"
        :date="date"
        :startTime="startTime"
        :endTime="endTime"
        :ready="ready"
      />
    </div>
  </div>
</template>


<script>
import moment from "moment";
import dataApi from "@/infrastructure/data-api.js";
import ReserveBtn from "~/components/lessons/reserve-btn.vue";
export default {
  components: {
    ReserveBtn
  },
  data() {
    return {
      title: "12",
      startTime: new Date(0, 0, 0, 0, 0, 0, 0),
      endTime: new Date(0, 0, 0, 0, 0, 0, 0),
      isEndTime: false,
      startTimeSelected: false,
      endTimeSelected: false,
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
      ],
      lessons: [
        {
          id: "prepCdlTest",
          name: "Prep CDL Test"
        },
        {
          id: "preTripInspection",
          name: "Pre-Trip Inspection"
        },
        {
          id: "accounting",
          name: "Accounting"
        },
        {
          id: "dispatching",
          name: "Dispatching"
        }
      ],
      lessonsConst: {
        dispatching: "dispatching",
        dispatchingId: 1,
        prepCdlTest: "prepCdlTest",
        prepCdlTestId: 2,
        accouting: "accounting",
        accoutingId: 3,
        preTripInspection: "preTripInspection",
        preTripInspectionId: 4
      }
    };
  },
  computed: {
    lessonId() {
      switch (this.$route.params.id) {
        case this.lessonsConst.dispatching:
          return this.lessonsConst.dispatchingId;
          break;
        case this.lessonsConst.prepCdlTest:
          return this.lessonsConst.prepCdlTestId;
          break;
        case this.lessonsConst.accouting:
          return this.lessonsConst.accoutingId;
          break;
        case this.lessonsConst.preTripInspection:
          return this.lessonsConst.preTripInspectionId;
          break;
        default:
          break;
      }
    },
    now() {
      let today = new Date();
      return today.toISOString().substring(0, 10);
    },
    ready() {
      if (this.startTimeSelected && this.endTimeSelected) {
        return false;
      }
      return true;
    }
  },
  watch: {
    async date(value) {
      try {
        let { data } = await this.$axios.get(
          dataApi.lessons.getByIdLesson + this.lessonId + "/" + this.date
        );
        if (data.length == 0) {
          this.lessonTime.forEach(time => {
            time.disabled = false;
          });
        }
        data.forEach(element => {
          element.reservedTime.forEach(item => {
            this.lessonTime.forEach(time => {
              if (item.startTimeLesson == moment(time.value).format("LT")) {
                time.disabled = true;
              }
              if (item.endTimeLesson == moment(time.value).format("LT")) {
                time.disabled = true;
              }
            });
            // console.log(item.startTimeLesson);
            // console.log(item.endTimeLesson);
          });
        });
      } catch (error) {
        console.error(error);
      }
    }
  },
  filters: {
    formatDate(value) {
      moment.locale("ru");
      return moment(value).format("LT");
    }
  },
  methods: {
    setTime(time) {
      if (!this.isEndTime) {
        this.startTime = time;
        this.startTimeSelected = true;
        this.lessonTime.forEach(element => {
          if (element.value < time) {
            element.disabled = true;
          }
        });
      } else {
        this.endTime = time;
        this.endTimeSelected = true;
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
      this.startTimeSelected = false;
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
      this.endTimeSelected = false;
      this.endTime = new Date(0, 0, 0, 0, 0, 0, 0);
      this.isEndTime = true;
    }
  },
  async mounted() {
    try {
      let { data } = await this.$axios.get(
        dataApi.lessons.getByIdLesson + this.lessonId + "/" + this.date
      );
      if (data.length == 0) {
        this.lessonTime.forEach(time => {
          time.disabled = false;
        });
      }
      data.forEach(element => {
        element.reservedTime.forEach(item => {
          this.lessonTime.forEach(time => {
            if (item.startTimeLesson == moment(time.value).format("LT")) {
              time.disabled = true;
            }
            if (item.endTimeLesson == moment(time.value).format("LT")) {
              time.disabled = true;
            }
          });
          // console.log(item.startTimeLesson);
          // console.log(item.endTimeLesson);
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
  created() {
    this.lessons.forEach(element => {
      if (element.id === this.$route.params.id) {
        this.title = element.name;
      }
    });
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
  margin: 0 20px;
  display: flex;
  justify-content: center;
}
</style>