<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="350">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-card-title>{{lesson.name}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0"></v-row>

      <div>{{lesson.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text :to="'lessons/'+lesson.id">Перейти</v-btn>
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

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>

<style>
</style>