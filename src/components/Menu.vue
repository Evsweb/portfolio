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
    <router-link class="menu_item" to="/hr">
      <p class="rel contacts">Для HR</p>
    </router-link>
  </div>
  <div class="contacts_block">
    <div class="contacts">
      <div class="contact_name">Контакты</div>
      <div class="cont_list">
        <li>tel: +79124960144</li>
        <li>mail: evsweb@yandex.ru</li>
        <a href="https://vk.com/evsweb" target="_blank" rel="noopener noreferrer"><li>VK: vk.com/evsweb</li></a>
      </div>
      <img src="../assets/wolf.png" alt="" class="wolf">
      <img src="../assets/viber_logo.png" alt="+79124960144" class="viber" title="+79124960144">
      <img src="../assets/telega_logo.png" alt="+79124960144" class="telega" title="+79124960144">
      <img src="../assets/whatapp_logo.png" alt="+79124960144" class="whatapp" title="+79124960144">
      <img src="../assets/skype_logo.png" alt="+79124960144" class="skype" title="+79124960144">
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
    margin-top: 15px;
    margin-left: 5%;
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
  .viber {
    position: absolute;
    left: 140px;
    bottom: 70px;
    width: 70px;
  }
  .telega {
    position: absolute;
    left: 190px;
    bottom: 140px;
    width: 70px;
  }
  .whatapp {
    position: absolute;
    left: 110px;
    bottom: 170px;
    width: 70px;
  }
  .skype {
    position: absolute;
    left: 190px;
    bottom: 10px;
    width: 70px;
  }
  a {
    color: #a03472;
  }
}
</style>
