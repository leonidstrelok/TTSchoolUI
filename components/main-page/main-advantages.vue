<template>
  <div class="advantages">
    <div class="photo_paralax">
      <div class="block">
        <v-parallax src="img/hero.png">
          <h1 class="advantage_description">Study with us</h1>
          <div class="advantage_description">
            <h1>Merv Learning Center better known as MLC assists in training and exam preparation for truck driving.</h1>
          </div>
        </v-parallax>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.photo_paralax {
  .v-parallax {
    text-align: center;
    // min-height: 90vh !important;
  }
  .v-parallax__content {
    padding: 20px;
    // color: rgba(2, 2, 2, 0.904);
  }
  .advantage_description {
    margin: 30px 0 0 0;
    color: black;
  }
}
</style>