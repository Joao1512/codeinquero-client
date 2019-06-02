<template>
  <div>
    <bthac_bolsa></bthac_bolsa>
    <router-link class="router" v-bind:to="'/'"><div class="bolsa__title">
      <img class="bolsa__arrow-img" src="~/assets/right-arrow.png">
      <p class="bolsa__title-text">Cursos e bolsas na unip</p>
    </div></router-link>
    <p class="bolsa__subtitle-text">Ciência da Computação na UNIP</p>
    <bolsa_full_detail></bolsa_full_detail>
    <nuxt/>
  </div>
</template>

<style>
  .bolsa__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 0 10px;
  }
  .bolsa__arrow-img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  .bolsa__title-text {
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    text-transform: uppercase;
    color: rgba(90, 90, 90, 0.8);
  }
  .router {
    text-decoration: none;
  }
  .bolsa__subtitle-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #000000;
    margin-left: 15px;
  }
</style>

<script>
  import bolsa_full_detail from '~/components/bolsa_full_detail.vue'
  import bthac_bolsa from '~/components/bthac_bolsa.vue'

  export default {
    components: {
      bolsa_full_detail,
      bthac_bolsa
    }
  }
</script>
