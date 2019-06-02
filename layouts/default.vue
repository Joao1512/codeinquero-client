<template>
  <div>
    <Navigation></Navigation>
    <nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>

<script>
import Navigation from "~/components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>
