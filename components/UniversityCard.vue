<template>
  <div class="card__image-wrapper">
    <img class="card__logo" src="~/assets/unip_logo.png" alt="Logo" />

    <div class="card__divider"></div>

    <p class="card__title">Engenharia de Computação</p>

    <div class="card__divider"></div>

    <div class="evaluations">
      <img
        class="evaluations__medal"
        src="https://img.icons8.com/cotton/50/000000/olympic-medal-silver.png"
        alt="Medal"
      />
      <p class="evaluations__text">236 avaliações de alunos</p>
    </div>

    <div class="card__divider"></div>

    <div class="discount">
      <p class="card__text">
        Bolsas de até <span class="card__text--green">80%</span>
      </p>
    </div>

    <div class="price">
      <p class="card__text">
        A partir de
        <span class="card__text--green">R$ 137</span>
        <span class="card__text--green card__text--small">/mês</span>
      </p>
    </div>

    <nuxt-link :onclick="setCurrentCourse()" to="/course">
      <button class="card__action">
        Ver detalhes da bolsa
      </button>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card__image-wrapper {
  width: 300px;
  height: 390px;
  display: flex;
  margin: 0 auto;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.card__logo {
  width: 150px;
  height: 63px;
  margin-top: 20px;
}

.card__divider {
  width: 80%;
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
  methods: {
    setCurrentCourse() {
      this.$store.commit("setCurrentCourse", {
        title: "UNIP - Engenharia de Computação"
      });
    }
  }
};
</script>
