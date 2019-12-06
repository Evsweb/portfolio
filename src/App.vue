<template>
  <div id="app">
    <div class="wrapper">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: main-font; /* Гарнитура шрифта */
  src: url(assets/camper.woff); /* Путь к файлу со шрифтом */
}
body {
  font-family: main-font;
  background-color: #000000;
  color: #24C020;
}
a {
  text-decoration: none;
  color: #24C020;
}
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}
</style>
