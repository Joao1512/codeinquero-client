<template>
  <div>
    <section class="container header column">
      <div class="header__title">QUERO ESTÁGIO - VAGAS ANUNCIADAS</div>
    </section>
    <router-link class="router" v-bind:to="'/mainempregador'"
      ><div class="bolsa__title">
        <img class="bolsa__arrow-img" src="~/assets/right-arrow.png" />
        <p class="bolsa__title-text">Voltar para área principal</p>
      </div></router-link
    >
    <div class="title__vagas">
      <p class="title__vagas-text">Suas vagas anunciadas</p>
    </div>
    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1" />
        <label class="tab-label" for="chck1">Desenvolvedor Fullstack</label>
        <div class="tab-content">
          <div class="content_wrapper">
            <div class="content_wrapper-header">
              <div class="vagas_totais">
                <p class="vagas_totais-title">Vagas totais:</p>
                <p class="vagas_totais-number">256</p>
              </div>
              <div class="divider_vagas"></div>
              <div class="vagas_totais">
                <p class="vagas_totais-title">Preenchidas:</p>
                <p class="vagas_totais-number2">130</p>
              </div>
            </div>
            <div class="divider__vagas"></div>
            <div class="vagas__restantes">
              <p class="vagas__restantes-text">Vagas restantes:</p>
              <p class="vagas__restantes-number">126</p>
            </div>
            <div class="divider__vagas2"></div>
            <div class="tempo__anunciado">
              <p class="tempo__anunciado-text">Tempo anunciado:</p>
              <p class="tempo__anunciado-days">18 dias</p>
              <img class="tempo__anunciado-timer" src="~/assets/timer.svg" />
            </div>
            <div class="cancelar_anuncio">
              <p class="cancelar_anuncio-text">Cancelar anúncio</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2" />
        <label class="tab-label" for="chck2">Designer Gráfico</label>
        <div class="tab-content">
          <div class="content_wrapper">
            <div class="content_wrapper-header">
              <div class="vagas_totais">
                <p class="vagas_totais-title">Vagas totais:</p>
                <p class="vagas_totais-number">426</p>
              </div>
              <div class="divider_vagas"></div>
              <div class="vagas_totais">
                <p class="vagas_totais-title">Preenchidas:</p>
                <p class="vagas_totais-number2">210</p>
              </div>
            </div>
            <div class="divider__vagas"></div>
            <div class="vagas__restantes">
              <p class="vagas__restantes-text">Vagas restantes:</p>
              <p class="vagas__restantes-number">210</p>
            </div>
            <div class="divider__vagas2"></div>
            <div class="tempo__anunciado">
              <p class="tempo__anunciado-text">Tempo anunciado:</p>
              <p class="tempo__anunciado-days">10 dias</p>
              <img class="tempo__anunciado-timer" src="~/assets/timer.svg" />
            </div>
            <div class="cancelar_anuncio">
              <p class="cancelar_anuncio-text">Cancelar anúncio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title__vagas {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px auto;
}

.title__vagas-text {
  margin-top: 25px;
  text-transform: uppercase;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
}

.vagas__restantes {
  display: flex;
  flex-direction: row;
  align-items: center;
}

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

.vagas__restantes-text {
  font-size: 14px;
}

.vagas__restantes-number {
  margin-left: 5px;
  color: #c40404;
}

.cancelar_anuncio {
  background-color: #c40404;
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 70px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.cancelar_anuncio-text {
  color: #ffffff;
}

.tempo__anunciado {
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 70px;
  background-color: #05a9c4;
  border-radius: 10px;
}

.tempo__anunciado-text {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.tempo__anunciado-days {
  font-size: 16px;
  font-weight: 700;
  margin-left: 5px;
  color: #ffffff;
}

.tempo__anunciado-timer {
  margin-left: 5px;
  width: 23px;
  height: 23px;
}

.content_wrapper-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.vagas_totais-title {
  font-size: 14px;
}

.header {
  align-items: stretch;
}

.content_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vagas_totais-number {
  margin: auto 5px;
  color: #7b7b7b;
}

.vagas_totais-number2 {
  margin: auto 5px;
  color: #0a7447;
}

.divider__vagas {
  margin: 10px auto 0 auto;
  width: 85vw;
  border: 0.5px solid #808080;
}

.divider__vagas2 {
  margin: 0 auto 0 auto;
  width: 40vw;
  border: 0.5px solid #808080;
}

.divider_vagas {
  height: 40px;
  border: 0.5px solid #c1c1c1;
  margin: 0 auto;
}

.vagas_totais {
  display: flex;
  flex-direction: row;
  margin: 0 10px;
}

.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
}

.column {
  flex-direction: column;
}

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.row {
  display: flex;
}

.row .col {
  flex: 1;
}

.row .col:last-child {
  margin-left: 1em;
}

.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}

.tab {
  margin-top: 10px;
  width: 100%;
  color: white;
  overflow: hidden;
}

.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #05869b;
  font-weight: bold;
  cursor: pointer;
  /* Icon */
}

.tab-label:hover {
  background: #05869b;
}

.tab-label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}

.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  transition: all 0.35s;
}

.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 0.75em;
  background: #2c3e50;
  cursor: pointer;
}

.tab-close:hover {
  background: #05a9c4;
}

input:checked + .tab-label {
  background: #05a9c4;
}

input:checked + .tab-label::after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}
</style>

<script>
  export default {
    name: "JobList"
  };
</script>
