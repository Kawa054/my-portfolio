<script setup>
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
				<div class="text-container" data-title="WELCOME TO MY PORTFOLIO SITE!">
					<div class="text">
						こんにちは、市川龍太郎と申します。<br>
						この度はポートフォリオサイトに足を運んでいただき、誠にありがとうございます。<br>
					</div>
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
		opacity: 0.15;
		left: 0;
		width: 100%;
		height: 87vh;
		background-image: url(assets/background0.jpg);
		background-size: auto;
		background-position: left;
		z-index: -1;
	}

	.text-container {
		position: relative;
		width: 60%;
		height: 80%;
		padding: 2.5rem 2rem 1rem;
		background-color: #f1f1f1;
		outline: 2px solid #333;
		outline-offset: -0.5rem;
		box-shadow: 5px 5px 0 #333;
		border-radius: 10px;
		border: 3px solid #333;
	}

	.text-container::before {
		position: absolute;
		font-weight: bold;
		top: 1rem;
		left: -10px;
		width: 102%;
		padding: 0.5rem 0;
		background-color: rgba(255, 4, 0, 0.7);
		color: white;
		text-align: center;
		content: attr(data-title);
	}

	.text {
		padding: 60px;
		color: #333;
		line-height: 1.5;
	}
</style>
