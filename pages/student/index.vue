<template>
  <div>
    <div class="header">
      <p class="header__title">QUERO ESTÁGIO - STATUS DO ALUNO</p>
    </div>

    <div class="profile">
      <img class="profile__image" src="~/assets/user.png" alt="User" />

      <p class="profile__name">José Carlos</p>

      <div class="profile__info">
        <div class="profile__text-wrapper">
          <p class="profile__text profile__text--big">
            Status: Apto à Estagiar
          </p>
        </div>

        <div class="profile__text-wrapper">
          <p class="profile__text">Média: 8,6</p>
        </div>

        <div class="profile__text-wrapper">
          <p class="profile__text">Frequência: 93%</p>
        </div>

        <div class="profile__text-wrapper">
          <nuxt-link
            to="/student/internship-list"
            class="profile__text profile__text--big"
          >
            Solicitar Estágio
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  margin: 0 auto;
  max-width: 100vw;
  background: #05869b;
  align-items: stretch;
  flex-direction: column;
}

.header__title {
  padding-left: 20px;
  line-height: 53px;
  color: #ffffff;
}

.profile {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.profile__image {
  height: 100px;
  width: 100px;
  padding: 30px;
}

.profile__name {
  font-weight: bold;
  line-height: 16px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.53);
}

.profile__info {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 330px;
}

.profile__text-wrapper {
  flex: 1 0 50%;
}

.profile__text {
  text-decoration: none;
  width: 120px;
  display: flex;
  color: #ffffff;
  margin: 10px auto;
  font-weight: bold;
  line-height: 23px;
  padding: 10px 15px;
  background: #05869b;
  border-radius: 10px;
  justify-content: center;
}

.profile__text--big {
  width: 240px;
}
</style>

<script>
export default {};
</script>
