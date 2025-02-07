
<script setup lang="ts">
	import { gsap } from 'gsap'

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});
    const isOpen = ref(Array(2).fill(true));

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
            <span class="main-title"> NHKロボットコンテスト </span>
            <span class="sub-title"> 　　- 制作期間 : 2か月程度(大学2年生の秋頃) -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　当時大学の同期から「ぜひうちのロボコンの力になってほしい！」と声を掛けてもらい、サークルでNHKロボットコンテストへ向け、ソフトウエア班の一員としてロボットの画像認識プログラムや競技のシミュレーターの作成などを行いました。
                高専時に仲の良かったロボコン部の友人から勧められたときにも、ロボコン関係は少し気になっていたのでいい機会だと思い参加してみました。
            </div>
            <!-- 開閉式のアコーディオン -->
            <div class="accordion">
                <ul class="accordion-contents">
                    <!-- 開発初期段階 -->
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[0] }" @click="handleToggle(0)">
                            <span>1. ロボットの画像認識 </span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[0]" class="topSlide">
                                <p>
                                    　最初は競技で扱うサッカーボールの物体認識をする必要があるとのことで、サッカーボールの画像認識を行うプログラムを作成しました。
                                    ここではPCとWEBカメラでYOLOv5と呼ばれる物体認識モデルを用いてボールの認識を行いました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/robocon/ball1.png" alt="image" quality="100" sizes="md:100% lg:560px" loading="lazy"/>
                                    <NuxtImg src="/works/robocon/ball2.png" alt="image" quality="80" sizes="md:100% lg:400px" loading="lazy"/>
                                </div>
                                <p>
                                    　上の画像のように、学習用の画像を準備し訓練を行わせ以下のような高精度の認識が出来ました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/robocon/detect1.png" alt="image" quality="80" sizes="md:100% lg:660px" loading="lazy"/>
                                </div>
                                <p>
                                    　しかしロボットに搭載する予定だったカメラはラズパイのカメラモジュールであり、認識処理自体はラズパイ上で行う必要がありYOLOだと満足するfpsが出ない課題がありました。
                                    要求されていた処理速度と精度としては、「4~6fpsほどで8割以上の精度」であり限られた処理能力下で上手く認識を行うプログラムを組むことになりました。<br><br>

                                    　そこで、まず学習のモデルを変更しYOLOから軽量化されたYOLO、それも上手くいかず...を繰り返し、最終的に「TensorFlow-Lite」というモデルを扱うことになりました。
                                    TensorFlow-Liteでも初めは精度が上手く出ず、また精度が出ても処理速度が微妙など様々な問題がありモデル自体を改良する形になりました。
                                    モデル内部のコードを少し変更しモデルの量子化を行い軽量化を行うなど、うまく軽量化を行いつつボールの認識精度が8割を超えるよう調整しました。
                                    最終的に、4fps程で認識率が8割以上のラズパイ上で動くプログラムが完成しました。<br>
                                    　たしか、Coral USB AcceleratorというTensorflowのモデルを高速化するUSBがありそれを使うのはどうかと思いましたが、当時半導体不足もあり入手できなかったのも思い出として残っています。
                                    <br><br>

                                    ロボコンが進んでいくにつれて、やっぱり10fps以上で認識率9割以上は欲しいよねという話と安定性の面(ラズパイだと長時間の認識処理は排熱などでパフォーマンスが低下する可能性があった)の話があり、最終的には機体に搭載するモジュールをラズパイからJetsonというものに変更しました。
                                    Jetsonの方ではかなりのスペックもありYOLOの方が動いたので最終的に今までの作業は使うことにはなりませんでしたが、結構面白い経験ができたなと感じました。
                                </p>
                            </div>
                        </transition>
                    </li>
                    <!-- グラフィック関係 -->
                    <li>
                        <div type="button" class="accordion__toggle" :class="{ 'is-active': isOpen[1] }" @click="handleToggle(1)">
                            <span>2. 競技シミュレーター </span>
                        </div>
                        <transition name="topSlide" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
                            <div v-show="isOpen[1]" class="topSlide">
                                <p>
                                    　ソフトウエア班のもう一人のメンバーから、「競技用のシミュレータを作成したい」という要望があり、面白そうなので制作することになりました。
                                    あまりロボット関係の知識はなかったため、当時初めて触れた「ROS」というミドルウェアに苦戦しつつも、Linux環境でシミュレータを作成していきました。
                                    実際は、windows上でLinuxを扱える「WSL」で作業をしていましたが、ここでの環境構築には結構苦労しました。
                                    同時に、「rviz」や「Gazebo」といったツールにも触れました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/robocon/sim1.png" alt="image" quality="80" sizes="md:100% lg:860px" loading="lazy"/>
                                </div>
                                <p>
                                    　画像で出ている青い扇状の部分は、四角い仮想的なロボットがカメラで認識している範囲で経路設計などで用いるためにカメラを付けています。
                                    また、rostopicなどでステアリングを操作できるようにしており、別の端末等から命令を送信することでロボットを動かせるようにしました。
                                </p>
                                <div class="content-img1">
                                    <NuxtImg src="/works/robocon/sim2.png" alt="image" quality="80" sizes="md:100% lg:860px" loading="lazy"/>
                                </div>
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
            width: 60%;
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