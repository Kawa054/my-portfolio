<script setup>
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	import DynAboutViewComponent from "~/components/reserch/DynAboutViewComponent.vue";
	import KamTheoremViewComponent from "~/components/reserch/KamTheoremViewComponent.vue";
	import OrigamiAboutViewComponent from '~/components/reserch/OrigamiAboutViewComponent.vue';
	import ReserchResultViewComponent from "~/components/reserch/ReserchResultViewComponent.vue";

	gsap.registerPlugin(ScrollTrigger); //Nuxt3でのgsapでscrollTrigger使うには必要らしい

	const type = ref(0); //Profile(0)かskills(1)かhobbies(2)か

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});

	onMounted(() => {
		//アニメーション設定
		gsap.set('.nav-container', {
			opacity: 0,
			y: 20, //下から出てくる初期位置
		});
		gsap.to(".nav-container", {
			opacity: 1, 
			y: 0, 
			scrollTrigger: {
				trigger: '.nav-container',
				start: 'top center+=30%',
				end: 'bottom center-=100px',
				toggleActions: 'play none none reverse', //上に戻った時再度アニメーションするか
				markers: false, //マーカー(デバッグ用)
			}
		})
		
		gsap.set('.content', {
			opacity: 0,
			y: 10, //下から出てくる初期位置
		});
		gsap.to(".content", {
			opacity: 1, 
			y: 0, 
			delay: 0.3, //遅延
			scrollTrigger: {
				trigger: '.content',
				start: 'top center+=30%',
				end: 'bottom center-=100px',
				toggleActions: 'play none none reverse', //上に戻った時再度アニメーションするか
				markers: false, //マーカー(デバッグ用)
			}
		})
	});
</script>

<template>
	<NuxtLayout name="default">
		<div class="background">
			<!-- メインページ -->
			<div class="container">
				<ul class="nav-container">
					<li class="nav-item" @click="type = 0">
						<div class="item">
							<div v-if="type === 0">・</div>
							<div v-else>　</div>
							<span> 力学系とは </span>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 1">
						<div class="item">
							<div v-if="type === 1">・</div>
							<div v-else>　</div>
							<span> 折り紙と力学系 </span>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 2">
						<div class="item">
							<div v-if="type === 2">・</div>
							<div v-else>　</div>
							<span> KAM定理 </span>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 3">
						<div class="item">
							<div v-if="type === 3">・</div>
							<div v-else>　</div>
							<span> 研究結果 </span>
						</div>
						<div class="nav-item-separator"></div>
					</li>
				</ul>
				<div class="content">
					<DynAboutViewComponent v-if="type == 0" />
					<OrigamiAboutViewComponent v-else-if="type == 1"/>
					<KamTheoremViewComponent v-else-if="type == 2"/>
					<ReserchResultViewComponent v-else/>
				</div>	
			</div>
		</div>
	</NuxtLayout>
</template>

<style lang="scss" scoped>
	.container {
		font-size: 20px;
		height: 100%;
		padding-top: 3%;
		padding-bottom: 3%;
		display: flex;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.88);
		.nav-container {
			width: 15%;
			display: flex;
			flex-flow: column;
			margin-right: 2%;
			border-right: 1px solid #000000;
			.nav-item {
				width:100%;
				font-size: 30px;
				margin-top: 20px;
				padding-bottom: 20px;
				.item{	
					display: flex;
					margin-bottom: 32px;
				}
				.nav-item-separator {
					width:100%;
					border-bottom: 1px solid #000000;
				}
			}
			.nav-item:hover {
				.item{
					color: #ee7800;
					transform: scale(1.1, 1.1);
					transition: 0.2s;
				}
			}
		}
		.content {
			position: relative;
			width: 70%;
			min-height: 76vh;
			height: auto;
			background-color: rgba(255,255,255, 0.8);
			border-radius: 30px;
		}
		& li {
			list-style: none;
		}
	}
	//背景透過用
	.background {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url(assets/background2.jpg);
		background-size: auto;
	}
</style>