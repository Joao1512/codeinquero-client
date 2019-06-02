<template>
  <div>
    <teste></teste>
    <nuxt/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>

<script>
  import teste from '~/components/teste.vue'
  export default {
    components: {
      teste
    }
  }
</script>
