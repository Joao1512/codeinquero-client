<template>
  <div v-if="this.$store.state.currentCourse">
    <nuxt-link class="router" to="/">
      <div class="bolsa__title">
        <img class="bolsa__arrow-img" src="~/assets/right-arrow.png" />
        <p class="bolsa__title-text">Voltar para área principal</p>
      </div>
    </nuxt-link>
    <div class="profile">
      <div class="card">
        <div class="card__image-wrapper">
          <img
            class="card__image"
            :src="this.$store.state.currentCourse.logo_path"
            alt="Logo"
          />
        </div>
        <div class="card__image-wrapper">
          <div class="card__star-wrapper">
            <img class="star" src="~/assets/star.png" alt="star" />
            <img class="star" src="~/assets/star.png" alt="star" />
            <img class="star" src="~/assets/star.png" alt="star" />
            <img class="star" src="~/assets/star.png" alt="star" />
            <img class="star" src="~/assets/star_empty.png" alt="star_empty" />
            <span class="nota">4.2</span>
          </div>
          <div class="div__navaliacoes">
            <p class="n_avaliacoes">
              {{ this.$store.state.currentCourse.evaluations }} avaliações
            </p>
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
          <p class="card__details-title">
            {{ this.$store.state.currentCourse.title }}
          </p>
          <p class="card__details-subtitle">Bacharelado (graduação)</p>
          <div class="card__details-types">
            <div class="card__details-types1">
              <p class="card__details-types1-title">PRESENCIAL</p>
            </div>
            <div class="divider"></div>
            <div class="card__details-types1">
              <p class="card__details-types1-title">NOITE</p>
            </div>
            <div class="divider"></div>
            <div class="card__details-types1">
              <p class="card__details-types1-title">4 ANOS</p>
            </div>
          </div>
        </div>
        <div class="card__details-headerright">
          <div class="card__divider"></div>
          <div class="card__details-headerleft-title">
            <p class="card__details-headerleft-title1">Bolsa de</p>
            <p class="card__details-headerleft-title2">
              {{ this.$store.state.currentCourse.discount }}%
            </p>
          </div>
        </div>
      </div>
      <div class="card__divider2"></div>
      <div class="card__price">
        <div class="card__price-month">
          <p class="card__price-month-price">
            R$ {{ this.$store.state.currentCourse.startPrice }},90
          </p>
          <p class="card__price-month-text">valor por mês</p>
        </div>
        <div class="price__last">
          <p class="price__last-price">R$ {{ realPrice.toFixed(2) }}</p>
          <p class="price__last-rest">Restam 2 bolsas</p>
        </div>
      </div>
      <div class="mensalidade__free">
        <p class="mensalidade__free-text">Mensalidade de julho grátis</p>
      </div>
      <div class="see_all_benefits">
        <a
          href="https://querobolsa.com.br/login"
          target="_blank"
          class="benefits__title"
        >
          Ver todos os benefícios
        </a>
        <img class="benefits__img" src="~/assets/right-arrow.png" />
      </div>
      <div class="bolsagarantida">
        <img
          class="bolsagarantida-img"
          src="https://d8dhf3oq7c1wo.cloudfront.net/img/1d4ab68.png"
        />
        <p class="bolsagarantida-title">POLÍTICA BOLSA GARANTIDA</p>
        <p class="bolsagarantida-subtitle">
          Não se matriculou? Não ganhou ou não usou sua bolsa? Devolvemos seu
          valor pago, sem amolação.
        </p>
      </div>
      <label class="btn" for="modal-2">
        <div class="regras_e_avisos">
          <p class="regras_e_avisos-text">Regras e Avisos</p>
        </div>
      </label>
      <input class="modal-state" id="modal-2" type="checkbox"/>
      <div class="modal">
        <label class="modal__bg" for="modal-2"></label>
        <div class="modal__inner">
          <label class="modal__close" for="modal-2"></label>
          <p class="modal__title">Regras e Avisos</p>
          <p class="modal__subtitle">
            Leia os avisos antes de adquirir sua bolsa
          </p>
          <div class="avisos_importantes">
            <img class="avisos_importantes-img" src="~/assets/warning.png">
            <p class="avisos_importantes-text">Avisos importantes</p>
          </div>
          <p class="modal__text">• A <strong>primeira mensalidade</strong> gratuita equivale à matrícula</p>
          <p class="modal__text">• O desconto se aplica a <strong>todas as mensalidades e rematrículas,</strong> com
            exceção das
            <strong>disciplinas em que o aluno ficar de dependência</strong>
          </p>
          <p class="modal__text">• Dos 65% de desconto, o Quero bolsa garante <strong>52% até o final do curso.</strong>
            O desconto
            restante é de <strong>responsabilidade da Instituição</strong> e poderá ou não ser alterado, conforme
            seus critérios internos</p>
          <div class="avisos_importantes">
            <img class="avisos_importantes-img" src="~/assets/atention.png">
            <p class="avisos_importantes-text">Regras e Observações</p>
          </div>
          <p class="modal__title"><strong>Quem pode ter a bolsa?</strong></p>
          <p class="modal__text">• Alunos que irão ingressar em sua <strong>primeira graduação</strong>
          </p>
          <p class="modal__text">• Alunos que já tenham graduação completa em <strong>qualquer outra instituição</strong></p>
          <p class="modal__title"><strong>Quem não pode ter a bolsa?</strong></p>
          <p class="modal__text">• Alunos <strong>já matriculados</strong> ou que tenha <strong>vínculo estudantil</strong> com
          esta instituição </p>
          <p class="modal__text">• Alunos transferidos de <strong>outra instituição</strong></p>
          <p class="modal__text">• Alunos já matriculados <strong>nesta instituição</strong> que trancaram ou desistiram do curso</p>
          <p class="modal__text">• Alunos que já tenham graduação completa <strong>nesta instituição</strong></p>
        </div>
      </div>
      <label class="btn" for="modal-1">
        <div class="want_this_estagio">
          <p class="want_this_estagio-text">Quero Estágio</p>
        </div>
      </label>
      <input class="modal-state" id="modal-1" type="checkbox" />
      <div class="modal">
        <label class="modal__bg" for="modal-1"></label>
        <div class="modal__inner">
          <label class="modal__close" for="modal-1"></label>
          <p class="modal__title">Ciência da computação na UNIP - Estágio</p>
          <p class="modal__subtitle">
            Venha garantir já o SEU estágio com o Quero Bolsa
          </p>
          <div class="modal__logo-div">
            <img class="modal__logo" src="~/assets/unip_logo.png" />
          </div>
          <div class="modal__content-estagio">
            <div class="vagas_estagio">
              <p class="vagas__estagio-title">Vagas de estágio:</p>
              <p class="vagas__estagio-number">236</p>
            </div>
            <div class="divider__estagio"></div>
            <div class="tempo__medio">
              <p class="tempo__medio-title">Tempo médio de contrato:</p>
              <p class="tempo__medio-number">3 anos</p>
            </div>
            <div class="divider__estagio"></div>
            <div class="estagio__copy">
              <p class="estagio__copy-text">
                O estágio faz parte do processo de formação de todo o curso de
                graduação, e auxilia o estudante a se preparar melhor para o
                futuro profissional que o espera. Tendo como principal objetivo
                colocar em prática todo o conhecimento teórico adquirido durante
                a faculdade. Com o Quero Estágio VOCÊ tem o SEU estágio
                GARANTIDO na sua faculdade tão desejada, não deixe essa
                oportunidade passar e GARANTA já!
              </p>
            </div>
            <a
              class="garantaestagiobtn"
              target="_blank"
              href="https://querobolsa.com.br/login"
            >
              <div class="garanta_seu_estagio">
                <p class="garanta_seu_estagio-title">Garantir o MEU estágio</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  transition: opacity 0.25s ease;
}

