<template>
	<div>
		<div class="container">
			<!-- ウィンドウタイトル -->
			<Head>
				<Title>Ichikawa-Portfolio</Title>
			</Head>

			<!-- ページトップ -->
			<div class="top_container">

				<!-- ページタイトル部分 -->
				<div class="title">
					<p class="title_main">
						Portfolio
					</p>
					<p class="title_sub">
						Ryutaro Ichikawa
					</p>
				</div>

				<!-- キャンバス部分 -->
				<div class="page_canvas">
					<component :is="canvas[currentCanvas]"></component>
				</div>
			</div>
			
			<!-- ヘッダー部分 -->
			<HeaderComponent @change-header-hover="recieve_hover_id"/>

			<!-- ページ下部 -->
			<div class="main">
				<slot></slot>
			</div>

			<!-- フッター -->
			<footer>
				<p class="footer">
					© 2025 Ryutaro Ichikawa / Some Icons by <a href="https://icons8.jp//"> Icons8 </a>
				</p>
			</footer>

		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import HomeCanvasComponent from "~/components/HomeCanvasComponent.vue";
	import AboutCanvasComponent from "~/components/AboutCanvasComponent.vue";
	import WorksCanvasComponent from "~/components/WorksCanvasComponent.vue";
	import ReserchCanvasComponent from "~/components/ReserchCanvasComponent.vue";
	import ContactCanvasComponent from "~/components/ContactCanvasComponent.vue";
	import HeaderComponent from "~/components/HeaderComponent.vue";

	const currentCanvas = ref("HomeCanvasComponent");

	const recieve_hover_id = (data) => {
	const str = ["HomeCanvasComponent", "AboutCanvasComponent", "WorksCanvasComponent", "ReserchCanvasComponent", "ContactCanvasComponent"]
		currentCanvas.value = ref(str[data]).value;
	};

	const canvas = {
		HomeCanvasComponent,
		AboutCanvasComponent,
		WorksCanvasComponent,
		ReserchCanvasComponent,
		ContactCanvasComponent
	}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
	.container {
		.top_container {
			background-color: #000;
			text-align: center;
			position: relative;
			top: 0;
			left: 0;
			width: 100%;
			height: 87vh;
			overflow: hidden;
			.page_canvas {
				width: 128%;
				height: 142%;
			}
			.title {
				position: absolute;
				z-index: 20;
				width: 100%;
				left: -25%;
				text-decoration-color: #fff;
				pointer-events: none;
				.title_main {
					color: #000;
					-webkit-text-stroke-width: 1px;
					-webkit-text-stroke-color: #fff;
					font-family: "Dancing Script", serif;
					font-size: 9vw;
					font-weight: 500;
					font-style: normal;
					position: relative;
				}
				.title_sub {
					color: #fff;
					font-family: "Dancing Script", serif;
					font-size: 3.7vw;
					font-weight: 500;
					font-style: normal;
					position: relative;
					top:-10vh;
				}
			}
		}
		footer {
			display: flex;
			justify-content: center;
			padding: 3px;
			background-color: #000000;
			color: #ffffff;
			& a {
				color: #ffffff;
				text-decoration: underline;
			}
		}
	}
</style>