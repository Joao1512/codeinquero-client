<template>
  <div>
    <div class="space_navbar">
      <p class="navbar__title">Unip</p>
    </div>
    <router-link class="router" v-bind:to="'/'"
      ><div class="bolsa__title">
        <img class="bolsa__arrow-img" src="~/assets/right-arrow.png" />
        <p class="bolsa__title-text">Cursos e bolsas na unip</p>
      </div></router-link
    >
    <p class="bolsa__subtitle-text">Ciência da Computação na UNIP</p>

    <div class="content">
      <div class="cards__wrapper">
        <div class="card">
          <img class="img2" src="~/assets/unip1.png" />
        </div>
        <div class="card">
          <div class="star_row">
            <img class="star" src="~/assets/star.png" />
            <img class="star" src="~/assets/star.png" />
            <img class="star" src="~/assets/star.png" />
            <img class="star" src="~/assets/star.png" />
            <img class="star" src="~/assets/star_empty.png" />
            <span class="nota">4.2</span>
          </div>
          <div class="div__navaliacoes">
            <p class="n_avaliacoes">8.632 avaliações</p>
          </div>
        </div>
      </div>
      <div class="card__semester">
        <img class="card__semester-logo" src="~/assets/calendar.png" />
        <p class="card__semester-title">2º semestre de 2019</p>
      </div>
      <div class="card__semester">
        <img class="card__semester-logo" src="~/assets/school.png" />
        <p class="card__semester-title">Asa Sul - Brasília</p>
      </div>
    </div>
    <div class="card__details">
      <div class="card__details-header">
        <div class="card__details-headerleft">
          <p class="card__details-title">Ciência da Computação</p>
          <p class="card__details-subtitle">Bacharelado (graduação)</p>
          <div class="card__details-types">
            <div class="card__details-types1">
              <p class="card__details-types1-title">PRESENCIAL</p>
            </div>
            <div class="card__details-types1">
              <p class="card__details-types1-title">NOITE</p>
            </div>
            <div class="card__details-types1">
              <p class="card__details-types1-title">4 ANOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
.bolsa__title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 10px;
}
.bolsa__arrow-img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.bolsa__title-text {
  font-family: Roboto;
  font-style: normal;
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(90, 90, 90, 0.8);
}
.router {
  text-decoration: none;
}
.bolsa__subtitle-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  margin-left: 15px;
}
.space_navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 49px;
  background-color: #18acc4;
  max-width: 100vw;
}
.navbar__title {
  font-family: Roboto;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  margin-left: 20px;
}

@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  height: 518px;
  background-color: #000000;
}

.cards__wrapper {
  display: flex;
  flex-direction: row;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 20px 10px 0 10px;
  background-color: #ffffff;
  width: 155px;
  height: 90px;
}

.star_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto auto;
}

.star {
  width: 15px;
  height: 15px;
  margin-top: -1px;
}

.nota {
  margin-left: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
}

.div__navaliacoes {
  display: flex;
  flex-direction: column;
}

.n_avaliacoes {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #7b7b7b;
}

.img2 {
  margin: auto auto;
}

.card__semester {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 20px auto 0 auto;
  background-color: #ffffff;
  width: 330px;
  height: 40px;
}

.card__semester-logo {
  margin: 0 15px 0 14px;
}

.card__semester-title {
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  color: #7b7b7b;
}

.card__details {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: -268px auto 0 auto;
  background-color: #ffffff;
  width: 330px;
  height: 520px;
}

.card__details-header {
  display: flex;
  flex-direction: row;
}

.card__details-headerleft {
  display: flex;
  flex-direction: column;
}

.card__details-types {
  display: flex;
  flex-direction: row;
}

.card__details-title {
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.62);
}

.card__details-subtitle {
  margin-top: -10px;
  font-family: Roboto;
  font-style: normal;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.62);
}

.card__details-types1 {
  display: flex;
  flex-direction: column;

  background-color: #c4c4c4;
  margin-left: 10px;
}

.card__details-types1-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #696969;
}
</style>

<script>
export default {
  data: function(){
    return {
      name: "Rafael"
    }
  }
};
</script>
