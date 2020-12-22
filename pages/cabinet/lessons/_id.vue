<template>
  <div>
    <LessonsList />
  </div>
</template>


<script>
import LessonsList from "~/components/cabinet/lessons-list.vue";
export default {
  components: {
    LessonsList
  },
  layout: "cabinet"
};
</script>