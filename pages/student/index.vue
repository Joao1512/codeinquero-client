<template>
  <div>
    <div class="header">
      <p class="header__title">QUERO ESTÁGIO - STATUS DO ALUNO</p>
    </div>

    <div class="profile">
      <img class="profile__image" src="~/assets/user.png" alt="User" />

      <p class="profile__name">Renan Ferreira</p>

      <div class="profile__info">
        <div class="profile__text-wrapper">
          <p class="profile__text profile__text--big">
            Status: Apto a Estagiar
          </p>
        </div>

        <div class="profile-text2-wrapper">
          <p class="profile-text2">Média: 9,1</p>
        </div>

        <div class="profile-text2-wrapper">
          <p class="profile-text2">Frequência: 93%</p>
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
  margin: 20px auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 370px;
  height: 420px;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.44);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px;
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

.profile-text2-wrapper {
  flex: 1 0 50%;
}

.profile-text2 {
  text-decoration: none;
  width: 120px;
  display: flex;
  color: #ffffff;
  margin: 10px auto;
  font-weight: bold;
  height: 40px;
  text-align: center;
  line-height: 23px;
  padding: 10px 15px;
  background: #05869b;
  border-radius: 10px;
  justify-content: center;
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
