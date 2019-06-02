<template>
  <div class="page">
    <div class="profile">
      <p class="content__title">Bolsas de Estudo com Estágio Garantido</p>
      <div class="content__cards">
        <div class="content__card-wrapper">
          <UniversityCard class="content__university-card"></UniversityCard>
        </div>
        <div class="content__card-wrapper">
          <UniversityCard class="content__university-card"></UniversityCard>
        </div>
        <div class="content__card-wrapper">
          <UniversityCard class="content__university-card"></UniversityCard>
        </div>
        <div class="content__card-wrapper">
          <UniversityCard class="content__university-card"></UniversityCard>
        </div>
        <div class="content__card-wrapper">
          <UniversityCard class="content__university-card"></UniversityCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
  }

  .content__cards {
    display: flex;
    flex-direction: column;
  }

  .content__card-wrapper {
    margin: 30px auto;
  }

  .content__title {
    color: #de9e1f;
    font-weight: 400;
    max-width: 250px;
    margin: 30px auto 0 auto;
    text-align: center;
    font-style: normal;
    text-transform: uppercase;
    font-family: Roboto, serif;
  }

  @media only screen and (min-width: 768px) {
    .content__cards {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .content__card-wrapper {
      margin-bottom: 25px;
      flex: 1 0 21%;
    }

    .content__university-card {
      max-width: 330px;
    }
  }

</style>

<script>
  import UniversityCard from "~/components/UniversityCard.vue";

  export default {
    components: {
      UniversityCard
    }
  };
</script>
