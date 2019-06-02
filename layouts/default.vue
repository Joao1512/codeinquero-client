<template>
  <div>
    <Navigation></Navigation>
    <Breadcrumb></Breadcrumb>
    <nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("~/static/cssreset.css");

*,
div {
  font-family: Roboto, serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f6f6f6;
}
</style>

<script>
import Navigation from "~/components/Navigation.vue";
import Breadcrumb from "../components/Breadcrumb";

export default {
  head() {
    return {
      title: "QueroEstágio",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Encontre bolsas na faculdade com estágio garantido!"
        }
      ]
    };
  },
  components: {
    Breadcrumb,
    Navigation
  }
};
</script>
