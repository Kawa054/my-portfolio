
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
            <span class="main-title"> 高専プロコン </span>
            <span class="sub-title"> 　　- 制作期間 : 2か月程度～3カ月程度(高専4年次) -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　高専４年次において、第30回全国高等専門学校プログラミングコンテスト本選にて、教育支援を行うアプリケーション「<a href="https://kumamoto-nct.ac.jp/award/2019/10/20191017a/">CCCeB</a>」の開発を行い敢闘賞を受賞しました。
                開発チームではプログラム部分の担当を行い、ネットワーク関係の処理以外のほぼすべてのコードの作成を行い、会場では口頭で審査員・来場客等へのプレゼンを行いました。
                開発人数は５人ほどで、Githubを用いて共同開発を行いました。プロダクトの詳細は<a href="https://www.procon.gr.jp/wp-content/uploads//2019/10/df5dd5f98e2d4af3b822c6ad919b965e.pdf">こちら</a>の20pをご覧ください。
            </div> 
            <div class="content-img1">
                <NuxtImg src="/works/procon/pic1.png" alt="image" quality="80" sizes="md:100% lg:600px" loading="lazy"/>
            </div>
            <div class="content_text1">
                　高専プロコンに参加した経緯としては、当時部活(電算部)内で、「学校自体の外部へのコンテスト参加が著しく少ない傾向にあるため、この流れを改善していこう」という動きがありました。
                学校自体がチャレンジングな姿勢を持って欲しいと私も当時思っており、共感し部内で人を集めチームを組んでコンテストへ参加しました。部で担当できる先生を見つけて交渉したのはいい思い出です。
                <br><br>
                　開発ではプログラム班、プロジェクターの実装班(ラズパイ等)、サーバー班にチームを分け、チーム内で一番技術力もあったためプログラム班のリーダーを務めました(全体の立ち位置としては副リーダー)。
                <br>
                　当時初めて聞いた、「React Native (+Expo)」というものを使い開発を行いましたが、WEB系の開発に触れたことがなかったため普段書いていた C や Java のコードとかなり違い困惑しました。
                しかし、深夜まで調べてエラーと睨めっこしながら少しづつ開発の要領をつかみ、知らない技術でも調べてしっかり学ぶことで扱えるようになるんだという自信がつきました。
                このときの経験はかなり大きく、技術はあくまで技術であって、必要になればその時その時で身に付けることが大切だと感じました。
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