<template>
  <div>
    <section class="container stretch column">
      <div class="item">QUERO ESTÁGIO - EMPREGADOR</div>
    </section>

    <section class="container center column">
      <img src="~/assets/user.png" style="height:100px;width:100px;padding:30px">
    </section>

    <section class="container center column ">
      <div class="title1"> NOME DO EMPREGADOR</div>
    </section>
    <div class="space">
    </div>
    <section class="container">
      <div class="item2 row center container justify-content-center">
        <p>Nova Vaga</p>
        <img src="~/assets/plus.png" style="height:23px;width:23px;margin-left: 10px;">
      </div>
      <div class="item2 row center container justify-content-center">
        <p>Candidatos: 0</p>
      </div>
    </section>

    <router-link class="router" v-bind:to="'/mainempregador_vagas'">
      <section class="container">
        <div style="display:flex" class=" item2 justify-content-center">
          <p class="row center"> Vagas Anunciadas</p>
        </div>
      </section>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: "mainempregadorcomponent"
  }
</script>

<style>
  .space {
    margin-top: 165px;
  }

  .router {
    text-decoration: none;
  }

  .title1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;


    color: rgba(0, 0, 0, 0.53);
  }

  .stretch {
    align-items: stretch;
  }

  .center {
    align-items: center;
  }

  .justify-content-center {
    justify-content: center;
  }

  /* Flex Container */
  .container {
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  .column {
    flex-direction: column;
  }

  .row {
    flex-direction: row;
  }

  /* Flex Item */
  .item {
    flex: 1;
    padding: 17px 15px;
    background: #05869B;
    color: #FFFFFF;
    text-align: left;
    font-size: 1em;
    font-family: Roboto;
  }

  .item2 {
    flex: 1;
    padding: 1px 15px;
    background: #05869B;
    color: #FFFFFF;
    border-radius: 10px;
    margin: 16px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }

  .item:first-child {
    padding-top: 20px;
  }

  .alinhamento-central .item {
    flex: 0;
    padding: 10px;
  }

</style>
