<template>
  <div class="header__content">
    <img class="quero__icon" src="~/assets/quero_icon.png">
    <div class="header__content-icons">
      <div class="header__content-div">
        <img class="header__content-iconsearch" src="~/assets/search_icon.png">
        <label class="header__content-labelsearch">Busca</label>
      </div>
      <div class="line__divider"></div>
      <div class="header__content-div">
        <img class="header__content-iconsearch" src="~/assets/help_icon.png">
        <label class="header__content-labelsearch">Ajuda</label>
      </div>
      <div class="line__divider"></div>
      <div class="header__content-div">
        <img class="header__content-iconsearch" src="~/assets/signin_icon.png">
        <label class="header__content-labelsearch">Entrar</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  .header__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 100vw;
  }
  .quero__icon {
    width: 94px;
    height: 49px;
    margin: 10px 23vw 0 0;
  }
  .header__content-icons {
    display: flex;
    flex-direction: row;
    font-family: Roboto;
    font-style: normal;
    margin-top: 10px;
    font-weight: normal;
    font-size: 12px;
    color: #5A5A5A;
  }
  .header__content-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header__content-iconsearch {
    width: 23px;
    height: 23px;
  }
  .line__divider {
    height: 74px;
    margin: -20px 12px 0 12px;
    border-left: 1px solid #C1C1C1;
  }
</style>
