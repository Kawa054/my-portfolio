
<script setup>
	import { gsap } from 'gsap'

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});

    onMounted(() => {
		gsap.set('.content1', { opacity: 0, y: 15, });
		gsap.to(".content1", { opacity: 1, y: 0, delay: 0.0, })
		gsap.set('.content2', { opacity: 0, y: 15, });
		gsap.to(".content2", { opacity: 1, y: 0, delay: 0.2, })
		gsap.set('.content3', { opacity: 0, y: 15, });
		gsap.to(".content3", { opacity: 1, y: 0, delay: 0.4, })
		gsap.set('.hibbies-description', { opacity: 0, y: 15, });
		gsap.to(".hibbies-description", { opacity: 1, y: 0, delay: 0.2, })
	});
</script>

<template>
    <div class="view-container">
		<div class="hibbies-content content1">
			<h1 class="hibbies-title"> 音楽鑑賞 </h1>
			<div class="hibbies-separator"></div>
			<div class="hibbies-description">
				　単に気分転換で音楽を聴くだけでなく、歌詞の中にある世界観や価値観を自身のものと照らし合わせ、想像した世界に足を運ぶことが好きです。
				音楽を深く聴くことは、普段感じないことや考えたこともない物に世界に触れることができるため、物事をより多角的に見れるようになる魅力があると考えています。<br>
				　主に米津玄師さんの曲が好きで、他にもジャンルを問わず、ヨルシカ、King Gnu、Mrs. GREEN APPLE、Vaundy...など様々なバンドの曲やボーカロイド曲も聴いています。
			</div>
		</div>
		<div class="hibbies-content content2">
			<h1 class="hibbies-title"> ゲーム </h1>
			<div class="hibbies-separator"></div>
			<div class="hibbies-description">
				　小さい頃から人と喜びを共有できるゲームが好きで、熱中すると一日丸ごとやることもありました。
				高専からはPvP系のゲームにハマり、ゲーム内のランキング上位を目指して自分のプレイやチームの雰囲気、連携などを反省・改善していく習慣がつき、今ではゲーム以外でも成長したいことがあるときの成長方法の基盤になっています。
				具体的には、Splatoon2ではあるルールで上位300位以内、Apex Legendsでは上位1%(マスター)、Valorantでも上位0.1%(イモータル3)といったランクに到達することが出来ました。
			</div>
		</div>
		<div class="hibbies-content content3">
			<h1 class="hibbies-title"> 映画・動画鑑賞 </h1>
			<div class="hibbies-separator"></div>
			<div class="hibbies-description">
				　音楽鑑賞と同様に、価値観に触れることが出来る映画や動画も好きで、他にもYoutube等での解説動画や配信なども好きです。<br>
				　最近では特にe-sportsの試合観戦にハマっており、積み上げた努力と勝ちたいという思いのぶつかり合いやそれから生まれる高度な戦術などを見て感動を友人と共有しています。
				また、選手のプレーの意図やチームの戦略を考えることも面白く、「成功」の再現確率を各々がどう上げているかなどを分析しています。この趣味を通じて、プロの仕事に対する姿勢から学ぶことが多くありました。
			 </div>
		</div>
    </div>
</template>

<style lang="scss" scoped>
	.view-container {
        width: 100%;
		height: auto;
        position: relative;
		display: flex;
        justify-content:space-evenly;
		.hibbies-content{
			width: 70%;
			margin-right: 3%;
			margin-left: 3%;
			h1 {
				text-align: center;
			}
			.hibbies-separator {
				width: 100%;
				margin-top: -20px;
				margin-bottom: 20px;
				border-bottom: 4px solid #42a30a4d;
			}
			.hibbies-description{
				width: 94%;
				margin-right: 4%;
				margin-left: 6%;
				height: 60vh;
			}
		}
		.content1 {

		}
		.content2 {

		}
		.content3 {

		}
    }
</style>