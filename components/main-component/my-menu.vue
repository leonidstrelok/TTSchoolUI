<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="true"
    :clipped="false"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "mdi-home",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-hail",
          title: "Inspire",
          to: "/about-us",
        },
        {
          icon: "mdi-book-open-variant",
          title: "Inspire",
          to: "/lessons",
        },
      ],
    };
  },
};
</script>
