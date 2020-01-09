<template>
  <div class="big-content-block">
    <div class="front-main">
      FRONT-END <br>
      DEVELOPER
    </div>
    <div class="front-img">
      <img src="portfolio/react.png" alt="">
      <img src="portfolio/html.png" alt="">
      <img src="portfolio/js.png" alt="">
      <img src="portfolio/css.png" alt="">
      <img src="portfolio/vue.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.big-content-block {
  background-color: #cafced;
  min-height: 90%;
}
.front-main {
  font-size: 6em;
  color: #a03472;
  text-shadow: #000000 1px 1px 0, #000000 2px 2px 0, #000000 3px 3px 0,
   #000000 4px 4px 0,  #000000 5px 5px 0;
  text-align: center;
  padding-top: 1em;
  font-family: megafat;
}
.front-img {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  img {
    max-width: 200px;
    height: 100%;
  }
  img:first-child {
    position: relative;
    top: -158px;
  }
  img:nth-child(2) {
    position: relative;
    top: 80px;
  }
  img:nth-child(4) {
    position: relative;
    top: 80px;
  }
  img:nth-child(5) {
    position: relative;
    top: -150px;
  }
}
</style>
