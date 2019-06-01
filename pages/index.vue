<template>
  <div>
    <bheadercomp></bheadercomp>
    <p class="content__title">Algumas bolsas de estudo em sua região</p>
    <div class="content__wrapper">
      <card__highschool></card__highschool>
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
</style>
