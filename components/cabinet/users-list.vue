<template>
  <div class="cabinet_content">
    <v-card class="mx-auto" max-width="100%" tile v-for="(item, i) in items" :key="i">
      <v-list flat>
        <v-list-item-group v-model="selectedItem">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span class="user_info">
                  <span>Name: {{item.lastName}} {{item.firstName}}</span>
                  <span>Email: {{item.email}}</span>
                </span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import dataApi from "@/infrastructure/data-api.js";
import { mapGetters } from "vuex";

import moment from "moment";
export default {
  data() {
    return {
      selectedItem: 1,
      items: []
    };
  },
  computed: {
    ...mapGetters({ userInfo: "auth/getUserInfo" })
  },
  async mounted() {
    try {
      let { data } = await this.$axios.get(dataApi.lessons.getAllUsers);
      this.items = data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss">
.cabinet_content {
  margin: 10px 0 0 0;
}
.user_info {
  margin: 0 20px;
  span {
    margin: 0 20px;
  }
}
</style>