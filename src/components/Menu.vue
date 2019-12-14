<template>
<div class="menu">
  <router-link class="menu_item" to="/">
    <div class="avatar_block">
      <div class="darkest">
        <img src="../assets/avatar.jpg" alt="">
        <p>Артем <br> Евсеенков </p>
      </div>
    </div>
  </router-link>
  <div class="menu_block">
    <router-link class="menu_item" to="/cv">
      <p class="rel cv">Резюме</p>
    </router-link>
    <router-link class="menu_item" to="/portfolio">
      <p class="rel port">Портфолио</p>
    </router-link>
    <router-link class="menu_item" to="/services">
      <p class="rel services">Услуги</p>
    </router-link>
    <router-link class="menu_item" to="/projects">
      <p class="rel projects">Проекты</p>
    </router-link>
    <router-link class="menu_item" to="/contacts">
      <p class="rel contacts">Контакты</p>
    </router-link>
  </div>
  <div class="contacts_block">
    <div class="contacts">
      <div class="contact_name">Контакты</div>
      <div class="cont_list">
        <li>ytkep87@yandex.ru</li>
        <li>112312</li>
        <li>123123</li>
      </div>
      <img src="../assets/wolf.png" alt="" class="wolf">
    </div>
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
    background-color: #a03472;
    width: 100%;
    box-sizing: border-box;
    margin: 0 35px;
    padding: 5px;
    border-radius: 40px;
    position: relative;
    text-align: center;
    border: 2px solid #a03472;
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
    background-color: #a03472;
  }
}


.contacts_block {
  margin-bottom: 7px;
  position: relative;
  .contacts {
    width: 95%;
    background-color: #EFFAFC;
    min-height: 360px;
    margin: 0 auto;
    border-radius: 40px;
    color: #a03472;
  }
  .contact_name {
    padding-top: 15px;
    font-size: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .contact_little {
    margin-top: 10px;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
  }
  .cont_list {
    margin-top: 20px;
    margin-left: 40%;
    font-size: 15px;
  }
  .cont_list li {
    list-style: none;
  }
  .wolf {
    position: absolute;
    left: -8px;
    bottom: -25px;
    width: 150px;
  }
}
</style>
