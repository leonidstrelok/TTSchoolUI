<template>
  <v-app-bar :height="'50px'" :fixed="true" app>
    <v-spacer />
    <v-toolbar-title
      width="100%"
      class="lighten-1 text-center"
      v-text="title"
    />
    <v-spacer />
  </v-app-bar>
</template>


<script>
export default {
  data() {
    return {
      title: "Company name",
    };
  },
};
</script>
