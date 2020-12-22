<template>
  <div>
    <LessonsList />
  </div>
</template>


<script>
import LessonsList from "~/components/cabinet/lessons-list.vue";
import dataApi from "@/infrastructure/data-api.js";

export default {
  components: {
    LessonsList
  },
  layout: "cabinet",
  async mounted() {
    try {
      let { data } = await this.$axios.get(dataApi.auth.check);
      // this.$router.push("/cabinet/lesson/")
    } catch (error) {
      console.error(error);
    }
  }
};
</script>