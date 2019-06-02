<template>
<div>
    <section class="container stretch column">
	    <div class="item">QUERO ESTÁGIO - NOVA VAGA</div>
    </section>

    <section class="container center column">
	    <div class="item2 justify-content-center">
            <div style="margin:20px">
                <form method="post">
                    <label>Quantidade</label>
                    <input class="w3-input" type="text"></input><br><br>
                     <label>Sobre a Vaga</label>
                    <input class="w3-input" type="text"></input>                   
                </form>
            </div>
        </div>
    </section>
</div>
</template>

<script>
  export default {
    name: "novavagacomponent"
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
.space{
  margin-top:165px;
}
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
  background: #FFFFFF;
  color: #FFFFFF;
  border-radius:10px;
  margin:20px;
	text-align: left;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: rgba(0, 0, 0, 0.62);


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




<script>
  export default {
    name: "mainempregadorcomponent"
  }
</script>



