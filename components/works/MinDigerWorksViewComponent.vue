
<script setup lang="ts">
	import { gsap } from 'gsap'

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});

    const isOpen = ref(Array(4).fill(true));

    // メニューを開閉する
    function handleToggle(index: number) {
        //他のをすべて閉じる場合
        //if (!isOpen.value.at(index)) {
        //    isOpen.value.fill(false);
        //}
        isOpen.value.splice(index, 1, !isOpen.value.at(index));
    }
    
    // スライド開閉要素の高さ取得
    function beforeEnter(el: any) {
        el.style.height = '0';
    }

    function enter(el: any) {
        el.style.height = el.scrollHeight + 'px';
    }

    function beforeLeave(el: any) {
        el.style.height = el.scrollHeight + 'px';
    }

    function leave(el: any) {
        el.style.height = '0';
    }

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
            <span class="main-title"> MinDiger (Game) </span>
            <span class="sub-title"> 　- 制作期間 : 4, 5か月程度(大学3年生の夏頃) -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　大学生3年生の夏頃に何か大きなゲームを1つ作成してみたいと考え、ゲームクリエイター甲子園2022へ向けてイラスト担当2人と自分の3人でチームを組みゲーム開発を行いました。
                開発ではプログラム、ゲーム案の立案、開発進行の全般を担当しリーダーを担いました。最終的にメンバーの予定など様々な理由でコンテストまでには作れませんでしたが、良い開発経験とリーダー経験になりました。
            </div> 
            <div class="content-img1">
                <NuxtImg src="/works/mindiger.png" alt="image" quality="90" sizes="sm:26vw md:28vw lg:30vw" loading="lazy"/>
                <NuxtImg src="/works/mindiger/under1.png" alt="image" quality="90" sizes="sm:26vw md:28vw lg:30vw" loading="lazy"/>
            </div>
            <!-- 開閉式のアコーディオン -->
            <div class="accordion">
                <ul class="accordion-contents">
                    <!-- 開発初期段階 -->
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[0] }" @click="handleToggle(0)">
                            <span>1. 開発初期</span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[0]" class="topSlide">
                                <p>
                                    　ゲームの開発初期では、自分が元々作成したかった2Dのローグライクなゲームを作成しようという提案をしました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/start1.png" alt="image" quality="80" sizes="sm:26vw md:28vw lg:30vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/start2.png" alt="image" quality="80" sizes="sm:26vw md:28vw lg:30vw" loading="lazy"/>
                                </div>
                                <p>
                                    　自分が遊んできて楽しいと感じた似ているゲーム(ポケモンダンジョン、マインクラフト、勇者のくせに生意気だ等)を自分の視点で分析し、初めの一か月程チームメンバーと話し合いゲーム内容を固めていきました。
                                    グラフィックは個人的に好きだったCartoというゲームを参考にしました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/start3.png" alt="image" quality="100" sizes="sm:16vw md:18vw lg:20vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/start4.png" alt="image" quality="100" sizes="sm:16vw md:18vw lg:20vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/start5.png" alt="image" quality="100" sizes="sm:16vw md:18vw lg:20vw" loading="lazy"/>
                                </div>
                                <p>
                                    　上の画像は初期に考えていた案で、「冒険」をテーマに、プレイヤーが「○○してみたらどうなるんだろう？」という好奇心をくすぐるようなゲームを考えました。
                                    プレイヤーが自分から仮説を立て検証し、それが予想したものだったか、はたまた予想外だったかという体験に面白さを感じられるように...とチームメンバーで案を考えていきました。
                                    また、Rolling Snowの開発の経験から、UIも直感的に分かりやすい設計にするように自分から話をしました。
                                    当時イラスト担当のメンバーはUI作りをあまりしたことがなく、UIを担当してみたい！と要望を貰ったので、参考になるサイトや動画をいくつか紹介し作ってもらいました。
                                    何度か調整を重ね、かなり良いUIになったと感じています。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/UI1.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/UI2.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                </div>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/UI3.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/UI4.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                </div>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/UI7.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/UI8.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                </div>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/UI5.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/UI6.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                </div>
                            </div>
                        </transition>
                    </li>
                    <!-- グラフィック関係 -->
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[1] }" @click="handleToggle(1)">
                            <span>2. 地面の模様の実装とグラフィック</span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[1]" class="topSlide">
                                <p>
                                    　はじめ、2Dゲームの本格的な開発は初ということもあり「マップタイル」を使いフィールドを作っていこうという方針になりました。
                                    すると、以下の画像のデモのように上手く地面の模様を作れないという問題に当たりました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/ground1.png" alt="image" quality="90" sizes="sm:33vw md:35vw lg:37vw" loading="lazy"/>
                                </div>
                                <p>
                                    　また、マップタイルであると常に規則的な地面の模様になり、自然な模様には見えないという問題もあり相談がありました。
                                    模様やマスクをイラスト担当が全て書く、という手段もありますが流石に作業量もゲームの容量も膨大になるためプログラム側で自動生成しようという流れになりました。<br>
                                    　そこで、マインクラフトの地形生成等に使用されている「パーリンノイズ」と呼ばれる自然なノイズを用いて地形の模様を生成することを考えました。
                                    具体的には、0~255の数値を二次元上にパーリンノイズで生成し、ある区間では特定の色に置き換えるというプログラムをシェーダーを用いて実装しました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/ground2.png" alt="image" quality="90" sizes="sm:43vw md:45vw lg:47vw" loading="lazy"/>
                                </div>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/story.png" alt="image" quality="90" sizes="sm:43vw md:45vw lg:47vw" loading="lazy"/>
                                </div>
                                <p>
                                    　すると、上の画像のようにマップに合わせて自然な模様が生成されるようになり見た目がかなり向上しました。
                                    また、他にもオブジェクトの影をつけようとなったとき、イラスト担当の作業量が増えないように影も自動で生成されるように調整しました。
                                    他にも、ゲーム内のダンジョンの床の模様も同様のプログラムで生成できるようにし、以下の画像のように単調性をなくすことに成功しました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/ground3.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                    <NuxtImg src="/works/mindiger/ground4.png" alt="image" quality="90" sizes="sm:23vw md:25vw lg:27vw" loading="lazy"/>
                                </div>
                                <p>
                                    　最初期ののっぺりとしたゲームからかなり改善したと思います。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/ground5.png" alt="image" quality="90" sizes="sm:43vw md:45vw lg:47vw" loading="lazy"/>
                                </div>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/ground7.png" alt="image" quality="90" sizes="sm:43vw md:45vw lg:47vw" loading="lazy"/>
                                </div>
                                <p>
                                    　ダンジョン自体の暗さや視界の広さなどもダンジョン内の変数として扱っており、これによって特定のダンジョンでは真っ暗にできるなどステージの幅も広がりました。
                                    他にも、松明による光をシェーダー等で上手く実装することで本格的にゲームらしいグラフィックに近づけることが出来ました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/mindiger/ground6.png" alt="image" quality="100" sizes="sm:43vw md:45vw lg:47vw" loading="lazy"/>
                                </div>
                            </div>
                        </transition>
                    </li>
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[2] }" @click="handleToggle(2)">
                            <span>3. ロード待機</span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[2]" class="topSlide">
                                <p>
                                    　ストーリモードで、ある街へ入るときにマップの大きさもあり読み込みに時間がかかり、遷移中に固まってしまうことがありました。
                                    そこで、ロード画面を追加しロードが終わるまで読み込み画面を流すようにしました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg preload src="/works/mindiger/loadgif.gif" alt="image" quality="80" sizes="sm:43vw md:45vw lg:47vw" />
                                </div>
                                <p>
                                    　街へ忘れ物をした際などに、再度戻りロードするとユーザの体験が損なわれるため、最終的には遷移一回分の情報をメモリに保持しロードしないようにしました。(上の動画ではローディングしているが、実際には隣接する移動であればローディングしない)
                                </p>
                            </div>
                        </transition>
                    </li>
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[3] }" @click="handleToggle(3)">
                            <span>4. 敵とダンジョン</span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[3]" class="topSlide">
                                <p>
                                    　記載中...
                                </p>
                            </div>
                        </transition>
                    </li>
                </ul>
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
            width: 52%;
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
            height:auto;
            margin: 3%;
            .content-eq1{
                margin: 1%;
            }
            .content-text{

            }
            .content-img1{
                display: flex;
                text-align: center;
                justify-content: space-evenly;
                margin: 2%;
            }
            .accordion {
                margin-left: -4%;
                .accordion-contents{
                    list-style: none;
                }
            }
            .accordion__toggle {
                font-size: 22px;
                font-weight: bold;
                line-height: 2.818;
                text-align: left;
                display: block;
                width: 100%;
                position: relative;
                border-bottom: 2px solid #333;
                background: #0088ff11;
                display: block;
                margin-bottom: 1px;
                padding: 10px;
                &::before,
                &::after {
                    content: '';
                    display: inline-block;
                    width: 18px;
                    height: 3px;
                    background-color: #a52424;
                    position: absolute;
                    top: 50%;
                    right: 22px;
                }

                &::before {
                    transform: translate(0, -50%);
                }

                &::after {
                    transition: all 0.3s ease-in-out;
                    transform: translate(0%, -50%) rotate(90deg);
                }

                &.is-active {
                    &::after {
                        transform: translate(0%, -50%) rotate(0deg);
                    }
                }
            }

            .topSlide {
                transition: height 0.3s ease-in-out;
                overflow: hidden;
                margin-left: 2%;
            }

            .topSlide-enter-active {
                animation-duration: 0.3s;
                animation-fill-mode: both;
            }

            .topSlide-leave-active {
                animation-duration: 0.3s;
                animation-fill-mode: both;
            }
        }
    }
</style>