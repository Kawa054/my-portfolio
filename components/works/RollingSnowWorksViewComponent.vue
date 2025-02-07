
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
            <span class="main-title"> RollingSnow (Game) </span>
            <span class="sub-title"> 　　- 制作期間 : 1週間程(高専2年次) -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　当時まだ電算部でなく、「ゲーム制作同好会」という名前だった高専の同好会で、突発的に「Unity インターハイ」というものに参加してみよう！となりました。
                この頃はProcessingやJavaでゲームを作っており3Dゲームは作ったことがありませんでした。
                また、コンテストまで一週間くらいしかないという状況でしたが、できるだけやれるとこまで作ってみようということで作成しました。
                (今考えると一週間でUnity勉強して3Dゲーム作ったの普通にヤバい...？)
            </div>
            <div class="content-img1">
                <NuxtImg src="/works/rs.png" alt="image" quality="90" sizes="md:100% lg:760px" loading="lazy"/>
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
            width: 50%;
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
            .content-img1{
                text-align: center;
                margin: 2%;
            }
        }
    }
</style>