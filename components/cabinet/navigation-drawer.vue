<template>
  <div>
    <div class="toolbar">
      <v-btn @click="toggleMenu" class="mx-2" fab small dark color="teal">
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </div>

    <v-navigation-drawer v-model="drawer" height="100vh" absolute left temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{user.firstName}}</v-list-item-title>
          <v-list-item-subtitle>{{user.lastName}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item :to="item.to" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Lessons",
          icon: "mdi-view-dashboard",
          to: "/cabinet/lessons"
        },
        { title: "Settings", icon: "mdi-shield-lock", to: "/cabinet/settings" }
      ],
      right: null
    };
  },
  computed: {
    ...mapGetters({
      user: "user/getUser"
    })
  },
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang="scss">
.toolbar {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: 10px 20px;
}
</style>