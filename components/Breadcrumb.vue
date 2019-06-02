<template>
  <div class="breadcrumb__wrapper">
    <p v-for="(label, index) in routePathLabel" class="breadcrumb">
      <nuxt-link v-if="label" class="breadcrumb__link" :to="label.path">
        {{ label.label }}
      </nuxt-link>
      <span
        class="breadcrumb__divider"
        v-if="index < routePathLabel.length - 1"
      >
        >
      </span>
    </p>
    <p class="breadcrumb" v-if="!routePathLabel">
      Encontre uma bolsa com Estágio Garantido!
    </p>
    <p class="breadcrumb" v-if="currentCourseSelected">
      {{
        `${this.$store.state.currentCourse.university} - ${
          this.$store.state.currentCourse.title
        }`
      }}
    </p>
  </div>
</template>

<style scoped>
.breadcrumb__wrapper {
  height: 49px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  flex-direction: row;
  background-color: #18acc4;
  justify-content: flex-start;
}

.breadcrumb {
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  margin-right: 5px;
  font-family: Roboto, serif;
}

.breadcrumb__link {
  color: #ffffff;
  text-decoration: none;
}

.breadcrumb__divider {
  margin: 0 5px;
}
</style>

<script>
import routeLabels from "~/plugins/routeLabels";

export default {
  name: "Breadcrumb",
  computed: {
    routePathLabel: function() {
      if (this.$route.path.length > 1) {
        const routeArray = this.$route.path
          .split("/")
          .filter(item => item !== "");

        const finalArray = [];

        for (let index = 0; index < routeArray.length; index++) {
          if (index > 0) {
            finalArray.push(`${routeArray[index - 1]}-${routeArray[index]}`);
          } else {
            finalArray.push(routeArray[index]);
          }
        }

        return finalArray.map(item => routeLabels[item]);
      }
    },
    currentCourseSelected: function() {
      return this.$route.name === "course" && this.$store.state.currentCourse;
    }
  }
};
</script>
