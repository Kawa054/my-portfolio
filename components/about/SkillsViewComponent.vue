<script setup>
	import { gsap } from 'gsap'

    import ModalComponent from "~/components/ModalComponent.vue";

    //モーダル用データ
    const is_modal_opened = ref(false);
    const imageName = ref("c");
    const title = ref("undefined title");
    const description = ref("undefined description");

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

        gsap.set('.skill-row', { opacity: 0, y: 10, });
		gsap.to(".skill-row", { opacity: 1, y: 0, stagger: 0.2,})
	});
</script>

<template>
    <ModalComponent v-if="is_modal_opened" @close="is_modal_opened = false" :imageName=imageName :modalTitle=title :description=description />
    <div class="view-container">
        <div class="skill-row">
            <img class="star" src="/assets/logo/star4.png" @click="
                is_modal_opened = true;
                imageName = 'star4';
                title = '技術レベル4';
                description = '問題なく言語を使えるだけでなく、その言語のライブラリを作ったり、フレームワークを作ることもできる';
            ">
            <div class="split-line"></div>
            <ul class="skill">
                <li><img src="/assets/logo/c.png" @click="
                    is_modal_opened = true;
                    imageName = 'c';
                    title = 'C言語';
                    description = '高専での授業、大学での授業での成果物に使用。５年以上触れており、問題なく様々なものを作成できる。';
                ">
                </li>
                <li><img src="/assets/logo/java.png" @click="
                    is_modal_opened = true;
                    imageName = 'java';
                    title = 'Java言語';
                    description = '高専での授業や普段の開発等で使用し、オブジェクト指向型言語の中で最も理解している言語。ゲームなどのやや規模の大きい開発なども行ったことがあり、独立性、再利用性、拡張性を考えつつ開発を行える。UMLを用い、システムの振る舞いを記述する事も可能。JavaベースのProcessingでの開発も得意。';
                "></li>
            </ul>
        </div>
        <div class="skill-row">
            <img class="star" src="/assets/logo/star3.png" @click="
                is_modal_opened = true;
                imageName = 'star3';
                title = '技術レベル3';
                description = '言語文法･開発環境について理解しており、必要に応じてリファレンスを見ながらプログラムを開発できる';
            ">
            <div class="split-line"></div>
            <ul class="skill">
                <li><img src="/assets/logo/cpp.png" @click="
                    is_modal_opened = true;
                    imageName = 'cpp';
                    title = 'C++';
                    description = '主に競技プログラミングで使用しており、Java言語と同じくリファレンスを参照しつつある程度の規模の開発を行うことが出来る。また、高専時の一部の数値計算プログラムなども作成していた。';
                "></li>
                <li><img src="/assets/logo/c-sharp.png" @click="
                    is_modal_opened = true;
                    imageName = 'c-sharp';
                    title = 'C#';
                    description = 'Unityでのプログラムや、高専でのWindows GUIアプリケーション開発等で主に使用。リファレンスなどを見つつ中規模程度の開発ならば可能。';
                "></li>
                <li><img src="/assets/logo/git.png" @click="
                    is_modal_opened = true;
                    imageName = 'git';
                    title = 'git関係';
                    description = '高専プログラミングコンテストやインターンシップ、ロボコン等でのチーム開発で主に使用。Gitlabを使い、issue作成をしつつ振りかえりを行うようなチーム開発も経験。また、一部の個人開発でも使用しており、基礎的なコマンドは理解している。';
                "></li>
                <li><img src="/assets/logo/python.png" @click="
                    is_modal_opened = true;
                    imageName = 'python';
                    title = 'Python';
                    description = '高専、大学の授業や研究等で主に使用しており、数値計算やシミュレーション、グラフのプロット等を行える。また、TensorFlowやPytorchなどの深層学習関連のコードや、ロボットの画像認識プログラム等の作成経験もある。必要に応じて、Javaのようにオブジェクト指向を意識したクラスの作成等も可能で、中規模程度のアプリケーションであれば作成可能。';
                "></li>
                <li><img src="/assets/logo/unity.png" @click="
                    is_modal_opened = true;
                    imageName = 'unity';
                    title = 'Unity';
                    description = '主に個人での3Dゲーム開発で使用。学祭でゲームランチャー等のUIアプリケーションも作成したことがあり、中規模のゲームを作成可能。';
                "></li>
                <li><img src="/assets/logo/html.png" @click="
                    is_modal_opened = true;
                    imageName = 'html';
                    title = 'HTML';
                    description = '学校での授業や、WEB系開発アルバイト、このポートフォリオ制作等で使用。基礎的な知識はあり、特に問題なく理解できる。';
                "></li>
                <li><img src="/assets/logo/vue.png" @click="
                    is_modal_opened = true;
                    imageName = 'vue';
                    title = 'Vue3';
                    description = 'WEB系開発アルバイトと、このポートフォリオサイトの作成で使用。適当なサイトやリファレンスを参照しながら中規模程度のWEBアプリの開発も可能。外部のライブラリや新しい要素の追加にも対応でき、WEB系の開発アルバイトではVue2からVue3への移行作業なども行った経験がある。';
                "></li>
                <li><img src="/assets/logo/gml.png" @click="
                    is_modal_opened = true;
                    imageName = 'gml';
                    title = 'GameMaker Studio';
                    description = '主に個人での2Dゲーム開発で使用。大きめのゲームを作成したこともあり、Unityと同じくらい扱うことができる。内部の独自言語であるGMLも特に問題なく使いこなすことができ、2Dゲームならば大きめのゲームも作成可能。';
                "></li>
            </ul>
        </div>
        <div class="skill-row">
            <img class="star" src="/assets/logo/star2.png" @click="
                is_modal_opened = true;
                imageName = 'star2';
                title = '技術レベル2';
                description = '言語文法･開発環境のリファレンスを常に見ながらであればプログラムを開発できる';
            ">
            <div class="split-line"></div>
            <ul class="skill">
                <li><img src="/assets/logo/opengl.png" @click="
                    is_modal_opened = true;
                    imageName = 'opengl';
                    title = 'OpenGL';
                    description = '2Dゲームなどでのシェーダーの開発時に使用。GLSLでのシェーダー作成を行うことができ、ある程度基礎的な知識は身に付けている。';
                "></li>
                <li><img src="/assets/logo/linux.png" @click="
                    is_modal_opened = true;
                    imageName = 'linux';
                    title = 'Linux';
                    description = '基礎的なコマンドはもちろん、WSLを用いた開発もコンテスト等で行ったことがあり問題なく使用できる。Raspberry Piを用いた電子工作も一部可能。';
                "></li>
                <li><img src="/assets/logo/react.png" @click="
                    is_modal_opened = true;
                    imageName = 'react';
                    title = 'React Native';
                    description = '高専プログラミングコンテストの成果物に使用。iOSとAndroid上で動作する簡単なアプリケーションや、やや中規模程度の開発を行うことが出来る。';
                "></li>
                <li><img src="/assets/logo/css.png" @click="
                    is_modal_opened = true;
                    imageName = 'css';
                    title = 'CSS';
                    description = '学校の授業やWEB系開発アルバイト、このポートフォリオサイト等で使用。調べながら、HTMLと併せて特に問題なく扱える。';
                "></li>
                <li><img src="/assets/logo/js.png" @click="
                    is_modal_opened = true;
                    imageName = 'js';
                    title = 'JavaScript';
                    description = '学校の授業やWEB系開発アルバイト、このポートフォリオサイト等で使用。調べながら、HTMLと併せて特に問題なく扱える。';
                "></li>
                <li><img src="/assets/logo/ts.png" @click="
                    is_modal_opened = true;
                    imageName = 'ts';
                    title = 'TypeScript';
                    description = 'WEB系開発アルバイト、このポートフォリオサイト等で一部使用。調べながらであればある程度扱える。';
                "></li>
                <li><img src="/assets/logo/sql.png" @click="
                    is_modal_opened = true;
                    imageName = 'sql';
                    title = 'SQL系';
                    description = '学校のデータベースでの授業やWEB系開発アルバイトで使用。主に顧客や商品のデータに関する一連の処理などを実装することが出来る。必要なクエリについては都度調べながら実装できる。';
                "></li>
                <li><img src="/assets/logo/php.png" @click="
                    is_modal_opened = true;
                    imageName = 'php';
                    title = 'PHP';
                    description = '中学校時の携帯ゲーム「Minecraft:PE」でのサーバープラグイン開発で主に使用。そのため従来のPHPの使い方の理解とは少し異なるが、基礎的な文法などの知識はある。当時は1万行クラスのコードを書いており、チーム戦のゲームなども作っていた。';
                "></li>
            </ul>
        </div>
        <div class="skill-row">
            <img class="star" src="/assets/logo/star1.png" @click="
                is_modal_opened = true;
                imageName = 'star1';
                title = '技術レベル1';
                description = '授業などで触れたことがある程度。実用的なプログラムの開発経験はない';
            ">
            <div class="split-line split-line-last"></div>
            <ul class="skill">
                <li><img src="/assets/logo/docker.png" @click="
                    is_modal_opened = true;
                    imageName = 'docker';
                    title = 'Docker';
                    description = '開発過程で時々扱う程度で、あまり理解度は高くない。一部のコマンドの理解と、コンテナの仕組みについての基礎知識がある程度。';
                "></li>
                <li><img src="/assets/logo/ros.png" @click="
                    is_modal_opened = true;
                    imageName = 'ros';
                    title = 'ROS';
                    description = '大学でのNHKロボコンへ向けてのシミュレーター制作で使用。Gazebo、rvizなどと併せてWSL上で開発を行った。正直調べながらなんとなくで実装しており、理解しているかは微妙。';
                "></li>
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
        padding-top: 32px;
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
            .split-line-last{
                margin-top: -10px;
                margin-bottom: 40px;
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
            margin-top: -30px;
            width: 100%;
            max-width: 1000px;
            height: 100%;
            max-height: 60px;
            padding-bottom: 32px;
            color: black;
        }
    }
    img {
        width: 100%;
        max-width: 85px;
        height: 100%;
        max-height: 85px;
        padding-right: 10px;
        aspect-ratio: 1 / 1;
    }
    img:hover{
        transform: scale(1.2, 1.2);
        transition: 0.15s;
        //border-bottom: 5px solid rgba(255, 0, 0, 0.7);
    }
</style>