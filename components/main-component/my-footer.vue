<template>
  <v-footer
    :z-index="1000"
    class="p-0"
    :height="'75px'"
    :fixed="true"
    :padless="false"
  >
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn
          v-for="(item, index) in items"
          :to="item.to"
          :key="index"
          class="mx-4"
          icon
        >
          <v-icon size="30px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-home",
        title: "Welcome",
        to: "/",
      },
      // {
      //   icon: "mdi-hail",
      //   title: "Inspire",
      //   to: "/about-us",
      // },
      {
        icon: "mdi-book-open-variant",
        title: "Inspire",
        to: "/lessons",
      },
    ],
  }),
};
</script>