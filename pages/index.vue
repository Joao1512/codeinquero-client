<template>
  <div>
    <bheadercomp></bheadercomp>
    <p class="content__title">Algumas bolsas de estudo em sua região</p>
    <div class="content__wrapper">
      <card__highschool></card__highschool>
    </div>
    <div class="ver__todasfacul">
      <a class="router" href="https://querobolsa.com.br/faculdades-e-universidades"><p class="ver__todasfacul-title">Veja todas as faculdades</p></a>
      <img class="ver__todasfacul-img" src="~/assets/right-arrow.png">
    </div>
  </div>
</template>

<script>
  import bheadercomp from '~/components/between_header-and-component.vue'
  import card__highschool from '~/components/card__highschool.vue'

  export default {
    components: {
      bheadercomp,
      card__highschool
    }
  }
</script>

<style>
  body {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }
  .content__wrapper {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
  }
  .content__title {
    font-family: Roboto;
    font-style: normal;
    max-width: 250px;
    text-transform: uppercase;
    text-align: center;
    margin: 20px auto;
    color: #DE9E1F;
    font-weight: 400;
  }
  .ver__todasfacul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .ver__todasfacul-title {
    font-family: Roboto;
    font-style: normal;
    color: #DE9E1F;
  }
  .ver__todasfacul-img {
    width: 10px;
    height: 9px;
    margin-left: 5px;
    transform: rotate(180deg);
  }
  .router {
    text-decoration: none;
  }
</style>
