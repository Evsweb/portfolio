<template>
  <div class="big-content-block">
    <h1>Для HR</h1>
    <p class="standart-text">
      Я всегда открыт для любых предложений! <br>
      Так что пишите, я отвечаю всем и на любые вопросы, мы всегда договоримся) <br>
      Ну или могу подсказать где достать нужный кадр.
    </p>
    <p class="standart-text">
      tel: +79124960144 <br>
      mail: evsweb@yandex.ru <br>
      Установлены все мессенджеры, можете писать туда
    </p>
    <p>
      <router-link class="link" to="/cv">
        Ссылка на онлайн резюме
      </router-link>
    </p>
    <p class="for-print">
      <a href="CV-Evseenkov-Artem.docx" download>Резюме для печати</a>
    </p>
    <p>
      <router-link class="link" to="/portfolio">
        Ссылка на онлайн портфолио
      </router-link>
    </p>
    <p class="standart-text">
      P.S. здесь скоро появятся ответы на часто задаваемые вопросы
    </p>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.big-content-block {
  height: 90%;
  padding-top: 2em;
  h1 {
  font-size: 2em;
  text-align: center;
  color : #a03472;
  }
}
.standart-text {
  margin-top: 20px;
  margin-bottom: 20px;
}
a {
  color: #444444;
  text-decoration: underline;
}
</style>
