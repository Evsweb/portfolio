<template>
  <div>
    <div class="big-content-block" v-for="item in portfolio" :key="item.name">
      <div class="project-name_text">{{item.name}}</div>
      <div class="port-img">
        <img :src="item.img" alt="">
      </div>
      <div class="port-text">
        <div class="description_block">
          <span>Описание:</span>
          <p>{{item.description}}</p>
        </div>
        <div class="description_block">
          <span>Технологии, библиотеки, особенности:</span>
          <p>{{item.technology}}</p>
        </div>
        <div class="description_block">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <span class="link">Перейти на сайт</span>
          </a>
        </div>
      </div>
    </div>
    <div class="last-wrapper"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: {
        yorto: {
          name: 'Yorto',
          img: '../portfolio/yorto.png',
          description: 'Сайт по продаже фигурок от производителя без привязки к движкам (только ручной работы), с адаптивным дизайном от 4к экранов до самых маленьких телефонов',
          technology: 'HTML5, CSS3, JavaScript, Git, интеграция с "Яндекс.Касса"',
          link: 'http://yorto.ru',
        },
        reezolab: {
          name: 'Reezolab',
          img: '../portfolio/port_reezolab.jpg',
          description: 'Сайт ',
          technology: 'HTML5, CSS3, JavaScript, Git, Wordpress',
          link: 'http://reezolab.ru',
        },
        forward: {
          name: 'Forward-S',
          img: '../portfolio/port_forward.png',
          description: 'Сайт ',
          technology: 'HTML5, CSS3, JavaScript, Git, Wordpress',
          link: 'http://forward-s.ru/',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.big-content-block {
  display: flex;
  flex-wrap: wrap;
  background: #ede1ed;
}
.big-content-block:nth-child(even) {
 background: #cafced;
}
.project-name_text {
  font-size: 26px;
  width: 100%;
  margin-left:60%;
  color: #a03472;
  margin-top: 5px;
  margin-bottom: 5px;
  text-decoration: underline;
}
.port-img {
  width: 40%;
    img {
      width: 95%;
      border-radius: 40px;
    }
}
.port-text {
  display: flex;
  flex-direction: column;
  width: 60%;
  span {
    color:#a03472;
    font-size: 18px;
  }
  span.link {
    text-decoration: underline;
  }
  .description_block {
    margin-top: 50px;
  }
  .description_block:first-child {
    margin-top: 20px;
  }
  p {
    color: #444444;
  }
}
</style>
