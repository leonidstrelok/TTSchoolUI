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
        <v-btn
          v-for="(item, index) in contacts"
          :href="'mailto:' + item.to"
          :key="index"
          class="mx-4"
          icon
        >
          <v-icon size="30px">{{ item.icon }}</v-icon>
        </v-btn>
      </div>
      <div class="policy">
        <a class="link">
          <PrivacyPolicy />
        </a>
      </div>
      <div class="copyright">Copyright © MLC, 2020</div>
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
        icon: "mdi-email",
        link: "merwlearningcenter@gmail.com"
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
        icon: "mdi-office-building",
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
  methods: {
    goTo(link) {}
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
  max-height: 10vh;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  &.open {
    max-height: 20vh;
    @include minmax(0px, 1024px) {
      max-height: 40vh;
    }
  }
  .cont {
    padding: 20px;
    border-right: 5px solid #f0f0f0;
    border-left: 5px solid #f0f0f0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include minmax(0px, 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
    align-items: center;
    .link {
      margin: 0 10px;
    }
    .copyright {
      display: flex;
      justify-content: flex-end;
      @include minmax(0px, 1024px) {
        justify-content: center;
        padding: 0 10px;
      }
    }
    .contacts {
      display: flex;
      @include minmax(0px, 1024px) {
        grid-row: 2/3;
        justify-content: space-around;
      }
    }
    .policy {
      display: flex;
      justify-content: center;
    }
  }
}
</style>