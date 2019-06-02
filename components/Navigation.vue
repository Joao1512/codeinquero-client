<template>
  <div class="navigation">
    <nuxt-link to="/">
      <img class="navigation__logo" src="~/assets/logo.png" />
    </nuxt-link>
    <div class="navigation__link-wrapper">
      <nuxt-link class="navigation__link" v-for="item in items" :to="item.path">
        <span v-if="item.path !== '/'">{{ item.name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import routeLabels from "~/plugins/routeLabels";

export default {
  name: "Navigation",
  created() {
    this.$router.options.routes.forEach(route => {
      const label = routeLabels[route.name];

      if (label) {
        this.items.push({
          name: label,
          path: route.path
        });
      }
    });
  },
  data() {
    return {
      items: []
    };
  }
};
</script>

<style scoped>
.navigation {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

.navigation__link {
  line-height: 49px;
  margin: 0 8px;
}

.navigation__logo {
  width: 94px;
  height: 49px;
}

.navigation__link-wrapper {
  margin-left: auto;
  display: flex;
}

@media only screen and (min-width: 768px) {
  .navigation {
    justify-content: start;
  }
}
</style>
