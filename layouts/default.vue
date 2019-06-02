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
