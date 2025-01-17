<template>
    <div>
        <div class="container">
            <Head>
              <Title>portfolio-test</Title>
            </Head>
            <!– ページ上部 –>
            <div class="top_container">
              
              <!- ページタイトル部分 ->
              <div class="title"> 
                <h1 class="title_main">
                  Portfolio
                </h1>
                <h2 class="title_sub">
                  Ryutaro Ichikawa
                </h2>
                  
                <!- ヘッダー部分 ->
                <HeaderComponent @change-header-hover="recieve_hover_id" class="header"/>
              </div>

              <!- キャンバス部分 ->
              <div class="page_canvas"> 
                <component :is="canvas[currentCanvas]"></component>
              </div>

            </div>

            <!– ページ下部 –>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
  import { ref } from 'vue'
  import HomeCanvasComponent from "~/components/HomeCanvasComponent.vue";
  import AboutCanvasComponent from "~/components/AboutCanvasComponent.vue";
  import WorksCanvasComponent from "~/components/WorksCanvasComponent.vue";
  import ReserchCanvasComponent from "~/components/ReserchCanvasComponent.vue";
  import ContactCanvasComponent from "~/components/ContactCanvasComponent.vue";
  import HeaderComponent from "~/components/HeaderComponent.vue";

  const currentCanvas = ref("AboutCanvasComponent");

  const recieve_hover_id = (data) => {
    const str = ["HomeCanvasComponent", "AboutCanvasComponent", "WorksCanvasComponent", "ReserchCanvasComponent", "ContactCanvasComponent"]
    currentCanvas.value = ref(str[data]).value;
  };

  const canvas = {
    HomeCanvasComponent,
    AboutCanvasComponent,
    WorksCanvasComponent,
    ReserchCanvasComponent,
    ContactCanvasComponent
  }

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

  .container {
    .top_container{
      background-color: #000;
      text-align: center;
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      .page_canvas{
        width: 100%;
        height: 100%;
      }
      .title {
        position: absolute;
        z-index: 20;
        width: 100%;
        left: -24%;
        text-decoration-color: #fff;
        pointer-events: none;
        .title_main{
          color: #000;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          font-family: "Dancing Script", serif;
          font-size: 152px;
          font-weight: 500;
          font-style: normal;
        }
        .title_sub{
          color: #fff;
          font-family: "Dancing Script", serif;
          font-size: 48px;
          font-weight: 500;
          font-style: normal;
          position: relative;
          bottom: 80px;
          left: -80px;
        }
      }
      .header{
        position: relative;
        z-index: 30;
        pointer-events: auto;
        left: 24%;
        margin-top: 360px;
      }
    }
  }
</style>