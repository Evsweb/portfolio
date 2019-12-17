<template>
  <div>
    <div class="big-content-block">
      <div class="project-name_text">Yorto</div>
      <div class="port-img">
        <img src="../assets/yorto.png" alt="">
      </div>
      <div class="port-text">
        текст
      </div>
    </div>
    <div class="big-content-block-second">
      <div class="project-name_text">Yorto</div>
      <div class="port-img">
        <img src="../assets/yorto.png" alt="">
      </div>
      <div class="port-text">
        текст
      </div>
    </div>
    <div class="last-wrapper"></div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.big-content-block {
  display: flex;
  flex-wrap: wrap;
}
.big-content-block-second {
  display: flex;
  flex-wrap: wrap;
}
.project-name_text {
  font-size: 22px;
  width: 85%;
  text-align: center;
  color: #a03472;
  margin-top: 5px;
  margin-bottom: 5px;
  text-decoration: underline;
}
.port-img {
  width: 30%;
    img {
      width: 90%;
    }
}
.port-text {
  width: 50%;
}
</style>
