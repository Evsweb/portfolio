<template>
<div class="menu">
  <div class="avatar_block">
    <div class="darkest">
      <img src="../assets/avatar.jpg" alt="">
      <p>Артем <br> Евсеенков </p>
    </div>
  </div>
  <div class="menu_block">
    <a href="/" class="menu_item">
      <p>Менюшка</p>
    </a>
    <a href="/" class="menu_item">
      <p>Менюшка</p>
    </a>
    <a href="/" class="menu_item">
      <p>Менюшка</p>
    </a>
    <a href="/" class="menu_item">
      <p>Менюшка</p>
    </a>
    <a href="/" class="menu_item">
      <p>Менюшка</p>
    </a>
  </div>
  <div class="contacts_block">
    <div class="contacts"></div>
  </div>
</div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.menu {
  color: #FEEDD3;
}
.avatar_block {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  .darkest {
    background-color: #111E6C;
    width: 100%;
    box-sizing: border-box;
    margin: 0 35px;
    padding: 5px;
    border-radius: 40px;
    position: relative;
    text-align: center;
  }
  img {
    position: absolute;
    border-radius: 50%;
    left: -5px;
    top: -17px;
  }
  p {
    margin-left: 80px;
  }
}

.menu_block{
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .menu_item {
    width: 50%;
    padding: 17px 50px;
    border-radius: 0 50px 50px 0;
    margin-top: 7px;

    p {
      text-align: right;
      margin-right: 0px;
      font-size: 18px;
    }
  }
  .menu_item:hover {
    background-color: #FFC100;
  }
}
.contacts_block{
  margin-top: 50px;

  .contacts {
    width: 95%;
    background-color: #ffffff;
    min-height: 360px;
    margin: 0 auto;
    border-radius: 40px;
  }
}
</style>
