<template>
  <footer :class="{open:active}">
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        <v-btn v-for="(item, index) in items" :to="item.to" :key="index" class="mx-4" icon>
          <v-icon size="30px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
    <div class="cont">
      <div class="contacts">
        <v-btn v-for="(item, index) in contacts" :key="index" class="mx-4" icon>
          <v-icon size="30px">{{ item.icon }}</v-icon>
        </v-btn>
      </div>
      <div class="policy">
        <a class="link">Terms of Service Agreement</a>
        <a class="link">
          <PrivacyPolicy />
        </a>
      </div>
      <div class="copyright">Copyright © QOMPLX, Inc. 2020 All rights reserved</div>
    </div>
  </footer>
</template>

<script>
import PrivacyPolicy from "~/components/main-component/privacy-policy.vue";
export default {
  components: {
    PrivacyPolicy
  },
  data: () => ({
    active: false,
    contacts: [
      {
        icon: "mdi-vk"
      },
      {
        icon: "mdi-youtube"
      }
    ],
    items: [
      {
        icon: "mdi-home",
        title: "Welcome",
        to: "/"
      },
      {
        icon: "mdi-book-open-variant",
        title: "Inspire",
        to: "/lessons"
      },
      {
        icon: "mdi-hail",
        title: "Inspire",
        to: "/cabinet"
      }
    ]
  }),
  computed: {
    path() {
      return this.$route;
    }
  },
  watch: {
    path() {
      setTimeout(() => {
        this.active = false;
      }, 100);
    }
  },
  created() {
    document.addEventListener("scroll", e => {
      let clientHeight = document.scrollingElement.clientHeight;
      let scrollTop = document.scrollingElement.scrollTop;
      let scrollHeight = document.scrollingElement.scrollHeight;
      let pageEnd = Math.ceil(clientHeight + scrollTop);
      if (pageEnd == scrollHeight && this.path.path == "/") {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
};
</script>


<style lang="scss">
footer {
  background-color: #f0f0f0;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 100px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  &.open {
    max-height: 300px;
  }
}
.cont {
  padding: 20px;
  border-right: 5px solid #f0f0f0;
  border-left: 5px solid #f0f0f0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  .link {
    margin: 0 10px;
  }
  .copyright {
    display: flex;
    justify-content: flex-end;
  }
  .contacts {
    display: flex;
    // justify-content: center;
  }
  .policy {
    display: flex;
    justify-content: center;
  }
}
</style>