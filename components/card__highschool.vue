<template>
    <div class="card__wrapper">
      <img class="logo__facul" src="~/assets/logo_facul.png">
      <div class="line__divider"></div>
      <p class="title__facul">Unip</p>
      <div class="medal">
        <img class="medal__icon" src="https://img.icons8.com/cotton/50/000000/olympic-medal-silver.png">
        <p class="text__medal">8623 avaliações de alunos</p>
      </div>
      <div class="line__divider"></div>
      <div class="bolsas__ate"><p>Bolsas de até <font color="#10C979">80%</font></p></div>
      <div class="a_partir"><p>A partir de <font color="#10C979">R$ 137</font><font size="2" color="#10C979">/mês</font></p></div>
      <router-link v-bind:to="'detail_bolsa'"><button class="detalhes__bolsa">Ver detalhes da bolsa</button></router-link>
    </div>
</template>

<script>
    export default {
        name: "card__highschool"
    }
</script>

<style scoped>
  .card__wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    width: 300px;
    height: 390px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  .logo__facul {
    margin-top: 20px;
    width: 150px;
    height: 63px;
  }
  .line__divider {
    width: 80%;
    border: 0.5px solid #C1C1C1;
    margin: 20px auto;
  }
  .title__facul {
    margin-top: 0;
    font-family: Roboto;
    font-style: normal;
    text-transform: uppercase;
    color: #4f4f4f;
  }
  .medal {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .medal__icon {
    width: 20px;
    height: 20px;
  }
  .text__medal {
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    color: #888888;
  }
  .bolsas__ate {
    display: flex;
    flex-direction: row;
    font-family: Roboto;
    font-style: normal;
    color: #888888;
  }
  .a_partir {
    margin-top: -25px;
    display: flex;
    flex-direction: row;
    font-family: Roboto;
    font-style: normal;
    color: #888888;
  }

  .detalhes__bolsa {
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #C28A1B;
    box-sizing: border-box;
    border-radius: 10px;
    width: 250px;
    height: 60px;
    font-family: Roboto;
    font-style: normal;
    color: #C28A1B;
  }
</style>
