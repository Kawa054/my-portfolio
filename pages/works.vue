<script setup>
	definePageMeta({
		layout: false,
		scrollToTop: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<div class="background">
				<!-- メインページ -->
				<div class="container">
					作品等
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>

<style lang="scss" scoped>
	.container {
		font-size: 20px;
		height: 72vh;
		padding-top: 3%;
		padding-bottom: 3%;
		display: flex;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.76);
	}
	//背景透過用
	.background {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url(assets/background3.jpg);
		background-size: auto;
	}
</style>