<template>
  <div>
    <section class="container header column">
      <div class="header__title">QUERO ESTÁGIO - NOVA VAGA</div>
    </section>

    <section class="container center column">
      <div class="item2 justify-content-center">
        <div style="margin:20px">
          <form method="post">
            <label>Quantidade</label>
            <input class="w3-input" type="text" /><br /><br />
            <label>Sobre a Vaga</label>
            <input class="w3-input" type="text" />
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.header {
  align-items: stretch;
}

.center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
}

.column {
  flex-direction: column;
}

.header__title {
  flex: 1;
  padding: 17px 15px;
  background: #05869b;
  color: #ffffff;
  text-align: left;
  font-size: 1em;
  font-family: Roboto;
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
  font-size: 14px;
  line-height: 16px;

  color: rgba(0, 0, 0, 0.62);
}

.header__title:first-child {
  padding-top: 20px;
}

.header__title {
  flex: 0;
  padding: 10px;
}
</style>

<script>
export default {};
</script>
