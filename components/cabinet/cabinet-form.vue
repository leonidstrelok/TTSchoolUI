<template>
  <v-card height="89vh" width="100%" class="mx-auto">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Фамилия</v-list-item-title>
          <v-list-item-subtitle>Имя</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { title: "Мои уроки", icon: "mdi-view-dashboard" },
        { title: "Еще что-то", icon: "mdi-image" },
        { title: "Еще что-то 2", icon: "mdi-help-box" }
      ],
      right: null
    };
  }
};
</script>