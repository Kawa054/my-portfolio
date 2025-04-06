
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
            <span class="main-title"> ポートフォリオサイト </span>
            <span class="sub-title"> 　　- 制作期間 : 3週間程 -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　WEB系開発アルバイトでVue3の開発経験があったため、学習コストの少ないVue3とNuxt.jsを用いて当ポートフォリオサイトを作成しました。
                デプロイには、githubのリポジトリと連携することで自動でCI/CDパイプラインを作ってくれるNetlifyを使用しました。
                本当は間にテストや、検証用リポジトリを作った方がいいですが個人開発なので一旦ナシで作成。
            </div> 
            <div class="content-img">
                <NuxtImg src="/works/portfolio_img1.png" alt="image" quality="80" sizes="sm:53vw md:55vw lg:57vw" loading="lazy"/>
            </div>
            <div class="content_text2">
                　ホームページの最初には、見て楽しめるようにThree.js（実際にはVueのコンポーネントとして使用できる<a href="https://tresjs.org/">Tres.js</a>）を用いた3Dのキャンバスを実装しました。
                こちらのキャンバスではマウスのホイールやドラッグによりカメラを操作することが出来ます。
                他にも<a href="https://gsap.com/">gsap</a>などを使いサイトの表示に動きを付けたり、<a href="https://www.mathjax.org/">MathJax</a>を用いて数式なども描画できるようにしました。
                <br>
                　現在はレスポンシブデザインの実装とキャンバス内の各描画の実装、描画スピードなどの改善を行っています。画像がたまに読み込まれないことがありますが、ページを再ロードすると治ります。(対応中)
                <br>
                <br>
                　・2025/04/06 : 一部内容や細かい部分、挙動をアップデート。<br>
                　・2025/04/05 : ノートPCで見やすいように一部レスポンシブ対応を行いました。<br>
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
            width: 45%;
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
            .content-img{
                margin: 2%;
                text-align: center;
            }
        }
    }
</style>