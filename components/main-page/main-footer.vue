<template>
  <div class="main_footer">
    <div class="policy">
      <a class="link">Terms of Service Agreement</a>
      <a class="link">Privacy Policy</a>
    </div>
    <div class="contacts">
      <v-btn v-for="(item, index) in items" :key="index" class="mx-4" icon>
        <v-icon size="30px">{{ item.icon }}</v-icon>
      </v-btn>
    </div>
    <div class="copyright">3</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-vk"
        },
        {
          icon: "mdi-youtube"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.main_footer {
  padding: 20px;
  min-height: 100px;
  border-right: 5px solid #f0f0f0;
  border-left: 5px solid #f0f0f0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  @include minmax(0px, 1024px) {
    grid-template-columns: 1fr;
  }
  .link {
    margin: 0 10px;
  }
  .copyright {
    display: flex;
    justify-content: flex-end;
  }
  .contacts {
    display: flex;
    justify-content: center;
  }
}
</style>