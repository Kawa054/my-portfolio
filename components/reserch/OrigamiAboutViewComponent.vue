
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
            <span class="main-title">  折り紙写像と離散力学系 </span>
            <span class="sub-title"> 　　- 研究内容紹介2 -</span>
        </div>
        <div class="content">
            <div class="content_text1">
                　折り紙は日本人に馴染み深いもので、実は<a href="https://www.nippon.com/ja/currents/d00161/">様々な研究</a>が行われています。例えば、宇宙に飛ばす人工衛星のパネルには「ミウラ折り」と呼ばれる折り方が用いられていたり、空き缶を潰しやすい形のダイヤモンド・パターンがあったりなど身近な物へ応用されています。
                今回の研究では、<a href="https://sdgs.hokudai.ac.jp/approach-to-sdgs/interview/itw-6946/">人工血管などへの応用</a>が期待されている「なまこ折り」と呼ばれる折り方について、以下のような展開図（左図）とそれを上下繋げ、折り込んで出来る立体（右図）を考えます。<br><br>
            </div> 
            <div class="content-img">
                <NuxtImg src="/origami/tess.png" alt="image" quality="70" sizes="md:100% lg:780px" loading="lazy"/>
            </div> 
            <div class="content_text2" ref="target0">
                　図中で緑色で示されている部分は１つの「モジュール」と呼ばれる部分で、黄色で示された部分はモジュールを縦に\( N \)個並べた部分です。
                なまこ折りで出来る立体は<a href="https://www.ntticc.or.jp/ja/archive/works/undulating-origami-tessellations/">波状の円柱形</a>になるなど非自明な性質があり、この力学系を以下で考えていきます。<br><br>
            </div>
            <div class="content-img">
                <NuxtImg src="/origami/w1.png" alt="image" quality="70" sizes="md:100% lg:680px" loading="lazy"/>
                <NuxtImg src="/origami/dr.png" alt="image" quality="70" sizes="md:100% lg:380px" loading="lazy"/>
            </div> 
            <div class="content-text3" ref="target1">
                　上図のように黄緑色の１モジュールについて、モジュール内部のジグザグと立体上のジグザグを対応させ、立体上のジグザグの一部を上図右のように2変数\( (d, \rho) \)で表します。
                回転対称性があるため、この一部の情報が立体のジグザグの情報を持っています。ここで、赤→ピンク→青→赤のように1モジュール分のジグザグからジグザグへの写像を\( \boldsymbol{M}(d, \rho) \)として定め、これを折り紙写像と呼ぶことにします。
                すなわち、１モジュールに対して定まる
                \begin{eqnarray}
                    \boldsymbol{M} : (d_{m}, \rho_{m}) \mapsto (d_{m+1}, \rho_{m+1})
                \end{eqnarray}
                という離散力学系を考えます。\( \boldsymbol{M}(d, \rho) \)は、具体的には１モジュール内部の\( \ n \ \)ステップ毎のジグザグの対応を考えると、細かい説明は省きますが
                \begin{eqnarray}
                    \boldsymbol{M} = \boldsymbol{s} \circ (\boldsymbol{G}_{n-1}^{k_{n-1}} \circ \boldsymbol{F}_{n-1} ) \circ \cdots \circ
                                    (\boldsymbol{G}_{i}^{k_{i}} \circ \boldsymbol{F}_{i} ) \circ \cdots \circ (\boldsymbol{G}_{0}^{k_{0}} \circ \boldsymbol{F}_{0} )
                \end{eqnarray}
                と書くことができます。パラメータを適当に決めた展開図とそれに対応する相図の例を一つ以下に載せておきます。<br><br>
            </div>
            <div class="content-img">
                <NuxtImg src="/origami/ex1.png" alt="image" quality="70" sizes="md:100% lg:480px" loading="lazy"/>
                <NuxtImg src="/origami/pd1.jpg" alt="image" quality="70" sizes="md:100% lg:480px" loading="lazy"/>
            </div>
            <div class="content-text4" ref="target2">
                　この相図は格子状にいくつか初期点\( (d_0, \rho_0) \)を取り、写像\( \boldsymbol{M}(d, \rho) \)によって得られる軌道を各色で表しています。それぞれの色の軌道は、なまこ折りの立体と対応しています。
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
            .content-img{
                text-align: center;
            }
        }
    }
</style>