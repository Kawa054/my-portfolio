
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
        if (target0.value) {
            await window.MathJax.typesetPromise([target0.value]);
        }
        if (target1.value) {
            await window.MathJax.typesetPromise([target1.value]);
        }
        if (target2.value) {
            await window.MathJax.typesetPromise([target2.value]);
        }
        if (target3.value) {
            await window.MathJax.typesetPromise([target3.value]);
        }
    });  

</script>

<template>
    <div class="view-container">
        <div class="title">
            <span class="main-title">  研究結果 </span>
            <span class="sub-title"> 　　- 研究内容紹介4 -</span>
        </div>
        <div class="content">
            <div class="content_text1" ref="target0">
                　離散力学系として定式化した折り紙写像\( \boldsymbol{M} \)について、\( N \rightarrow \infty \)としたとき、ある\(\ d \ \)の関数\( \ \xi(d) \ \)を用いて
                \begin{eqnarray}
                    \lim_{N\rightarrow \infty }\boldsymbol{M}(d, \rho) = (d, \rho + \xi(d))
                \end{eqnarray}
                と書けることが計算していくと分かりました。
                これは、KAM定理のページで紹介した標準写像の形と似ており、折り紙写像ではモジュール数\( N \)が摂動パラメータ\( \varepsilon \)と関係していることが分かります。
                実際に計算すると、\( \varepsilon = N^{-1} \)となっています。さて、この計算結果から折り紙写像にもKAM定理を適用することができ、以下の非退化条件
                \begin{eqnarray}
                    \frac{\partial \xi}{\partial d} \neq 0
                \end{eqnarray}
                を満たし、\( \omega = \xi(d_0) \)がディオファントス条件を満たすならば、折り紙写像\( \boldsymbol{M} \)にも十分大きい\( N \)について、不変曲線が多く存在することを理論的に証明しました。
                また、実際に数値計算を行ってみると、様々なモジュールに対して以下の例のように不変曲線が残り続けることが確認できました。<br><br>
            </div>
            <div class="content-img">
                <NuxtImg src="/origami/result1.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/result2.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/result3.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/result4.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/result5.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/result6.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
            </div>
            <div class="content_text2" ref="target1">
                　現在はより一般的な系や、散逸的な折り紙の系にKAM定理を適用することで、数理構造とそれから得られる折り紙の研究を進めています。例えば、写像の形が\( N \rightarrow \infty \)としたとき
                \begin{eqnarray}
                    \lim_{N\rightarrow \infty }\boldsymbol{M}(d, \rho) = (\lambda d + \mu, \rho + \xi(d))
                \end{eqnarray}
                となるような折り紙を考え、\( \mu=0 \ \)のときの相図の様子を見てみましょう。
                すると、十分\( \ N \ \)が大きいとき、点アトラクターが消え、以下のように\( \ d=0 \ \)でアトラクター(軌道が吸い込まれている領域)が発生しています。<br><br>
            </div>
            <div class="content-img">
                <NuxtImg src="/origami/pd1_1.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd1_2.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd1_3.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd1_4.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd1_5.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd1_6.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
            </div>
            <div class="content_text2" ref="target2">
                　しかし、\( d=0 \ \)で写像はそれ以上軌道を生成出来ないためこの相図はあまり有用とは言えません。
                そこで、\(  \mu \ \)を上手く変更することでこのアトラクターの位置を変えることができます。以下は\( \ \mu= 0.05\ \)のときの相図です。<br><br>
            </div>
            <div class="content-img">
                <NuxtImg src="/origami/pd2_1.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd2_2.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd2_3.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd2_4.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd2_5.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
                <NuxtImg src="/origami/pd2_6.jpg" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
            </div>
            <div class="content_text2" ref="target3">
                　この\(\ \mu \ \)は、以下のように折り紙のモジュール間に追加した構造と対応しており、この水色部分が与える影響等を散逸系におけるKAM定理(KAM Theory for Comformally Symplectic Systems)を用いて研究しています。<br><br>
            </div>
             <div class="content-img">
                <NuxtImg src="/origami/tess1.png" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
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
            .content-img{
                text-align: center;
            }
        }
    }
</style>