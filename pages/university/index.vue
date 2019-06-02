<template>
  <div>
    <div class="header">
      <p class="header__title">QUERO ESTÁGIO - EMPREGADOR</p>
    </div>

    <div class="profile">
      <img class="profile__image" src="~/assets/user.png" alt="User"/>

      <p class="profile__name">NOME DO EMPREGADOR</p>

      <div class="profile__info">
        <div class="profile__text-wrapper">
          <nuxt-link to="/university/job-form" class="profile__text">
            Nova Vaga
            <img
              class="profile__text--image"
              src="~/assets/plus.png"
              alt="Image"
            />
          </nuxt-link>
        </div>

        <div class="profile__text-wrapper">
          <nuxt-link to="/university/student-list" class="profile__text">
            Candidatos: 0
          </nuxt-link>
        </div>

        <div class="profile__text-wrapper">
          <nuxt-link
            to="/university/job-list"
            class="profile__text profile__text--big"
          >
            Vagas Anunciadas
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

  .profile__text--image {
    height: 23px;
    width: 23px;
    margin-left: 8px;
  }

  .profile__text--big {
    width: 240px;
  }

</style>

<script>
  export default {};
</script>
