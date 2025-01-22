
<script setup>
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	
	gsap.registerPlugin(ScrollTrigger); //Nuxt3でのgsapでscrollTrigger使うには必要らしい

	definePageMeta({
		layout: false,
		scrollToTop: false,
	});
</script>

<template>
    <div class="view-container">
        <div class="title">
            <span class="main-title"> 市川 龍太郎 / Ryutaro Ichikawa </span>
            <span class="sub-title"> 　　京都大学大学院 情報学研究科 M1</span>
        </div>
        <!-- 経歴部分 -->
        <ul class="history">
            <!-- 2000/12/05(誕生) -->
            <li class="timeline">
                <p class="timeline-date"> 2000/12/05 </p>
                <div class="timeline-right-content">
                    <!-- セパレータ部分 -->
                    <span class="timeline-separator"></span>
                    <!-- 右テキスト部分 -->
                    <p class="timeline-text">
                        熊本県で生まれました。<br>
                        楽しいことがあると、夕飯の時間にずっとしゃべっていたり、よく友達と遅くまで遊んだりと元気な子だったようです。
                    </p>
                </div>
            </li>
            <!-- 2000/12/05(中学) -->
            <li class="timeline">
                <p class="timeline-date"> 2013/04/01 </p>
                <div class="timeline-right-content">
                    <!-- セパレータ部分 -->
                    <span class="timeline-separator"></span>
                    <!-- 右テキスト部分 -->
                    <p class="timeline-text">
                        中学校入学 <br>
                        中学ではバドミントン部に所属しており、仲間と勝利のため日々切磋琢磨してました。また、普段は毎日ゲームをしており、家で遊んだ内容を学校で友達と話す日々で、放課後もよく友達とゲームをして遊んでいました。このころ、ちょうど「マインクラフト」というゲームに熱中し、勝手に親のPCを使ってサーバーを建て、独学でプラグインなどを自作し、作ったミニゲームで遊んだりもしていました。ここで、頭の中の想像を実際に実現する手段としてプログラミングがあると感じ、この経験がきっかけで高専でプログラミングをより深く学びたいと思いました。
                    </p>
                </div>
            </li>
            <!-- 2000/12/05(高専) -->
            <li class="timeline">
                <p class="timeline-date"> 2016/04/01 </p>
                <div class="timeline-right-content">
                    <!-- セパレータ部分 -->
                    <span class="timeline-separator"></span>
                    <!-- 右テキスト部分 -->
                    <p class="timeline-text">
                        高専入学 <br>
                        入学後すぐに熊本地震があり、一か月後の学校では上手く馴染めないかもしれないと不安を感じていました。しかし、ゲームの話がきっかけで友達も作れ、私も将来ゲームのような人に喜びを与える体験を生み出し、人と人との繋がりの基になるものを作りたいと思いました。夢を実現できるよう高専では手を多く動かし、コンテストやインターンでの開発体験などにも積極的に参加しました。そうしていくうちに、もっと数学や物理学といった基礎理論を深く学びたいと感じたこと、より広い分野で活躍できる技術者になりたいと感じ、京都大学への編入をしました。
                    </p>
                </div>
            </li>
            <!-- 2000/12/05(大学) -->
            <li class="timeline">
                <p class="timeline-date"> 2021/04/01 </p>
                <div class="timeline-right-content">
                    <!-- セパレータ部分 -->
                    <span class="timeline-separator timeline-separator-last"></span>
                    <!-- 右テキスト部分 -->
                    <p class="timeline-text">
                        大学編入学(2年次)<br>
                        大学では高度な数学や物理、情報科学などを学びました。その過程で様々な価値観に触れ、色々なことに悩み、自分を見つめなおすことで人として成長することができました。大学で学んだ多くの理論は、必要な時に新しい技術を習得する下地になっており、これからの挑戦の支えになっています。また、研究では複雑すぎるような問題でも特定の具体的な状況に分けて考えることで、全体を解明していくプロセスを学び、答えのない未知の問題に対応する力を付けることが出来ました。大学での経験を糧に、活躍できる技術者に成れるよう努力を続けています。 <br>
                        <br>
                        <br>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
	.view-container {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        justify-content:space-between;
        .title{
            width: 70%;
            padding-bottom: 5px;
            border-bottom:3px solid #00FFFF;
            border-color:#000;
            border-width:2px;
            .main-title{
                font-size: 32px;
                color: #000;
            }
            .sub-title{
                font-size: 16px;
                color: #000;
            }
        }
        .history{
            margin-left: -2%;
            margin-top: 2%;
            .timeline {
                display: flex;
                .timeline-separator {
                    top: 2px;
                    display: block;
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    background-color: #000;
                    position: relative;
                }
                .timeline-separator::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 6px;
                    z-index: 2;
                    width: 1px;
                    height: 200px;
                    background-color: #000;
                }
                .timeline-separator-last::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 6px;
                    z-index: 2;
                    width: 1px;
                    height: 115px;
                    background-color: #000;
                }
                .timeline-date {
                    position: relative;
                    padding-right: 20px;
                }
                .timeline-date:first-child {
                    top: -18px;
                }
                .timeline-text {
                    top: -30px;
                    position: relative;
                    padding-left: 40px;
                    padding-bottom: -40px;
                    color: #000;
                }
                & p{
                    font-size: 16px;
                    color: #000;
                }
            }
        }
    }
</style>