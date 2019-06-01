<template>
  <div class="header">
    <img class="header__logo" src="~/assets/quero_icon.png">
    <div class="header__icons-1">
      <img class="header__icons-logo" src="~/assets/search_icon.png">
      <label>Busca</label>
    </div>
    <div class="header__linedivider"></div>
    <div class="header__icons-2">
      <img class="header__icons-logo" src="~/assets/help_icon.png">
      <label>Ajuda</label>
    </div>
    <div class="header__linedivider"></div>
    <div class="header__icons-3">
      <img class="header__icons-logo" src="~/assets/signin_icon.png">
      <label>Entrar</label>
      </div>
  </div>
</template>

<style>
  .header {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
  }
  .header__logo {
    width: 94px;
    height: 49px;
    margin: 15px 0 0 -15px;
  }
  .header__icons {
    display: flex;
    flex-direction: row;
  }
  .header__icons-logo {
    width: 23px;
    height: 23px;
  }
</style>
