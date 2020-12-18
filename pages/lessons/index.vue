<template>
  <div class="scene">
    <v-row>
      <v-col v-for="lesson in lessons" :key="lesson.id" cols="12" sm="12" xs="6" lg="4" xl="3">
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
          id: 2,
          name: "Prep CDL Test",
          description:
            "If you plan on operating a Commercial Motor Vehicle (CMV) then you are required to obtain a Commercial Driver License (CDL). In order to get a CDL, you must first take and pass a general knowledge test, various endorsement tests (depending on the license type you are seeking) and a driving skills test.  "
        },
        {
          id: 4,
          name: "Pre-Trip Inspection",
          description:
            "The Pre-Trip Inspection is a thorough inspection of the vehicle and all of its major systems. Inspecting the vehicle before driving each day is a Federal requirement and normally takes about 15 minutes."
        },
        {
          id: 3,
          name: "Accounting",
          description:
            "Accounting or accountancy is the measurement, processing, and communication of financial and non financial information about economic entities such as businesses and corporations."
        },
        {
          id: 1,
          name: "Dispatching",
          description:
            "Are you interested in learning about Dispatch, Logistics and Trucking industry?"
        }
      ]
    };
  }
};
</script>
