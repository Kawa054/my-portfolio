
<script setup lang="ts">
	import { gsap } from 'gsap'
    import { ref, onMounted } from 'vue'

    const formula = ref('$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$')

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

    //Nuxtでlatex形式で記述する場合、コンポーネント切り替えなどすると読み込まれない。
    //そのため以下のコードを追加して切り替え時も読み込まれるようにする。
    declare global {
        interface Window {
            MathJax: {
                typesetPromise: (nodes?: Iterable<Node>) => Promise<void>;
            };
        }
    }

    //latexで文章を書くclassを指定
    const target1 = ref<HTMLElement>();
    const target2 = ref<HTMLElement>();

    onMounted(async () => {
        if (target1.value) {
            await window.MathJax.typesetPromise([target1.value]);
        }
        if (target2.value) {
            await window.MathJax.typesetPromise([target2.value]);
        }
    });  

</script>

<template>
    <div class="view-container">
        <div class="title">
            <span class="main-title">  力学系理論 </span>
            <span class="sub-title"> 　　- 研究内容紹介1 -</span>
        </div>
        <div class="content">
            <div class="content-text1">
                このページでは、私の研究分野である力学系理論について簡単に説明します。<br>
                力学系とは、時間発展の規則を数学的に定式化したもので、大きく分けて以下のような連続力学系(1)と離散力学系(2)からなります。
            </div> 
            <p ref="target1">
                \begin{eqnarray}
                    \frac{d\boldsymbol{x}}{dt} =
                    \boldsymbol{f}(\boldsymbol{x})
                \end{eqnarray}
            </p>
            <div class="content-text2" ref="target2">
                なお、上で表される力学系は右辺の写像\( \ \boldsymbol{f} : X \to X \ \)が時間に依存しない自励系であり、私の研究では(2)の離散力学系を研究しています。
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
	.view-container {
        width: 100%;
        height: 70vh;
        position: relative;
        padding-top: 22px;
        padding-left: 30px;
        justify-content:space-between;
        .title{
            width: 40%;
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
            width: 90%;
            margin: 3%;
            .content-eq1{
                margin: 1%;
            }
        }
    }
</style>