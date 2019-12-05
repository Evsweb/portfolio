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
  src: url(assets/circe-rounded.otf); /* Путь к файлу со шрифтом */
}
body {
  font-family: main-font;
  background-image: url(./assets/temp-img.jpg);
}
body::after {
  content: '';
  width: 100%;
  height: 100px;
  filter: blur(10px);
}
a {
  text-decoration: none;
  color: #000000;
}
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}
</style>
