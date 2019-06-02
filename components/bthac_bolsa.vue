<template>
  <div class="space_navbar">
    <p class="navbar__title">Unip</p>
  </div>
</template>

<script>
    export default {
        name: "bthac_bolsa"
    }
</script>

<style scoped>
  .space_navbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 49px;
    background-color: #18ACC4;
    max-width: 100vw;
  }
  .navbar__title {
    font-family: Roboto;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #ffffff;
    margin-left: 20px;
  }
</style>
