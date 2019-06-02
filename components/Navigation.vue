<template>
  <div class="navigation">
    <nuxt-link to="/">
      <img class="navigation__logo" src="~/assets/logo.png" />
    </nuxt-link>
    <div class="navigation__link-wrapper">
      <nuxt-link
        class="navigation__link"
        v-for="(item, index) in items[0].path === '/' ? items : items.reverse()"
        :to="item.path"
        :key="index"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

.navigation__link {
  color: #000000;
  padding: 0 8px;
  line-height: 49px;
  margin: 0 16px 0 0;
  text-decoration: none;
}

.navigation__logo {
  width: 94px;
  height: 49px;
}

.navigation__link-wrapper {
  display: none;
}

@media only screen and (min-width: 768px) {
  .navigation {
    justify-content: start;
  }

  .navigation__link-wrapper {
    margin-left: auto;
    display: flex;
  }

  .navigation__logo {
    margin: 0 0 0 16px;
  }
}
</style>

<script>
import routeLabels from "~/plugins/routeLabels";

export default {
  name: "Navigation",
  created() {
    this.$router.options.routes.forEach(route => {
      const routeData = routeLabels[route.name];

      if (routeData) {
        if (routeData.navigable) {
          this.items.push({
            name: routeData.label,
            path: route.path
          });
        }
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
