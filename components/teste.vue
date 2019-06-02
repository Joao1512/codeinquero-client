<template>
  <div class="content">
    <div class="cards_row">
      <div class="card">
        <img class="img" src="~/assets/unip1.png">
      </div>
      <div class="card">
        <div class="star_row">
          <img class="star" src="~/assets/star.png">
          <img class="star" src="~/assets/star.png">
          <img class="star" src="~/assets/star.png">
          <img class="star" src="~/assets/star_empty.png">
          <div class="nota">   4.3</div>
        </div>
        <div class="n_avaliacoes">8.632 avaliações</div>
      </div>
    </div>
      <div class="container">
        <div class="card-full">
            <img class="calendar" src="~/assets/calendar.png">
            <div style="color: #7B7B7B;font-family: Roboto;font-style: normal;font-weight: normal;font-size: 14px;line-height: 16px;margin-left:50px;margin-top:-32px;margin-bottom:30px;"> 2º semestre de 2019</div>
        </div>
        <div class="card-full">
          <img class="calendar" src="~/assets/school.png">
          <div style="color: #7B7B7B;font-family: Roboto;font-style: normal;font-weight: normal;font-size: 14px;line-height: 16px;margin-left:50px;margin-top:-32px;margin-bottom:30px;"> Asa Sul - Brasília</div>
        </div>

        <div class="card-full-large">
          <div class="item-card-title">Ciência da Computação</div>
          <div class="item-card-title">Bacharelado (graduação)</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "teste"
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  .content {
    font-family: Roboto;
    width: 100%;
    height:518px;
    background-color:#000000;
  }
  .cards_row {
    
    display: flex;
    flex-direction: row;
    align-content: center;

  }
  .card{
    border-radius:10px;
    margin-top: 32px;
    margin-left:21px;
    background-color:white;
    min-width: 155px;

  }
    .card-full{
    border-radius:10px;
    margin-top: 32px;
    margin-left:21px;
    background-color:white;
    min-width: 155px;
    min-height:40px;
  }
    .card-full-large{
    display:flex;
    flex-direction: column;
    border-radius:10px;
    margin-top: 32px;
    margin-left:21px;
    background-color:white;
    min-width: 155px;
    min-height:457px;
  }
  .img{
    margin-top:18px;
    margin-left:13px;
    margin-right:20px;
    margin-bottom:18px;
    width: 130px;
    height: 42.37px;
  }
  .star_row{
    margin-left:30px;
    margin-top:23px;
    display: flex;
    flex-direction: row;
  }
  .star{
    width:15px;
    height:15px;
  }
  .nota{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .n_avaliacoes{
    margin-top:8px;
    margin-left:30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #7B7B7B;
  }
  .item-card-title{
    padding:17px 0 0 10px;
    margin-left:10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: rgba(0, 0, 0, 0.62);
  }
  .container{
    max-width: 360px;
  }
  .calendar{
    width: 20px;
    height: 20px;
    margin-left: 14px;
    margin-top: 12px;
    margin-bottom:12px;
  }
</style>
