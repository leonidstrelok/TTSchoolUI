<template>
  <div class="scene about_us">
    <div class="title">
      <h1 class="padding-3">Почему мы?</h1>
    </div>
    <div class="about_us_content">
      <div class="about_us_block">
        <div class="about_us_block_title">
          <h2 class="finance-primary-color offering-title-link">Потому что</h2>
          <div
            style="margin:30px 0 0 0"
            class=".body-1"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti eaque quibusdam odio sit quos vero provident, nesciunt facere cumque quam, optio non sed possimus numquam quidem. Eaque, laudantium et?</div>
        </div>
      </div>
      <div class="about_us_block">
        <div class="about_us_block_title">
          <h2 class="finance-primary-color offering-title-link">Потому что</h2>
          <div
            style="margin:30px 0 0 0"
            class=".body-1"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti eaque quibusdam odio sit quos vero provident, nesciunt facere cumque quam, optio non sed possimus numquam quidem. Eaque, laudantium et?</div>
        </div>
      </div>
      <div class="about_us_block">
        <div class="about_us_block_title">
          <h2 class="finance-primary-color offering-title-link">Потому что</h2>
          <div
            style="margin:30px 0 0 0"
            class=".body-1"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti eaque quibusdam odio sit quos vero provident, nesciunt facere cumque quam, optio non sed possimus numquam quidem. Eaque, laudantium et?</div>
        </div>
      </div>
      <div class="about_us_block">
        <div class="about_us_block_title">
          <h2 class="finance-primary-color offering-title-link">Потому что</h2>
          <div
            style="margin:30px 0 0 0"
            class=".body-1"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti eaque quibusdam odio sit quos vero provident, nesciunt facere cumque quam, optio non sed possimus numquam quidem. Eaque, laudantium et?</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.about_us {
  margin: 100px 0 0 0;
  position: relative;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 50px 0;
  }
  .about_us_content {
    width: 100%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .about_us_block {
      margin: 0 auto;
      width: 60%;
      height: 100%;
    }
    .about_us_block_title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>