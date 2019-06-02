<template>
  <div>
    <novavagacomponent></novavagacomponent>
    <nuxt/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>

<script>
  import novavagacomponent from '~/components/novavagacomponent.vue'
  export default {
    components: {
      novavagacomponent
    }
  }
</script>
