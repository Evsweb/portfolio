<template>
  <div id="app">
    <div class="wrapper">
      <div class="menu_side">
        <Menu />
      </div>
      <div class="content_side">
        <div class="test_block"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: regular;
  src: url(assets/fonts/URWGeometric-Regular.woff);
}
@font-face {
  font-family: fat;
  src: url(assets/fonts/URWGeometric-Bold.woff);
}
@font-face {
  font-family: megafat;
  src: url(assets/fonts/URWGeometric-Black.woff);
}
body {
  font-family: regular;
  background-color: #FEEDD3;
  color: #24C020;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #009900;
}
.wrapper {
  max-width: 1880px;
  margin: 8px auto;
  background: #209F84;
  min-width: 95%;
  min-height: 800px;
  border-radius: 40px;
  display: flex;
  padding: 7px;
  box-sizing: border-box;
}
.menu_side {
  width: 18%;
}
.content_side {
  background: #EFFAFC;
  width: 100%;
  height: 800px;
  display: block;
  border-radius: 40px;
  padding: 20px;
  box-sizing: border-box;
}
.test_block {
  width: 90%;
  height: 200px;
  background: #ffffff;
  border-radius: 40px;
}
</style>
