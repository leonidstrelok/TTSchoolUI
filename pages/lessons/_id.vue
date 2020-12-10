<template>
  <div class="lesson_id_wrapper">
    <v-card-title>Название урока</v-card-title>
    <!-- :disabled="true" -->
    <v-date-picker
      :min="now"
      first-day-of-week="1"
      locale="ru"
      v-model="date"
      color="green lighten-1"
      full-width
      header-color="primary"
    ></v-date-picker>

    <!-- <v-date-picker v-model="date" class="mt-4"></v-date-picker> -->
    <div class="time_wrapper">
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>8:00PM</v-chip>
        <v-chip>9:00PM</v-chip>
        <v-chip>10:00PM</v-chip>
        <v-chip>11:00PM</v-chip>
        <v-chip>12:00PM</v-chip>
        <v-chip>13:00PM</v-chip>
        <v-chip>14:00PM</v-chip>
        <v-chip>15:00PM</v-chip>
        <v-chip>16:00PM</v-chip>
        <v-chip>17:00PM</v-chip>
      </v-chip-group>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10)
    };
  },
  computed: {
    now() {
      let today = new Date();
      return today.toISOString().substring(0, 10);
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