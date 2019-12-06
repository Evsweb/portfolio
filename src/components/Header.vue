<template>
<div class="header">
  <div class="header_blur">
    <div class="header_logo"></div>
    <div class="header_nav">
      <router-link class="link" to="/">Главная</router-link>
      <router-link class="link" to="/">Работы</router-link>
      <router-link class="link" to="/contacts">Связаться</router-link>
    </div>
    <div class="header_burger"></div>
  </div>
</div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
$border-color:#24C020;

.header {
  width: 100%;
  max-width: 1920px;
}
.header_blur {
  display: flex;
  min-height: 100px;
}
.header_logo {
  width: 7%;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}
.header_nav {
  display: flex;
  width: 88%;
  border-bottom: 1px solid $border-color;
  justify-content: center;
}
.header_burger {
  width: 5%;
  border-left: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}
.link {
  font-size: 50px;
  margin-left: 20px;
}
</style>
