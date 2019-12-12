<template>
  <div id="app">
    <div class="wrapper">
      <div class="menu_side">
        <Menu />
      </div>
      <div class="content_side">
        <div class="test_block">
          Главная страница
        </div>
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
  font-family: fat;
  background-color: #FEEDD3;
  color: #000000;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #FEEDD3;
}
.wrapper {
  max-width: 1400px;
  margin: 20px auto;
  background: #1034A6;
  min-height: 900px;
  border-radius: 40px;
  display: flex;
  box-sizing: border-box;
}
.menu_side {
  width: 25%;
}
.content_side {
  background: #EFFAFC;
  width: 100%;
  height: 100%;
  min-height: 890px;
  display: block;
  border-radius: 40px;
  box-sizing: border-box;
  margin: 7px 7px 7px 0;
}
.test_block {
  width: 90%;
  height: 200px;
  background: #ffffff;
  border-radius: 40px;
}
</style>
