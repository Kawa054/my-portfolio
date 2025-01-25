<template>
	<NuxtLayout name="default">
		<div class="background">
			<!-- メインページ -->
			<div class="container">
				<div class="text-container" data-title="WELCOME TO MY PORTFOLIO SITE!">
					<div class="text">
						はじめまして、市川 龍太郎 と申します。<br>
						この度はポートフォリオサイトに足を運んでいただき、誠にありがとうございます。<br>
						このサイトは、より自分のことを知っていただけるようにと思い作成しました。<br>
						<br>
						私は小さい頃から「面白そう」、「楽しそう」と感じることに対し、心の赴くままに挑戦してきました。<br>
						学生時代ではよく夜遅くまで友人とものづくりをし、こだわりたい部分を作るためにずっと調べものをし、トライアルアンドエラーを繰り返し、
						様々なものを作りました。そのため、ものづくりに対する集中力と忍耐力は自信があります。
						また、高専時代では実践的な経験を多く積み、大学では数学や物理学、情報学などの基礎理論を深く学び、これから先の技術の変化についていける下地を
						身につけています。
						<br>
						<br>
						これから先、人生の多くを占める「仕事」を、自分が情熱を持って生きがいを感じ、人に喜んでもらい自分も喜ぶような仕事にしていきたいと考えています。
						また、常に向上心と情熱の原点を忘れることなく、吸収できるものは全て身に付け、試行錯誤し、様々なことに挑戦していきたいと考えています。
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	
	gsap.registerPlugin(ScrollTrigger); //Nuxt3でのgsapでscrollTrigger使うには必要らしい

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});
	onMounted(() => {
		//アニメーション設定
		gsap.set('.text-container', {
			opacity: 0,
			y: 20, //下から出てくる初期位置
		});
		gsap.to(".text-container", {
			opacity: 1, 
			y: 0, 
			scrollTrigger: {
				trigger: '.text-container',
				start: 'top center+=10%',
				end: 'bottom center-=100px',
				toggleActions: 'play none none reverse', //上に戻った時再度アニメーションするか
				markers: false, //マーカー(デバッグ用)
			}
		})
		//テキストアニメーション
		gsap.set('.text', {
			opacity: 0,
			y: 10, //下から出てくる初期位置
		});
		gsap.to(".text", {
			opacity: 1, 
			y: 0, 
			delay: 0.4, //遅延
			scrollTrigger: {
				trigger: '.text',
				start: 'top center+=10%',
				end: 'bottom center-=100px',
				toggleActions: 'play none none reverse', //上に戻った時再度アニメーションするか
				markers: false, //マーカー(デバッグ用)
			}
		})
	});
</script>

<style lang="scss" scoped>
	.container {
		font-size: 20px;
		height: 100%;
		padding-top: 6%;
		padding-bottom: 6%;
		display: flex;
		justify-content: center;
		align-items:center;
		background-color: rgba(255,255,255,0.85);
	}
	//背景透過用
	.background {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url(assets/background0.jpg);
		background-size: auto;
	}
	.text-container {
		position: relative;
		width: 60%;
		height: auto;
		padding: 2.5rem 2rem 1rem;
		background-color: #f1f1f1;
		outline: 2px solid #333;
		outline-offset: -0.5rem;
		box-shadow: 5px 5px 0 #333;
		border-radius: 10px;
		border: 3px solid #333;
		margin-bottom: auto;
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
