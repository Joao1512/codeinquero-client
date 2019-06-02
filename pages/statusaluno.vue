<template>
  <div>
    <statusalunocomponent></statusalunocomponent>
    <nuxt/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>

<script>
  import statusalunocomponent from '~/components/statusalunocomponent.vue'
  export default {
    components: {
      statusalunocomponent
    }
  }
</script>