
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
            <span class="main-title"> Androidアプリ開発インターンシップ </span>
            <span class="sub-title"> 　　- 実施期間 : 高専4年次2週間 -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　高専４年時にSDNA株式会社様にてAndroidアプリ開発インターンシップへ参加しました。
                インターンシップでは、企業の提示した「車の中で使う携帯アプリ開発」という課題に対してメンバーは4人で、Kotlinを用い２週間ほどチームで開発を行い、実際の職場ではどういう流れで仕事が進んでいくかを経験しました。
                <br>
                　開発チームではリーダーを務め、要件定義、設計、開発、テスト、運用を全員で行う形で進め、各フェーズでチームの開発をまとめ、限られた期間の中でプロジェクトをどう進めるか、どういった技術を用いるかなどをチーム内で話し合い、Gitlabを用いてプロジェクトの管理なども行い完成まで指揮を取りました。
                <br>　
            </div>
            <NuxtImg src="/works/intern/intern5.png" alt="image" quality="90" sizes="md:100% lg:860px" loading="lazy"/>
            <NuxtImg src="/works/intern/intern6.png" alt="image" quality="100" sizes="md:100% lg:280px" loading="lazy"/>
            <div class="content_text1">
                <br>
                　開発中には、全員の開発を行いたい部分や得意な技術などを聞き、モチベーションを確認しつつそれぞれ仕事を割り振りました。
                途中で詰まることもありましたが、すぐに相談できるような環境を作り、最終的なプロダクトの発表も事前に準備した通り上手くいくことができました。
                <br>
                　自分の担当した「曲のBPM解析」のプログラム部分はかなりハードな内容でしたが、気合で最後まで実装することができ、社員の方に「チャレンジングなとこ攻めるな～」と言われた記憶があります。
                最終的に社員さんや人事の方に褒められたのは今でも嬉しい記憶です。
                <br><br>
                　個人的にはインターン中、毎日最後に行う「ふりかえり」と呼ばれる話し合いで信頼関係や今後の方針をしっかりと定めることができたことが一番チームとしてうまくいった要因だと感じました。
                下の画像は最終日の感想でKPT法を使ったものですが、このように毎日の業務の終了時に、ホワイトボードに自分たちが考えた「Keep」「Problem」「Try」の３つをまとめたもので、これを使って進捗や問題点などをその日の終わりに話しました。
                <br>
                　このインターンを通じ、リーダーとしてチームを纏めていく責任やチーム内でのコミュニケーションの重要性を理解しました。
                また、チームでは技術力の面でもリーダーだったため、率先して難しい内容や詰まりそうな部分を引き受けこなすことで全体を補う形でサポートする力も重要だと学びました。
            </div>
            <div class="content-img1">
                <NuxtImg src="/works/intern/intern0.jpg" alt="image" quality="90" sizes="md:100% lg:760px" loading="lazy"/>
                <NuxtImg src="/works/intern/intern1.png" alt="image" quality="100" sizes="md:100% lg:960px" loading="lazy"/>
                <NuxtImg src="/works/intern/intern2.png" alt="image" quality="100" sizes="md:100% lg:960px" loading="lazy"/>
                <NuxtImg src="/works/intern/intern3.png" alt="image" quality="100" sizes="md:100% lg:960px" loading="lazy"/>
                <NuxtImg src="/works/intern/intern4.png" alt="image" quality="100" sizes="md:100% lg:960px" loading="lazy"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
	.view-container {
        width: 100%;
        height: auto;
        position: relative;
        padding-top: 22px;
        padding-left: 30px;
        justify-content:space-between;
        .title{
            width: 70%;
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
            .content-img1{
                text-align: center;
                margin: 2%;
            }
        }
    }
</style>