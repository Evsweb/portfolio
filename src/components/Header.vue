<template>
<div class="header">
  <div class="header_blur">
    <div class="header_logo"></div>
    <div class="header_nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/contacts">Contacts</router-link>
      <router-link class="link" to="/contacts">Привет писикоша</router-link>
    </div>
    <div class="header_burger"></div>
  </div>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>
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
  background: red;
}
.header_nav {
  width: 88%;
}
.header_burger {
  width: 5%;
  background: blue;
}
.link {
  font-size: 30px;
  margin-left: 20px;
}
</style>
