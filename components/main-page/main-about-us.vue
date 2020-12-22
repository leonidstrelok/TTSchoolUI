<template>
  <div class="scene about_us">
    <div class="title">
      <h1>Why Choose MLC?</h1>
    </div>
    <div class="about_us_content">
      <div class="block" v-for="(item,index) in content" :key="index">
        <div class="block_title">
          <h2>{{item.title}}</h2>
        </div>
        <div class="block_description">
          <h3>{{item.description}}</h3>
        </div>
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
          title: "Trained Masters",
          description:
            "The best masters of their craft who know exactly what they are doing."
        },
        {
          title: "Years of experience",
          description:
            "Thanks to the experience gained over a long time, we have an understanding and approach to everyone."
        },
        {
          title: "Responsibility",
          description:
            "We work individually with each client choosing the best conditions."
        },
        {
          title: "Good attitude",
          description: "We are always glad to each of you."
        }
      ]
    };
  },
};
</script>


<style lang="scss" scoped>
.about_us {
  padding: 100px 0 0 50px;
  position: relative;
  @include minmax(0px, 1024px) {
    padding: 50px 0 50px 0;
  }
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
    @include minmax(0px, 1024px) {
      grid-template-columns: 1fr;
      margin: 50px 0 0 0;
    }
  }
  .block {
    width: 60%;
    margin: 0 auto;
    @include minmax(0px, 1024px) {
      padding: 10px;
    }
    .block_title {
      text-align: center;
    }
    .block_description {
      text-align: center;
    }
  }
}
</style>