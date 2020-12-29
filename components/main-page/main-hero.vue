<template>
  <div class="scene">
    <v-carousel
      cycle
      height="90vh"
      :show-arrows="false"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <div :style="'backgroundColor:'+slide.bgcolor" class="img_wrapper">
          <v-img
            position="center"
            contain
            :src="slide.img"
            :lazy-src="slide.img"
            max-width="100%"
            max-height="100%"
          ></v-img>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          img: "img/slide1.jpg",
          bgcolor: "#c9c9c9"
        },
        {
          img: "img/slide2.jpg",
          bgcolor: "#2a0240"
        },
        {
          img: "img/slide3.jpg",
          bgcolor: "#9bdcbe"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.img_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.main_hero_title {
  margin: 50px 0;
}
</style>