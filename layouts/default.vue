
<template>
  <div class="header">
    <div class="header_logo">
      <img src="~/assets/quero_icon.png">
    </div>
    <div class="header_icons">
      <div class="header_icons-1">
        <img class="header_icons-logo" src="~/assets/search_icon.png"><br>
        <label class="label">Busca</label>
      </div>
      <div class="header_linedivider"></div>
      <div class="header_icons-2">
        <img class="header_icons-logo" src="~/assets/help_icon.png"><br>
        <label>Ajuda</label>
      </div>
      <div class="header_linedivider"></div>
      <div class="header_icons-3">
        <img class="header_icons-logo" src="~/assets/signin_icon.png"><br>
        <label>Entrar</label>
      </div>
  </div>
  </div>
</template>

<style>
  .header {
    font-family: Roboto;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
  }
  .header_logo {
    width: 94px;
    height: 49px;
    margin: 15px 0 0 -15px;
    
  }
  .header_icons {
    display: flex;
    margin-top:px;
    margin-left:100px;
    align-items:flex-end;
    flex-direction: row;
  }
  .header_icons-1 {
    text-align: center;
  }
  .header_icons-2 {
    text-align: center;
  }
  .header_icons-3 {
    text-align: center;
  }
  .header_icons-logo {
    width: 23px;
    height: 23px;
  }
  .header_linedivider {
    margin-top: 0;
    margin-left:4px;
    margin-right:4px;
    height: 50px;
    border: 1px solid #C1C1C1
  }
</style>
