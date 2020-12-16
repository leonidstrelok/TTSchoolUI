<template>
  <div class="scene">
    <!-- <div class="main_hero_title">
      <h1>Здесь установим заголовок и что нибудь напишем)))</h1>
    </div>-->
    <v-carousel
      cycle
      height="90vh"
      :show-arrows="false"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style lang="scss">
.main_hero_title {
  margin: 50px 0;
}
</style>