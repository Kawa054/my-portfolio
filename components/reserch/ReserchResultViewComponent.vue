
<script setup>
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
            <span class="main-title">  力学系とは </span>
            <span class="sub-title"> 　　研究内容紹介1</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
	.view-container {
        width: 90%;
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
                font-size: 32px;
                color: #000;
            }
            .sub-title{
                font-size: 16px;
                color: #000;
            }
        }
    }
</style>