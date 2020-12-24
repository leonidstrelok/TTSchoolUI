<template>
  <v-card class="mx-auto" max-width="100%" tile>
    <v-list flat>
      <v-subheader>{{new Date() | formatDate}}</v-subheader>
      <v-list-item-group v-model="selectedItem">
        <v-list-item :class="{'red lighten-3':item.canceled}" v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{item.startTime | formatTime}} : {{item.startEnd | formatTime}}</v-list-item-title>
            <v-list-item-subtitle v-text="item.lessonName"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <div class="d-flex">
              <v-btn @click="canceledLesson(item.id)" v-if="!item.canceled" icon>
                <v-icon color="grey">mdi-close-circle</v-icon>
              </v-btn>
            </div>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import dataApi from "@/infrastructure/data-api.js";
import moment from "moment";
export default {
  data() {
    return {
      selectedItem: 1,
      items: [
        {
          id: 1,
          lessonName: "Урок английского",
          startTime: new Date(),
          startEnd: new Date(),
          canceled: false
        },
        {
          id: 2,
          lessonName: "Урок вождения",
          startTime: new Date(),
          startEnd: new Date(),
          canceled: false
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
    canceledLesson(id) {
      console.log(id);
    }
  },
  mounted() {
    // try {
    //   let { data } = this.$axios.get(dataApi.lessons.getByIdLesson);
    //   this.items = data;
    // } catch (error) {
    //   console.error(error);
    // }
  }
};
</script>