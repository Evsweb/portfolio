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
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
