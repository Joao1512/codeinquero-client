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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.navigation__link {
  color: #000000;
  padding: 0 8px;
  line-height: 49px;
  margin: 0 16px 0 0;
  text-decoration: none;
}

.navigation__logo {
  display: none;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 49px;
}

.navigation__link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 768px) {
  .navigation {
    justify-content: start;
    flex-direction: row;
  }

  .navigation__link-wrapper {
    margin-left: auto;
  }

  .navigation__logo {
    margin: 0 0 0 16px;
    display: flex;
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
