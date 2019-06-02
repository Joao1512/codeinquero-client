<template>
  <div>
    <mainempregadorcomponent></mainempregadorcomponent>
    <nuxt/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>

<script>
  import mainempregadorcomponent from '~/components/mainempregadorcomponent.vue'
  export default {
    components: {
      mainempregadorcomponent
    }
  }
</script>
