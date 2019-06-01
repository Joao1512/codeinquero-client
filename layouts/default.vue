<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>

<script>
  import navbar from '~/components/navbar.vue'

  export default {
    components: {
      navbar
    }
  }
</script>
