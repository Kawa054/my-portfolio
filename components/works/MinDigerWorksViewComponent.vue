
<script setup lang="ts">
	import { gsap } from 'gsap'

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});

    onMounted(() => {
		gsap.set('.view-container', {
			opacity: 0,
			y: 15,
		});
		gsap.to(".view-container", {
			opacity: 1, 
			y: 0,
		})

        gsap.set('.timeline', { opacity: 0, y: 10, });
		gsap.to(".timeline", { opacity: 1, y: 0, stagger: 0.2,})
	});
</script>

<template>
    <div class="view-container">
        <div class="title">
            <span class="main-title"> MinDiger </span>
            <span class="sub-title"> 　- 制作期間 : 4, 5か月程度(大学3年生の夏頃) -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　大学生3年生の夏頃に何か大きなゲームを1つ作成してみたいと考え、ゲームクリエイター甲子園2022へ向けてイラスト担当2人と自分の3人でチームを組みゲーム開発を行いました。
                開発ではプログラム、ゲーム案の立案、開発進行の全般を担当しリーダーを担いました。
                開発自体は学生メンバーということもあり予定等が重なり、コンテストの締め切りには間に合わなくなり未完成にはなりました。
                趣味的な範囲の緩いチーム開発経験ではありましたが、リーダーとしての責任を再確認し成長できた経験でした。
                <br><br>
                現在記載中...
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
	.view-container {
        width: 100%;
        height: 70vh;
        position: relative;
        padding-top: 22px;
        padding-left: 30px;
        justify-content:space-between;
        .title{
            width: 42%;
            padding-bottom: 5px;
            padding-left: 10px;
            border-bottom:3px solid #00FFFF;
            border-color:#000;
            border-width:2px;
            .main-title{
                font-size: 36px;
                color: #000;
            }
            .sub-title{
                font-size: 16px;
                color: #000;
            }
        }
        .content{
            width: 87%;
            margin: 3%;
            .content-eq1{
                margin: 1%;
            }
        }
    }
</style>