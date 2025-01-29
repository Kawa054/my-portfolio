
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
    const target3 = ref<HTMLElement>();

    onMounted(async () => {
        if (target0.value) { await window.MathJax.typesetPromise([target0.value]); }
        if (target1.value) { await window.MathJax.typesetPromise([target1.value]); }
        if (target2.value) { await window.MathJax.typesetPromise([target2.value]); }
        if (target3.value) { await window.MathJax.typesetPromise([target3.value]); }
    });  

</script>

<template>
    <div class="view-container">
        <div class="title">
            <span class="main-title">  KAM定理 </span>
            <span class="sub-title"> 　　- 研究内容紹介3 -</span>
        </div>
        <div class="content">
            <div class="content_text1" ref="target0">
                　KAM定理とは、Kolmogorov、Arnol’d、Moserの3人の研究者から頭文字を取った定理で、可積分系において存在していた不変曲線(トーラス)が摂動を受けても多く生き残ることを主張する定理です。と言ってもこれだけでは良く分からないので、 <br>
            </div> 
            <p ref="target1">
                \begin{eqnarray}
                    x_{m+1} &=& x_{m} + \varepsilon V(x)  \\  
                    y_{m+1} &=& y_{m} + x_{m+1}
                \end{eqnarray}
            </p>
            <div class="content-text2" ref="target2">
                で定義される標準写像(Standard Map)についての様子を見たいと思います。なお、\( (x_{m}, y_{m}) \in \mathbb{T}^2 \) (2次元トーラス)、\( \varepsilon > 0 \ \)を摂動パラメーター、\( V(x) \ \)は解析的な関数とします。
                \( \varepsilon \rightarrow 0 \ \)でこの力学系は可積分系で、\( V(x)=\sin x \ \)とすると相図は<br><br>
            </div> 
            <div class="content-img1">
                <NuxtImg src="/dyn/pic1.jpg" alt="image" quality="70" sizes="md:100% lg:380px"/>
                <NuxtImg src="/dyn/pic2.jpg" alt="image" quality="70" sizes="md:100% lg:380px"/>
                <NuxtImg src="/dyn/pic3.jpg" alt="image" quality="70" sizes="md:100% lg:380px"/>
                <NuxtImg src="/dyn/pic4.jpg" alt="image" quality="70" sizes="md:100% lg:380px"/>
                <NuxtImg src="/dyn/pic5.jpg" alt="image" quality="70" sizes="md:100% lg:380px"/>
                <NuxtImg src="/dyn/pic6.jpg" alt="image" quality="70" sizes="md:100% lg:380px"/>
            </div> 
            <div class="content-text3" ref="target3">
                のようになります。\( \varepsilon = 0 \ \)のときの上下を横断する直線が、\( \varepsilon \ \)を大きくするにつれ少なくなっていることが分かります。
                しかし、\( \varepsilon \ \) が十分小さいときにはこの上下を横断する曲線が生き残っており、これがKAM定理での、「不変曲線が摂動を受けても多く生き残る」主張の部分になります。
                このように標準写像のような保存系(写像のヤコビ行列式が1となる力学系)では、不変曲線の破壊や楕円状の曲線島の形成、\( \varepsilon \ \)を大きくしたときの砂粒のようなカオスの海が特徴的に見られます。<br><br>
                　保存系でのKAM定理の内容を具体的に記しておきます。保存系における写像<br>
                \begin{eqnarray}
                    f: \mathbb{T}^{n} \times \mathcal{U} (\subset \mathbb{R}^n) &\rightarrow& \mathbb{T}^{n} \times \mathcal{U} \\  
                    (\boldsymbol{\theta}, \boldsymbol{I}) & \mapsto & (\boldsymbol{\theta}', \boldsymbol{I}')
                \end{eqnarray}
                を考え、これが母関数\( S(\boldsymbol{\theta}, \boldsymbol{I}') \ \)により以下のように与えられているとします。
                \begin{eqnarray}
                    \boldsymbol{I}=\frac{\partial S}{\partial \boldsymbol{\theta}}(\boldsymbol{\theta}, \boldsymbol{I}'), \ \boldsymbol{\theta}'=\frac{\partial S}{\partial \boldsymbol{I}'}(\boldsymbol{\theta}, \boldsymbol{I}')
                \end{eqnarray}
                今、母関数が
                \begin{eqnarray}
                    S(\boldsymbol{\theta}, \boldsymbol{I}'; \varepsilon) = \left< \boldsymbol{\theta}, \boldsymbol{I}' \right> + S_{0}(\boldsymbol{I}') + \varepsilon S_{1}(\boldsymbol{\theta}, \boldsymbol{I}'; \varepsilon)
                \end{eqnarray}
                の形で与えられた時の写像\( \ f(\boldsymbol{\theta}, \boldsymbol{I}'; \varepsilon) \ \)を考えます。なお、\( \varepsilon = 0 \)とき、
                \begin{eqnarray}
                    f(\boldsymbol{\theta}, \boldsymbol{I}'; 0)=\left( \boldsymbol{\theta} + \frac{\partial S_0}{\partial \boldsymbol{I}'}(\boldsymbol{I}'), \boldsymbol{I} \right)
                \end{eqnarray}
                となります。2次元保存系の場合は直線形の写像\( \ (y', x') \mapsto (x+y, x) \ \)のようになり、上の標準写像の例における\(\ \varepsilon = 0 \ \)の直線形と対応しています。
                さて、ここでKAM定理の主張は、以下の写像\( f \)に対する非退化条件
                \begin{eqnarray}
                   \det (\mathrm{Hess} \ S_0) \neq 0
                \end{eqnarray}
                が成立し, \( \ \boldsymbol{\omega} = \frac{\partial S_0}{\partial \boldsymbol{I}'}(\boldsymbol{I}_{0}) \ \) がディオファントス条件を満たすならば、十分小さい摂動パラメータ\(\ \varepsilon > 0 \ \)に対して、\( f \)にも不変曲線(トーラス)が存在する、という主張です。
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
            }
        }
    }
</style>