
<script setup lang="ts">
	import { gsap } from 'gsap'

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});

    const isOpen = ref(Array(6).fill(true));

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
            <span class="main-title"> 普段の開発など </span>
            <span class="sub-title"> 　　- 全期間 -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                現在記載中... <br>
                基本的にWORKSの経験でもプログラミングの知識は得ていますが、体系的な知識とは限らないので必要に応じて自身の理解度を深めるために小さな練習のプログラムを書いています。
            </div> 
                        <!-- 開閉式のアコーディオン -->
                        <div class="accordion">
                <ul class="accordion-contents">
                    <!-- 開発初期段階 -->
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[0] }" @click="handleToggle(0)">
                            <span>1. 弾幕ゲーム </span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[0]" class="topSlide">
                                <p>
                                    　高専1年次に簡単な弾幕ゲームなどを作成していました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/others/danmaku1.png" alt="image" quality="80" sizes="sm:21vw md:22vw lg:25vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/danmaku2.png" alt="image" quality="80" sizes="sm:21vw md:22vw lg:25vw" loading="lazy"/>
                                </div>
                                <p>
                                    　このゲームはProcessingで作成しており、Javaでのクラスの使い方の練習として作成しました。
                                    また、ゲーム制作に必須の三角関数の理解や、円と円の当たり判定等の練習も兼ねて弾道の計算などを行いました。
                                </p>
                            </div>
                        </transition>
                    </li>
                    <!-- グラフィック関係 -->
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[1] }" @click="handleToggle(1)">
                            <span>2. BoundingPronama </span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[1]" class="topSlide">
                                <p>
                                    　こちらもたしか高専1年生の時に制作。
                                    ゲーム制作同好会の先輩から、「“プロ生ちゃん”というキャラを使ってゲームを作る小さいゲームコンテストがあるから練習がてら参加してみてよ」と言われ参加した記憶があります。
                                    まだこの時もUIなどは意識出来ていない気がします。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/others/bp1.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/bp2.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/bp3.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                </div>
                                <p>
                                    　ゲーム自体はシンプルで、キャラを選んでそのキャラを出来るだけ上へ上へと飛ばすゲームです。
                                    キャラそれぞれに特有の性能があり、二回ジャンプ出来たり、一回のジャンプ距離が長いなど個性があります。
                                    このゲームの制作時、挑戦としてProcessingではなくJavaで制作したのですが、かなり難しい開発だった記憶があります。
                                    そもそもゲーム制作自体ハードルが高いのもありますが、ちゃんとしたJavaに初めて触れて、かつ、ライブラリなど使わず1から作ったのでかなり苦労しました。
                                    なお、このゲームではクラスの継承やオーバーライドなどを意識しながら作成しました。
                                </p>
                            </div>
                        </transition>
                    </li>
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[2] }" @click="handleToggle(2)">
                            <span>3. わらしべ長者ゲーム</span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[2]" class="topSlide">
                                <p>
                                    　こちらも高専1年次で作成した、物をキャラクターに渡し交換していくわらしべというゲームです。
                                    当時好きだったゲームサイトの「クター」のミニゲームをもとに似たゲームを練習として作りました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/others/warashibe1.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/warashibe2.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/warashibe3.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                </div>
                                <p>
                                    　こちらのゲームでは上の開発経験を活かしつつ、コード内を綺麗に書いてみようと意識して作成しました。
                                    マジックナンバーを減らしたり、変数名や関数名が分かりやすいように設計した記憶があります。
                                    最終的にProcessingでちょっとUIを向上させたバージョンも作成しました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/others/warashibe4.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/warashibe5.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/warashibe6.png" alt="image" quality="90" sizes="sm:16vw md:17vw lg:18vw" loading="lazy"/>
                                </div>
                            </div>
                        </transition>
                    </li>
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[3] }" @click="handleToggle(3)">
                            <span>4. 時間変動するベクトル場の実験</span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[3]" class="topSlide">
                                <p>
                                    　高専2年次くらいにC++で実験的に作ったプログラム。
                                    当時自分で「ベクトルがその場その場で決まって時間的に変わるならゲーム内での動きを簡単に実装できるのではないか」と思いC++の練習として作成。
                                    今思えば、研究で扱っている「ベクトル場」そのものですが、自力でこの概念を思いついたのは褒めたいところです。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/others/vector.gif" alt="image" quality="90" sizes="sm:46vw md:47vw lg:48vw" loading="lazy"/>
                                </div>
                            </div>
                        </transition>
                    </li>
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[4] }" @click="handleToggle(4)">
                            <span>5. 早押し対決ゲーム(刹那の見切り) </span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[4]" class="topSlide">
                                <p>
                                    　「居合」というゲームですが、有名ミニゲームの「刹那の見斬り」と同じルール、デザインのゲームを練習で作りました。
                                    高専3年次頃に、学校で友達と刹那の見斬りで遊びたくなり、友人から絵を貰いProcessingで1日で突発的に作りました。マウスの右と左を使って一応対戦が可能です。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/others/setsuna1.png" alt="image" quality="90" sizes="sm:26vw md:27vw lg:28vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/setsuna2.png" alt="image" quality="90" sizes="sm:26vw md:27vw lg:28vw" loading="lazy"/>
                                </div>
                                <div class="content-img1">
                                    <NuxtImg src="/works/others/setsuna4.png" alt="image" quality="90" sizes="sm:26vw md:27vw lg:28vw" loading="lazy"/>
                                    <NuxtImg src="/works/others/setsuna3.png" alt="image" quality="90" sizes="sm:26vw md:27vw lg:28vw" loading="lazy"/>
                                </div>
                            </div>
                        </transition>
                    </li>
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[5] }" @click="handleToggle(5)">
                            <span>6. 記載中... </span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[5]" class="topSlide">
                               
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
            width: 33%;
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