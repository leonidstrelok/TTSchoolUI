<template>
  <div>
    <v-row>
      <v-col v-for="lesson in lessons" :key="lesson.id" cols="12" sm="6" xs="12" lg="4" xl="3">
        <LessonCard :lesson="lesson" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LessonCard from "~/components/lessons/lesson-card.vue";
export default {
  components: { LessonCard },
  data() {
    return {
      lessons: [
        {
          id: 1,
          name: "Уроки вождения",
          description: "Описание уроков вождения"
        },
        {
          id: 2,
          name: "Уроки английского языка",
          description: "Описание уроков английского языка"
        }
      ]
    };
  }
};
</script>



<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  font-size: 16px;
  z-index: 100;
  width: 100%;
  cursor: pointer;
}
.lesson {
  position: relative;
  z-index: 1;
}
.subtitle-1 {
  padding: 10px;
}
</style>