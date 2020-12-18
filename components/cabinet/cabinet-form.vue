<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title>Ваши занятия : Леонид Леонидов</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <div class="cabinet_content">
      <LessonListItme />
    </div>
  </div>
</template>


<script>
import LessonListItme from "~/components/cabinet/lesson-list-item.vue";
export default {
  components: {
    LessonListItme
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.cabinet_content {
  margin: 10px 0 0 0;
}
</style>