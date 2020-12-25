<template>
  <div>
    <v-card class="mx-auto" max-width="100%" tile v-for="(item, i) in items" :key="i">
      <v-list flat>
        <v-subheader>{{item.reservedDate | formatDate}}</v-subheader>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            :class="{'red lighten-3':!time.busy}"
            v-for="(time,index) in item.reservedTime"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{time.startTimeLesson }} : {{time.endTimeLesson }}</v-list-item-title>
              <v-list-item-subtitle v-text="setLessonName(time.lessonId)"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <div class="d-flex">
                <v-btn @click="canceledLesson(item,time)" v-if="time.busy" icon>
                  <v-icon color="grey">mdi-close-circle</v-icon>
                </v-btn>
              </div>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import dataApi from "@/infrastructure/data-api.js";
import moment from "moment";
export default {
  data() {
    return {
      selectedItem: 1,
      items: [],
      lessons: [
        {
          id: 2,
          name: "Prep CDL Test"
        },
        {
          id: 4,
          name: "Pre-Trip Inspection"
        },
        {
          id: 3,
          name: "Accounting"
        },
        {
          id: 1,
          name: "Dispatching"
        }
      ]
    };
  },
  filters: {
    formatDate(value) {
      moment.locale("us");
      return moment(value).format("L");
    },
    formatTime(value) {
      moment.locale("us");
      return moment(value).format("LT");
    }
  },
  methods: {
    setLessonName(id) {
      let name;
      this.lessons.forEach(element => {
        if (element.id == id) {
          name = element.name;
        }
      });
      return name;
    },
    canceledLesson(item, time) {
      this.$axios.post(dataApi.lessons.cancelLesson, {
        id: time.lessonId,
        startDateLesson: item.reservedDate,
        startTimeLesson: time.startTimeLesson,
        endTimeLesson: time.endTimeLesson
      });
    }
  },
  async created() {
    try {
      let { data } = await this.$axios.get(dataApi.lessons.getUserLessons);
      this.items = data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>