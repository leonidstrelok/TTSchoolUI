<template>
  <div>
    <v-row>
      <v-col v-for="n in 24" :key="n" cols="4" xs="14">
        <v-hover v-slot="{ hover }">
          <v-card class="lesson" height="200">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                style="height: 100%"
              >
                <div class="subtitle-1">Здесь что нибудь напишем</div>
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>



<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>