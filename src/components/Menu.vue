<template>
<div class="menu">
  <div class="avatar_block">
    <div class="darkest">
      <img src="../assets/avatar.jpg" alt="">
      <p>Артем <br> Евсеенков </p>
    </div>
  </div>
  <div class="menu_block">
    <router-link class="menu_item" to="/">
      <p class="rel cv">Резюме</p>
    </router-link>
    <router-link class="menu_item" to="/contacts">
      <p class="rel port">Портфолио</p>
    </router-link>
    <a href="/" class="menu_item">
      <p class="rel services">Услуги</p>
    </a>
    <a href="/" class="menu_item">
      <p class="rel projects">Проекты</p>
    </a>
    <a href="/" class="menu_item">
      <p class="rel contacts">Контакты</p>
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
  height: 100%;
  color: #FEEDD3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.avatar_block {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  .darkest {
    background-color: #127876;
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
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .menu_item {
    width: 50%;
    padding: 17px 50px;
    border-radius: 0 50px 50px 0;
    margin-top: 7px;
    p {
      text-align: left;
      margin-left: 60px;
      font-size: 16px;
    }
    .rel {
      position: relative;
    }
    .cv:before {
      content: url(../assets/cv_icon.png);
      position: absolute;
      left: -60px;
      top: -8px;
    }
    .port:before {
      content: url(../assets/port_icon.png);
      position: absolute;
      left: -60px;
      top: -8px;
    }
    .services:before {
      content: url(../assets/services_icon.png);
      position: absolute;
      left: -60px;
      top: -8px;
    }
    .projects:before {
      content: url(../assets/projects_icon.png);
      position: absolute;
      left: -60px;
      top: -8px;
    }
    .contacts:before {
      content: url(../assets/contacts_icon.png);
      position: absolute;
      left: -60px;
      top: -8px;
    }
  }

  .menu_item:hover {
    background-color: #a73853;
  }
}


.contacts_block {
  margin-bottom: 7px;
  .contacts {
    width: 95%;
    background-color: #ffffff;
    min-height: 360px;
    margin: 0 auto;
    border-radius: 40px;
  }
}
</style>
