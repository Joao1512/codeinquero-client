<template>
<div>
      <section class="container stretch column">
	      <div class="item">QUERO ESTÁGIO - STATUS DO ALUNO</div>
      </section>

      <section class="container center column">
        <img  src="~/assets/user.png" style="height:100px;width:100px;padding:30px">
      </section>

      <section class="container center column title1">
          <p> José Carlos</p> 
      </section>
      <section class="container">
        <div class="item2 row center container justify-content-center" >
          <p>Média: 8,6</p> 
        </div>
        <div class="item2 row center container justify-content-center" >
          <p>Status: Apto</p> 
          </div>
      </section>
      <section class="container">
        <div  style="display:flex" class=" item2 justify-content-center">
          <p class="row center"> Solicitar Estágio</p> 
        </div>
      </section>
</div>
</template>

<script>
  export default {
    name: "statusalunocomponent"
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.title1{
  font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;


color: rgba(0, 0, 0, 0.53);
}
.stretch {
	align-items: stretch;
}

.flex-start {
	align-items: flex-start;
}

.flex-end {
	align-items: flex-end;
}

.center {
	align-items: center;
}
.justify-content-center{
  justify-content:center;
}

.baseline {
	align-items: baseline;
}

/* Flex Container */
.container {
  width: 100%;
	margin: 0 auto;
	display: flex;
}

.column {
	flex-direction: column;
}

.row{
  flex-direction:row;
}

/* Flex Item */
.item {
	flex: 1;
	padding: 17px 15px;
  background: #05869B;
  color: #FFFFFF;
	text-align: left;
	font-size: 1em;
  font-family: Roboto;
}
.item2 {
	flex: 1;
	padding: 1px 15px;
  background: #05869B;
  color: #FFFFFF;
  border-radius:10px;
  margin:16px;
	text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
}
.item:first-child {
	padding-top: 20px;
}

.alinhamento-central {
	height: 400px;
	justify-content: center;
	align-items: center;
}

.alinhamento-central .item {
	flex: 0;
	padding: 10px;
}
.nowrap {
	flex-wrap: nowrap;
}
  
</style>




