
<script setup lang="ts">
	import { gsap } from 'gsap';
    
    const videoId = ref<string>("fPgGkokEfFU");
	
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
                　当時まだ電算部でなく、「ゲーム制作同好会」という名前だった高専の同好会で、「Unity インターハイ」というコンテストに参加してみよう！となりました。
                この頃はProcessingやJavaでゲームを作っており3Dゲームは作ったことがありませんでした。
                また、コンテストまで一週間くらいしかないという状況でしたが、やれるとこまで作ってみようということで作成しました。
            </div>
            <div class="content-img1">
                <NuxtImg src="/works/rs.png" alt="image" quality="80" sizes="sm:47vw md:49vw lg:51vw" loading="lazy"/>
            </div>
            <div class="content_text1">
                　ゲームのコンセプトとしては、雪玉を操作しより早くゴールを目指すタイムアタックのゲームとして作成しました。
                雪玉が転がれば転がるほど大きくなっていき、それに伴い操作が難しくなります。
                また、運動エネルギーも大きくなるため、壁に当たったときの反動も大きくなるといった仕様にしました。
                なお雪玉が壊れるとゲームオーバーになります。以下はコンテスト時の簡単なプレイ映像です(クリックするとYoutubeが再生されます)。
            </div>
            <div class="content-youtube">
                <ScriptYouTubePlayer :video-id/>
            </div>
            <div class="content_text1">
                　このゲームは、「雪玉が大きくなっていくにつれ操作が難しくなる」という部分に面白さや難しさを感じられるよう作成していました。
                結果的にコンテストの一次審査には通ったのですが、本選には選ばれず審査員のコメントとして、「雪玉の操作が難しく、面白さや爽快感を欠いている」という評価をいただきました。
                これは、当初自分が設計した面白さが逆に悪い体験に繋がり、ユーザが予想通り面白さの体験をできるわけではないという課題に難しさを感じました。
                <br><br>
                　そこで、ちょうどコンテスト後にある学祭でゲームを販売する予定であったため、ゲームを遊ぶ層のことを考え、ゲームが得意な人からそうでない人に遊んでもらいどう感じるかをまとめ、最初のステージでは操作部分をゲームが得意でない層が簡単と感じるように実装し直しました。
                他にも、UIのデザインを調整し説明書などを見なくても遊べるようにしました。結果的に、子どもから大人まで遊んでいる人の意見を聞くと、「操作が楽しい」、「スピード感が爽快」という意見を多くもらえ、当初の課題を解決することが出来ました。
                <br><br>
                　些細なゲーム制作経験でしたが、制作の際は必ずユーザの層を考え、その層の中でも扱いが得意でないユーザがどう感じるかを意識するようにしました。
                他にも、自分や慣れている層の人のみでなく様々な人に、設計した面白さを届けられているかを実際に触ってもらい確認するようにしています。
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
            .content-youtube{
                margin: 2% auto;
                width: 80%;
            }
        }
    }
</style>