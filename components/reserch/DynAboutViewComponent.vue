
<script setup lang="ts">
	import { gsap } from 'gsap'
    import { ref, onMounted } from 'vue'

    const formula = ref('$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$')
    const videoId = ref<string>("xSwN9b2oQ40");
    const videoId1 = ref<string>("xSwN9b2oQ40");
    const videoId2 = ref<string>("qKQt3-ABw7g");

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
    const target0 = ref<HTMLElement>();
    const target1 = ref<HTMLElement>();
    const target2 = ref<HTMLElement>();

    onMounted(async () => {
        if (target0.value) {
            await window.MathJax.typesetPromise([target0.value]);
        }
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
            <div class="content_text1" ref="target0">
                　このページでは、研究分野である力学系理論について簡単に説明します。<br><br>
                　力学系理論とは、時間発展により変化するものを対象とする数学の分野で、原子サイズから惑星サイズの運動、流体、化学反応、脳波や睡眠などのリズム、人口の変動など様々な現象を力学系として表すことができます。
                具体的には、\( \mathbb{R}^{n} \ \)やその開集合のような適当な空間を\( X \)、\( t \ \)に依らない写像\( \ \boldsymbol{f} : X \to X \ \) について、以下の微分方程式<br>
            </div> 
            <p ref="target1">
                \begin{eqnarray}
                    \frac{d\boldsymbol{x}}{dt} =
                    \boldsymbol{f}(\boldsymbol{x}), \ \ \ \boldsymbol{x} \in X
                \end{eqnarray}
            </p>
            <div class="content-text2" ref="target2">
                を自励的な連続力学系と呼びます。
                なお、私の研究では、上の式を \( \boldsymbol{x}_{n+1} = \boldsymbol{f}(\boldsymbol{x}_{n}), \ \ (n=0,1, 2, ... ) \) のように離散的に表した「離散力学系」を対象としています。<br><br>
                　離散力学系において、初期点\( \boldsymbol{x}_{0} \)を定めると写像\(  \boldsymbol{f} \)により点列\( \{ \boldsymbol{x}_{0}, \boldsymbol{x}_{1}, \boldsymbol{x}_{2}, ... \} \)が得られ、これを軌道と呼びます。
                力学系の研究では微分方程式そのものを解くことよりも、軌道や軌道の族の定性的な性質を調べることが多くあり、「相空間」自体や全軌道の概略を相空間上に示した「相図」が重要になってきます。
                今ではカオス理論や分岐現象、安定性の解析など、力学系の軌道の性質を調べる研究が広く行われています。「太陽系は安定しているか？」という問いなど、面白い問題が多いです。以下は力学系の問題などの解説動画です。<br><br>
            </div> 
            <div class="content-youtube">
                <ScriptYouTubePlayer video-id="xSwN9b2oQ40"/>
            </div>
            <div class="content-youtube">
                <ScriptYouTubePlayer video-id="qKQt3-ABw7g"/>
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
            width: 87%;
            margin: 3%;
            .content-eq1{
                margin: 1%;
            }
            .content-youtube{
                margin: 2% auto;
                width: 80%;
            }
        }
    }
</style>