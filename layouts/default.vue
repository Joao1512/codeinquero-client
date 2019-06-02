<template>
  <div>
    <navbar></navbar>
    <teste></teste>
    <nuxt/>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>

<script>
  import navbar from '~/components/navbar.vue'
  import teste from '~/components/teste.vue'

  export default {
    components: {
      navbar,
      teste
    }
  }
</script>
