<template>
  <div class="scene about_us">
    <div class="title">
      <h1>Почему именно мы?</h1>
    </div>
    <div class="about_us_content">
      <div class="block" v-for="(item,index) in content" :key="index">
        <div class="block_title">
          <h2>{{item.title}}</h2>
        </div>
        <div class="block_description">{{item.description}}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      content: [
        {
          title: "Опыт",
          description:
            "Благодоря опыту накопленному за долгое время мы имеем понимание и подход к каждому."
        },
        {
          title: "Опыт",
          description:
            "Благодоря опыту накопленному за долгое время мы имеем понимание и подход к каждому."
        },
        {
          title: "Опыт",
          description:
            "Благодоря опыту накопленному за долгое время мы имеем понимание и подход к каждому."
        },
        {
          title: "Опыт",
          description:
            "Благодоря опыту накопленному за долгое время мы имеем понимание и подход к каждому."
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.about_us {
  padding: 100px 0 0 50px;
  position: relative;
  .title {
    text-align: center;
  }

  .about_us_content {
    min-height: 50vh;
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
  }
  .block {
    width: 60%;
    margin: 0 auto;
    .block_title {
      text-align: center;
    }
    .block_description {
      text-align: center;
    }
  }
}
</style>