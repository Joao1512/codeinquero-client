<template>
	<div>
			<section class="container-title stretch column">
				<div class="item-title">Alunos Com Estágio Garantido</div>
			</section><br><br>
			<div class="container stretch column">
					<div class="item column center  container">
							<img  src="~/assets/user.png" style="height:50px;width:50px;">
							<div class="title1">José Carlos</div>
							<div class="title1 ">Status: Apto</div>
							<div class="title1 ">Escolha: Design</div>
					</div>
					<div class="item column center container">
							<img  src="~/assets/user.png" style="height:50px;width:50px;">
							<div class="title1">André Siva</div>
						<div class="title1 ">Status: Inapto</div>
					</div>
					<div class="item column center container">
							<img  src="~/assets/user.png" style="height:50px;width:50px;">
							<div class="title1">Mark Snow</div>
						<div class="title1 ">Status: Inapto</div>
					</div>
			</div>
	</div>

</template>

<script>
  export default {
    name: "alunoscomestagiocomponent"
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  
	.space{
		margin-top:165px;
	}
	.title1{
		font-family: Roboto;
	margin-top:4px;
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
		width: 80%;
		margin: 0 auto;
		display: flex;
	}
		.container-title {
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
		.item-title {
	flex: 1;
	padding: 17px 15px;
  background: #05869B;
  color: #FFFFFF;
	text-align: left;
	font-size: 1em;
  font-family: Roboto;
	}
	.item {
		flex: 1;
		margin-bottom:30px;
		border-radius:10px;
		padding: 17px 15px;
		background: #FFFFFF;
		color: black;
		text-align: left;
		font-size: 1em;
		font-family: Roboto;
		box-shadow: 2px 1px 4px 0px #00000063;
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
	.wrap{
		flex-wrap:wrap;
	}
</style>
