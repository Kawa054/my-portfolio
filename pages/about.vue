<script setup>
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	import ProfileViewComponent from "~/components/about/ProfileViewComponent.vue";
	import SkillsViewComponent from "~/components/about/SkillsViewComponent.vue";
	import HobbyViewComponent from "~/components/about/HobbyViewComponent.vue";

	gsap.registerPlugin(ScrollTrigger); //Nuxt3でのgsapでscrollTrigger使うには必要らしい

	const type = ref(0);

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
				start: 'top center+=10%',
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
				start: 'top center+=10%',
				end: 'bottom center-=100px',
				toggleActions: 'play none none reverse', //上に戻った時再度アニメーションするか
				markers: false, //マーカー(デバッグ用)
			}
		})
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<!-- メインページ -->
			<div class="container">
				<ul class="nav-container">
					<li class="nav-item" @click="type = 0">
						<span class="item">PROFILE</span>
					</li>
					<li class="nav-item" @click="type = 1">
						<span class="item">SKILLS</span>
					</li>
					<li class="nav-item" @click="type = 2">
						<span class="item">HOBBY</span>
					</li>
				</ul>
				<div class="content">
					<ProfileViewComponent v-if="type == 0" />
					<SkillsViewComponent v-else-if="type == 1"/>
					<HobbyViewComponent v-else/>
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
		width:12%;
		height:88%;
		display:flex;
		flex-flow: column;
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
		.nav-item:hover{
			background-color: rgba(176, 252, 248, 0.8);
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
		border-radius: 10px;
		border: 3px solid #1d004c;
	}
</style>