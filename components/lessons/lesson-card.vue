<template>
  <v-card :height="540" :loading="loading" class="mx-auto my-12" max-width="350">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img contain height="250" :lazy-src="`img/${lesson.img}`" :src="`img/${lesson.img}`"></v-img>

    <v-card-title>{{lesson.name}}</v-card-title>

    <v-card-text style="height:170px">
      <v-row align="center" class="mx-0"></v-row>

      <div>{{lesson.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text :to="'lessons/'+ lesson.id">Reserve</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object
    }
  },
  data: () => ({
    loading: false,
    selection: 1
  }),
};
</script>

<style>
</style>