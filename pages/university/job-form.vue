<template>
  <div>
    <section class="container center column">
      <div class="item2 justify-content-center">
        <p class="nova__vaga">Anuncie uma nova vaga</p>
        <div class="divider"></div>
        <div style="margin:20px">
          <form method="post">
            <p class="label_input">Quantidade</p>
            <input class="w3-input input" type="text"/><br/><br/>
            <p class="label_input">Sobre a Vaga</p>
            <textarea class="w3-input input teste" type="text"/>
            <p class="label_input curso">Curso</p>
            <select class="w3-input inputed">
              <option selected disabled>Escolha uma opção</option>
              <option value="ADS">Análise de Desenvolvimento</option>
              <option value="DESIGN">Designer Gráfico</option>
            </select>
            <p class="label_input">Duração</p>
            <input class="w3-input input" type="text"/>
            <div class="anunciar">
              <p>Anunciar</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

  .center {
    align-items: center;
  }

  .justify-content-center {
    justify-content: center;
  }

  .anunciar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    background: #0A7447;
    border-radius: 10px;
    width: 200px;
    height: 40px;
  }

  .anunciar p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  .teste {
    padding-top: 5px;
  }

  .label_input {
    text-align: center;
    margin: 15px auto;
  }

  .column {
    flex-direction: column;
  }

  .divider {
    margin: 0 auto;
    width: 250px;
    border: 1px solid #C1C1C1;
  }

  .input {
    width: 220px;
    border-radius: 5px;
    height: 30px;
    font-size: 10px;
    padding-left: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.44);
  }

  .inputed {
    width: 233px;
    border-radius: 5px;
    background-color: #ffffff;
    margin-bottom: 15px;
    height: 35px;
    padding-left: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.44);
  }
  .curso {
    margin-top: 10px;
  }

  .item2 {
    flex: 1;
    padding: 1px 15px;
    background: #ffffff;
    color: #ffffff;
    border-radius: 10px;
    margin: 20px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.62);
    border: 0.5px solid rgba(0, 0, 0, 0.44);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 10px;
  }

  .nova__vaga {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    margin: 30px auto 30px auto;
  }

</style>

<script>
  export default {};
</script>
