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
    <div class="no-mobile">К сожалению на сайт временно отсутствует мобильная версия,
       поверните телефон, либо зайти с устройста побольше, извините за неудобства</div>
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
  background-color: #ebe3da;
  color: #000000;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #FEEDD3;
}
.wrapper {
  max-width: 1366px;
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
  padding: 20px 40px 40px;
  height: 100%;
  overflow-y: scroll;
}
.big-content-block {
  width: 97%;
  background: #ede1ed;
  border-radius: 40px;
  padding: 0 20px 20px;
  margin: 20px 0;
}
.last-wrapper {
  margin-bottom: 80px;
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
.no-mobile {
  display: none;
}
@media screen and (max-width: 900px) {
  .wrapper {
    display: none;
  }
  .no-mobile {
    display: block;
    font-size: 2em;
  }
}
</style>