.garantaestagiobtn {
  text-decoration: none;
}

.modal__logo-div {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.bolsa__title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 0 15px;
}

  .avisos_importantes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
  }

  .avisos_importantes-img {
    width: 23px;
    height: 23px;
  }

  .avisos_importantes-text {
    margin-left: 10px;
  }

  .bolsa__arrow-img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }

  .modal__text {
    font-size: 14px;
    margin: 20px auto;
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

.bolsagarantida {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0 auto;
}

.bolsagarantida-title {
  margin-top: 8px;
  color: #05869b;
  font-size: 14px;
}

.bolsagarantida-subtitle {
  margin-top: 8px auto 12px auto;
  text-align: center;
  color: #767676;
  font-size: 12px;
}

.bolsagarantida-img {
  width: 23px;
  height: 23px;
}

.modal__logo {
  margin: 20px auto;
}

.modal__content-estagio {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vagas_estagio {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.vagas__estagio-title {
  margin-right: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.vagas__estagio-number {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #0a7447;
}

.garanta_seu_estagio {
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 56px;
  background: #0a7447;
  border-radius: 10px;
}

.garanta_seu_estagio-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
}

.tempo__medio {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tempo__medio-title {
  margin-right: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.tempo__medio-number {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
}

.divider__estagio {
  margin: 15px auto;
  width: 194px;
  border: 1px solid #808080;
}

.estagio__copy {
  display: flex;
  flex-direction: row;
}

.estagio__copy-text {
  font-family: Roboto;
  text-align: justify;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.modal__title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
}

.modal__subtitle {
  margin-top: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.modal__bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.modal-state {
  display: none;
}

.modal-state:checked + .modal {
  opacity: 1;
  visibility: visible;
}

.modal-state:checked + .modal .modal__inner {
  top: 0;
}

.modal__inner {
  transition: top 0.25s ease;
  position: absolute;
  top: -20%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  padding: 1em 2em;
  height: 50%;
}

.modal__close {
  position: absolute;
  right: 1em;
  top: 1em;
  width: 1.1em;
  height: 1.1em;
  cursor: pointer;
}

.modal__close:after,
.modal__close:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 1.5em;
  background: #ccc;
  display: block;
  transform: rotate(45deg);
  left: 50%;
  margin: -3px 0 0 -1px;
  top: 0;
}

.modal__close:hover:after,
.modal__close:hover:before {
  background: #aaa;
}

.modal__close:before {
  transform: rotate(-45deg);
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  height: 518px;
}

.card {
  display: flex;
  flex-direction: row;
}

.card__image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 20px 10px 0 10px;
  background-color: #ffffff;
  width: 156px;
  height: 91px;
  border: 0.5px solid rgba(0, 0, 0, 0.44);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.card__star-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.card__image {
  margin: auto auto;
  object-fit: contain;
  width: 140px;
  height: 80px;
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
  border: 0.5px solid rgba(0, 0, 0, 0.44);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.44);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px;
  margin: -268px auto 0 auto;
  width: 330px;
  height: 450px;
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
  margin-top: 15px;
}

.card__details-title {
  margin-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.62);
}

.card__details-subtitle {
  margin-top: 2px;
  font-family: Roboto;
  font-style: normal;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.62);
}

.card__details-types1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  background-color: #c4c4c4;
}

.card__details-types1-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  margin: auto auto;
  font-size: 12px;
  padding: 2px 2px;
  color: #696969;
}

