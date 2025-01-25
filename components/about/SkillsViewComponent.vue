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
        <div class="skill-row">
            <img class="star" src="/assets/logo/star4.png">
            <div class="split-line"></div>
            <ul class="skill">
                <li><img src="/assets/logo/c.png"></li>
                <li><img src="/assets/logo/java.png"></li>
            </ul>
        </div>
        <div class="skill-row">
            <img class="star" src="/assets/logo/star3.png">
            <div class="split-line"></div>
            <ul class="skill">
                <li><img src="/assets/logo/cpp.png"></li>
                <li><img src="/assets/logo/c-sharp.png"></li>
                <li><img src="/assets/logo/git.png"></li>
                <li><img src="/assets/logo/python.png"></li>
                <li><img src="/assets/logo/unity.png"></li>
                <li><img src="/assets/logo/html.png"></li>
                <li><img src="/assets/logo/vue.png"></li>
                <li><img src="/assets/logo/gml.png"></li>
            </ul>
        </div>
        <div class="skill-row">
            <img class="star" src="/assets/logo/star2.png">
            <div class="split-line"></div>
            <ul class="skill">
                <li><img src="/assets/logo/opengl.png"></li>
                <li><img src="/assets/logo/linux.png"></li>
                <li><img src="/assets/logo/react.png"></li>
                <li><img src="/assets/logo/css.png"></li>
                <li><img src="/assets/logo/js.png"></li>
                <li><img src="/assets/logo/ts.png"></li>
                <li><img src="/assets/logo/sql.png"></li>
                <li><img src="/assets/logo/php.png"></li>
            </ul>
        </div>
        <div class="skill-row">
            <img class="star" src="/assets/logo/star1.png">
            <div class="split-line"></div>
            <ul class="skill">
                <li><img src="/assets/logo/docker.png"></li>
                <li><img src="/assets/logo/ros.png"></li>
            </ul>
        </div>  
        <div class="text">
            　資格等 : 普通自動車第一種運転免許, 応用情報技術者, TOEIC 780点, 英検２級 <br>
            受賞歴等 : 第30回全国高専プロコン本選 敢闘賞
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .view-container {
        width: 90%;
        height: 90%;
        position: relative;
        padding-top: 42px;
        padding-left: 60px;
        .skill-row {
            display: flex;
            margin-bottom: 10px;
            .star {
                position: relative;
                margin-right: 30px;
            }
            .split-line {
                margin-top: -10px;
                border-left: 3px #1e4f012f solid;
            }
            .skill {
                display: flex;
                list-style: none;        
                position: relative;
                margin-top: -1px;
                height: 110px;
            }
        }
        .text {
            width: 100%;
            max-width: 1000px;
            height: 100%;
            max-height: 100px;
            margin-top: 18px;
            color: black;
        }
    }
    img {
        width: 100%;
        max-width: 100px;
        height: 100%;
        max-height: 100px;
        padding-right: 10px;
        aspect-ratio: 1 / 1;
    }
    img:hover{
        transform: scale(1.17, 1.17);
        transition: 0.2s;
        //border-bottom: 5px solid rgba(255, 0, 0, 0.7);
    }
</style>