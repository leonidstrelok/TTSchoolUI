<template>
  <div>
    <MainHero />
    <MainAdvantages />
    <MainAboutUs />
  </div>
</template>


<script>
import MainHero from "~/components/main-page/main-hero.vue";
import MainAdvantages from "~/components/main-page/main-advantages.vue";
import MainAboutUs from "~/components/main-page/main-about-us.vue";
export default {
  components: {
    MainHero,
    MainAdvantages,
    MainAboutUs
  }
};
</script>