<template>
  <div class="card__image-wrapper">
    <img class="card__logo" :src="input.logo_path" alt="Logo" />

    <div class="card__divider"></div>

    <p class="card__title">{{ input.title }}</p>

    <div class="card__divider"></div>

    <div class="evaluations">
      <img
        class="evaluations__medal"
        src="https://img.icons8.com/cotton/50/000000/olympic-medal-silver.png"
        alt="Medal"
      />
      <p class="evaluations__text">
        {{ input.evaluations }} avaliações de alunos
      </p>
    </div>

    <div class="card__divider"></div>

    <div class="discount">
      <p class="card__text">
        Bolsas de até
        <span class="card__text--green">{{ input.discount }}%</span>
      </p>
    </div>

    <div class="price">
      <p class="card__text">
        A partir de
        <span class="card__text--green">R$ {{ input.startPrice }}</span>
        <span class="card__text--green card__text--small">/mês</span>
      </p>
    </div>

    <nuxt-link to="/course">
      <button @click="setCurrentCourse()" class="card__action">
        Ver detalhes da bolsa
      </button>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card__image-wrapper {
  background-color: #ffffff;
  width: 300px;
  height: 400px;
  display: flex;
  margin: 0 auto;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.card__logo {
  object-fit: contain;
  width: 150px;
  height: 63px;
  margin-top: 20px;
}

.card__divider {
  width: 60%;
  margin: 20px auto;
  border: 1px solid #c1c1c1;
}

.card__title {
  color: #4f4f4f;
  font-style: normal;
  text-transform: uppercase;
}

.card__text {
  margin-bottom: 20px;
}

.evaluations {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.evaluations__medal {
  width: 20px;
  height: 20px;
}

.evaluations__text {
  color: #888888;
  font-size: 12px;
  font-style: normal;
}

.discount {
  display: flex;
  color: #888888;
  font-style: normal;
  flex-direction: row;
}

.card__text--green {
  color: #10c979;
}

.card__text--small {
  font-size: x-small;
}

.price {
  display: flex;
  color: #888888;
  font-style: normal;
  flex-direction: row;
}

.card__action {
  width: 250px;
  height: 60px;
  color: #c28a1b;
  text-align: center;
  font-style: normal;
  background: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #c28a1b;
}
</style>

<script>
export default {
  name: "UniversityCard",
  props: ["input"],
  methods: {
    setCurrentCourse() {
      console.log(this.input);
      this.$store.commit("setCurrentCourse", this.input);
    }
  }
};
</script>
