<template>
  <div>
    <div class="space_navbar">
      <p class="navbar__title">Encontre a sua bolsa de estudo</p>
    </div>
    <p class="content__title">Algumas bolsas de estudo em sua região</p>
    <div class="content__wrapper">
      <UniversityCard></UniversityCard>
    </div>
    <div class="ver__todasfacul">
      <a
        class="router"
        href="https://querobolsa.com.br/faculdades-e-universidades"
        ><p class="ver__todasfacul-title">Veja todas as faculdades</p></a
      >
      <img class="ver__todasfacul-img" src="~/assets/right-arrow.png" />
    </div>
  </div>
</template>

<script>
import UniversityCard from "~/components/UniversityCard.vue";

export default {
  components: {
    UniversityCard
  }
};
</script>

<style>
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
  font-weight: 700;
  color: #ffffff;
  margin-left: 20px;
}
body {
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}
.content__wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
}
.content__title {
  font-family: Roboto;
  font-style: normal;
  max-width: 250px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px auto;
  color: #de9e1f;
  font-weight: 400;
}
.ver__todasfacul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.ver__todasfacul-title {
  font-family: Roboto;
  font-style: normal;
  color: #de9e1f;
}
.ver__todasfacul-img {
  width: 10px;
  height: 9px;
  margin-left: 5px;
  transform: rotate(180deg);
}
.router {
  text-decoration: none;
}
</style>
