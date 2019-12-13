<template>
  <div id="app">
    <div class="wrapper">
      <div class="menu_side">
        <Menu />
      </div>
      <div class="content_side">
        <div class="content_padding">
          <router-view/>
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
@font-face {
  font-family: days;
  src: url(assets/fonts/days.woff);
}
body {
  font-family: days;
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
  background: #18a3a1;
  min-height: 900px;
  max-height: 800px;
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
  height: 885px;
  display: block;
  border-radius: 40px;
  box-sizing: border-box;
  margin: 7px 7px 7px 0;
  overflow: hidden;
}
.content_padding {
  padding: 40px;
  height: 100%;
  overflow-y: scroll;
}
.test_block {
  width: 90%;
  height: 400px;
  background: #ffffff;
  border-radius: 40px;
  padding: 20px;
}

//scrollbar styles

::-webkit-scrollbar-thumb {
-webkit-border-radius: 5px;
border-radius: 5px;
background-color:#a73853;
}

::-webkit-scrollbar{
width: 5px;
}
</style>
