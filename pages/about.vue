<script>
	definePageMeta({
		layout: false,
		scrollToTop: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<!-- メインページ -->
			<div class="container">
				<ul class="nav-container">
					<li class="nav-item">
						<span class="item">PROFILE</span>
					</li>
					<li class="nav-item">
						<span class="item">SKILLS</span>
					</li>
					<li class="nav-item">
						<span class="item">HOBBY</span>
					</li>
				</ul>
				<div class="content">
				</div>	
			</div>
		</NuxtLayout>
	</div>
</template>

<style lang="scss" scoped>
	.container {
		font-size: 20px;
		color: #c514dd;
		height: 87vh;
		display: flex;
		justify-content: center;
		align-items:center;
		
	}
	//背景透過用
	.container::after {
		content: "";
		position: absolute;
		opacity: 0.14;
		left: 0;
		width: 100%;
		height: 87vh;
		background-image: url(assets/background4.jpg);
		background-size: auto;
		background-position: left;
		z-index: -1;
	}
	.nav-container{
		width:10%;
		height:88%;
		display:flex;
		flex-flow: column;
		background-color: rgba(255,255,255,0.2);
		.nav-item{
			height:6%;
			width:70%;
			font-size: 24px;
			background-color: rgba(255,255,255,0.2);
			box-shadow: 3px 3px 0 rgba(255, 4, 0, 1);
			color: rgba(255, 4, 0, 1);
			span.item {
				margin:10%;
			}
		}
		& li {
			list-style:none;
			padding: 5px;
			margin: 10%;
		}
	}
	.content{
		width:70%;
		height:88%;
		background-color: #f1f1f1;
		outline: 2px solid #1d004c;
		outline-offset: -0.5rem;
		box-shadow: 1px 1px 0 #000;
		border-radius: 10px;
		border: 3px solid #1d004c;
	}
</style>