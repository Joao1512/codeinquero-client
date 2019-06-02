<template>
  <div>
    <bthac_vagasanunciadas></bthac_vagasanunciadas>
    <nuxt/>
  </div>
</template>

<script>
  import bthac_vagasanunciadas from '~/components/bthac_vagasanunciadas.vue'

  export default {
    name: "mainempregador_vagas",
    components: {
      bthac_vagasanunciadas
    }
  }
</script>

<style scoped>

</style>
