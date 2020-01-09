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
          <a :href="item.link" v-if="item.button" target="_blank" rel="noopener noreferrer">
            <span class="link">Перейти на сайт</span>
          </a>
          <span v-else>К сожалению сайт закрылся (или еще не запущен) и не доступен для живого
            просмотра, в ближайшее время появится его демо версия</span>
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
        forward: {
          name: 'Forward-S',
          img: '../portfolio/port_forward.png',
          description: 'Сайт для типографии, в задачу входило создание с 0 под ключ соответствуя цветам и пожеланиям заказчика, максимум информативности и удобства для клиентов',
          technology: 'HTML5, CSS3, JavaScript, Git, Pug',
          link: 'http://forward-s.ru/',
          button: true,
        },
        portfol: {
          name: 'Портфолио',
          img: '../portfolio/port_port.png',
          description: 'SPA с не совсем обычным дизайном, для донесения максимума информации для работодателей и потенциальных клиентов о проделанной работе и возможностях сотрудничества',
          technology: 'HTML5, CSS3, JavaScript, Git, интеграция с "Яндекс.Касса"',
          link: 'http://evsweb.ru',
          button: true,
        },
        yorto: {
          name: 'Yorto',
          img: '../portfolio/port_yorto.png',
          description: 'Сайт по продаже фигурок от производителя без привязки к движкам (только ручной работы), с адаптивным дизайном от 4к экранов до самых маленьких телефонов',
          technology: 'HTML5, CSS3, Javascript, Vue.js, Git, SPA, Vue Router',
          link: 'http://yorto.ru',
          button: true,
        },
        fittennis: {
          name: 'Fittennis',
          img: '../portfolio/port_fittennis.png',
          description: 'Сервис онлайн бронирования, проведения турниров и расписания, один из первых и крупных клиентов это клуб Спортхолл в г.Пермь',
          technology: 'HTML5, CSS3, JavaScript, Git, angularJS, PHP, MySQL и т.д.',
          link: 'https://sh.fittennis.club/',
          button: true,
        },
        reezolab: {
          name: 'Reezolab',
          img: '../portfolio/port_reezolab.jpg',
          description: 'Сайт для студии компьютерной графики на WP с полным обучение сотрудников для самостоятельного редактирования базы проектов',
          technology: 'HTML5, CSS3, JavaScript, Git, Wordpress',
          link: 'http://reezolab.ru',
          button: true,
        },
        basni: {
          name: 'БаСНи',
          img: '../portfolio/port_basni.png',
          description: 'Витрина для демонстрации продаваемой мебельной продукции одного из магазинов г.Перми',
          technology: 'HTML5, CSS3, JavaScript, Git',
          link: 'http://basni-vdv173.ru/',
          button: true,
        },
        beton: {
          name: 'СтройПромСервис',
          img: '../portfolio/port_beton.png',
          description: 'Совмещение визитки и лендинга с максимально развернутой информацией для клиентов',
          technology: 'HTML5, CSS3, JavaScript, Git, Pug',
          link: '',
          button: false,
        },
        zavod: {
          name: 'Камтэкс',
          img: '../portfolio/port_zavod.jpg',
          description: 'Лендинг на 90% состоящий из анимаций и подвижных элементов',
          technology: 'HTML5, CSS3, JavaScript, Git, jQuery, Drag&Drop',
          link: '',
          button: false,
        },
        esb: {
          name: 'ЕСБ',
          img: '../portfolio/port_esb.png',
          description: 'Интернет витрина для оптовых покупателей',
          technology: 'HTML5, CSS3, JavaScript, Git',
          link: 'http://esbperm.ru',
          button: true,
        },
        ytkepDesign: {
          name: 'Ytkep Design',
          img: '../portfolio/port_ytkepdesign.png',
          description: 'Веб студия бородатых годов',
          technology: 'HTML5, CSS3, JavaScript',
          link: '',
          button: false,
        },
        brats: {
          name: 'Luxury Home',
          img: '../portfolio/port_brats.jpg',
          description: 'Сайт презентация элитного коттеджного поселка',
          technology: 'HTML5, CSS3, JavaScript',
          link: '',
          button: false,
        },
        sipco: {
          name: 'Sipco',
          img: '../portfolio/port_sipko.jpg',
          description: 'Лендинг внутренней отделки домов',
          technology: 'HTML5, CSS3, JavaScript',
          link: '',
          button: false,
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
