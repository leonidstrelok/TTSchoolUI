<template>
  <div class="scene advantages">
    <div class="photo_paralax">
      <div class="block">
        <v-parallax src="img/hero.jpg">
          <h1>Узнавай больше вместе с нами</h1>
          <div class="advantage_description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id porro, sapiente voluptatum a vel laudantium blanditiis reprehenderit et eos vitae beatae fugiat temporibus enim praesentium, doloremque quaerat. Provident, rerum ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor autem doloremque nulla, quaerat ullam, nesciunt porro illo dolores nam quia ipsum facere sint reiciendis in nihil veniam. Vel, natus.
            Architecto, cumque iusto qui doloremque impedit beatae eum incidunt! Possimus, cupiditate reprehenderit architecto saepe omnis soluta officia assumenda repudiandae quas nulla, in odit, non deserunt dolorum at eaque. Nihil, tempora!
            Porro laborum inventore atque molestiae dolor pariatur aspernatur praesentium, expedita asperiores labore quisquam odit eaque impedit iste, voluptatibus nesciunt iure perferendis illum mollitia in ea quia facere quas. Quaerat, veniam.
            Sint iure vero labore, quia beatae
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
    min-height: 90vh !important;
    color: black;
  }
  .v-parallax__content {
    padding: 20px;
    // color: rgba(2, 2, 2, 0.904);
  }
  .advantage_description {
    margin: 30px 0 0 0  ;
  }
}
</style>