<script setup>
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	import PortfolioWorksViewComponent from "~/components/works/PortfolioWorksViewComponent.vue";
	import MinDigerWorksViewComponent from "~/components/works/MinDigerWorksViewComponent.vue";
	import RoboconWorksViewComponent from "~/components/works/RoboconWorksViewComponent.vue";
	import InternWorksViewComponent from "~/components/works/InternWorksViewComponent.vue";
	import CCCeBWorksViewComponent from "~/components/works/CCCeBWorksViewComponent.vue";
	import RollingSnowWorksViewComponent from "~/components/works/RollingSnowWorksViewComponent.vue";
	import OthersWorksViewComponent from "~/components/works/OthersWorksViewComponent.vue";

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
							<NuxtImg class="item-img" src="/works/portfolio.png" alt="image" quality="70" sizes="sm:11vw md:12vw lg:13vw" loading="lazy"/>
							<div class="item-name"> portfolio(Website) </div>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 1">
						<div class="item">
							<NuxtImg class="item-img" src="/works/mindiger.png" alt="image" quality="70" sizes="sm:11vw md:12vw lg:13vw" loading="lazy"/>
							<div class="item-name"> MinDiger(Game) </div>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 2">
						<div class="item">
							<NuxtImg class="item-img" src="/works/robocon.png" alt="image" quality="70" sizes="sm:11vw md:12vw lg:13vw" loading="lazy"/>
							<div class="item-name"> NHK robot contest </div>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 3">
						<div class="item">
							<NuxtImg class="item-img" src="/works/procon.png" alt="image" quality="70" sizes="sm:11vw md:12vw lg:13vw" loading="lazy"/>
							<div class="item-name"> CCCeB(Programing Contest) </div>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 4">
						<div class="item">
							<NuxtImg class="item-img" src="/works/intern.png" alt="image" quality="70" sizes="sm:11vw md:12vw lg:13vw" loading="lazy"/>
							<div class="item-name"> Android App(Intern) </div>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 5">
						<div class="item">
							<NuxtImg class="item-img" src="/works/rs.png" alt="image" quality="70" sizes="sm:11vw md:12vw lg:13vw" loading="lazy"/>
							<div class="item-name"> Rolling Snow(Game) </div>
						</div>
						<div class="nav-item-separator"></div>
					</li>
					<li class="nav-item" @click="type = 6">
						<div class="item">
							<NuxtImg class="item-img" src="/works/others.png" alt="image" quality="70" sizes="sm:11vw md:12vw lg:13vw" loading="lazy"/>
							<div class="item-name"> others </div>
						</div>
						<div class="nav-item-separator"></div>
					</li>
				</ul>
				<div class="content">
					<PortfolioWorksViewComponent v-if="type == 0" />
					<MinDigerWorksViewComponent v-else-if="type == 1"/>
					<RoboconWorksViewComponent v-else-if="type == 2"/>
					<CCCeBWorksViewComponent v-else-if="type == 3"/>
					<InternWorksViewComponent v-else-if="type == 4"/>
					<RollingSnowWorksViewComponent v-else-if="type == 5"/>
					<OthersWorksViewComponent v-else/>
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
		background-color: rgba(255, 255, 255, 0.86);
		.nav-container {
			width: 15%;
			height: auto;
			display: flex;
			flex-flow: column;
			margin-right: 2%;
			border-right: 1px solid #000000;

			/* ナビゲーションのスクロール部分 */
			height: 70vh;
			overflow: hidden scroll;
			/*IE(Internet Explorer)・Microsoft Edgeへの対応*/
			-ms-overflow-style: none;
			/*Firefoxへの対応*/
			scrollbar-width: none;
			.nav-item {
				width:100%;
				font-size: 16px;
				padding-bottom: 20px;
				text-align: right;
				.item{	
					margin-right: 20px;
					margin-bottom: 7px;
					.item-img{
						filter: grayscale(100%);
					}
				}
				.nav-item-separator {
					width:100%;
				}
			}
			.nav-item:hover {
				.item{
					color: #ee7800;
					transform: scale(1.05, 1.05);
					transition: 0.2s;
					.item-img{
						filter: grayscale(0%);
						transition: 0.8s;
					}
				}
			}
		}

		/* ナビゲーションのスクロール部分 */
		 /*Google Chrome、Safariへの対応*/
		.nav-container::-webkit-scrollbar{
			display: none;
		}

		.content {
			position: relative;
			width: 70%;
			min-height: 76vh;
			height: auto;
			background-color: rgba(255,255,255, 0.82);
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
		background-image: url(assets/background3.jpg);
		background-size: auto;
	}
</style>