.divider {
  margin: 0 5px;
}

.card__details-headerright {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}

.card__divider {
  height: 60px;
  margin-left: 50px;
  margin-right: 20px;
  border-left: 1px solid #c1c1c1;
}

.card__details-headerleft-title1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.62);
  margin-bottom: 0;
}

.card__details-headerleft-title2 {
  margin: auto auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #089e5e;
  text-align: center;
  margin-top: 0;
}

.card__divider2 {
  width: 300px;
  border: 1px solid #c1c1c1;
  margin: 20px auto 6px auto;
}

.card__price {
  display: flex;
  flex-direction: row;
  margin: 0 70px 0 0;
  align-items: center;
}

.card__price-month {
  display: flex;
  flex-direction: column;
}

.card__price-month-price {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 0;
}

.card__price-month-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.62);
  margin-top: 0;
}

.price__last {
  display: flex;
  flex-direction: row;
  margin-top: -10px;
}

.price__last-price {
  text-decoration: line-through;
  margin-left: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
}

.price__last-rest {
  margin-left: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  color: #e03f50;
}

.mensalidade__free {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 300px;
  height: 25px;
  background: #c9ebdc;
  border-radius: 10px;
}

.mensalidade__free-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  color: #0a7447;
}

.see_all_benefits {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
}

.benefits__title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #c28a1b;
}

.benefits__img {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  transform: rotate(180deg);
}

.regras_e_avisos {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  background: #ffffff;
  border: 1px solid #c28a1b;
  box-sizing: border-box;
  border-radius: 10px;
  height: 56px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.regras_e_avisos-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #ca9837;
}

.want_this_estagio {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 56px;
  background: #0a7447;
  border-radius: 10px;
}

.want_this_estagio-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
}

.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  transition: opacity 0.25s ease;
}

.modal__bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.modal-state {
  display: none;
}

.modal-state:checked + .modal {
  opacity: 1;
  visibility: visible;
}

.modal-state:checked + .modal .modal__inner {
  top: 0;
}

.modal__inner {
  transition: top 0.25s ease;
  position: absolute;
  top: -20%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  padding: 1em 2em;
  height: 50%;
}

.modal__close {
  position: absolute;
  right: 1em;
  top: 1em;
  width: 1.1em;
  height: 1.1em;
  cursor: pointer;
}

.modal__close:after,
.modal__close:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 1.5em;
  background: #ccc;
  display: block;
  transform: rotate(45deg);
  left: 50%;
  margin: -3px 0 0 -1px;
  top: 0;
}

.modal__close:hover:after,
.modal__close:hover:before {
  background: #aaa;
}

.modal__close:before {
  transform: rotate(-45deg);
}

@media screen and (max-width: 768px) {
  .modal__inner {
    width: 90%;
    height: 90%;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 768px) {
  .modal__inner {
    width: 90%;
    height: 90%;
    box-sizing: border-box;
  }
}
</style>

<script>
export default {
  computed: {
    realPrice() {
      if (this.$store.state.currentCourse) {
        return (
          (this.$store.state.currentCourse.startPrice + 0.9) /
          (this.$store.state.currentCourse.discount / 100)
        );
      }
    }
  },
  beforeDestroy() {
    this.$store.commit("setCurrentCourse", undefined);
  }
};
</script>
