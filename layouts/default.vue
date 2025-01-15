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
                <h2 class="text-3xl font-italic">
                  Ryutaro - Portfolio 
                </h2>
              </div>

              <!- キャンバス部分 ->
              <div class="page_canvas"> 
                <CanvasComponent />
              </div>

              <!- ヘッダー部分 ->
              <HeaderComponent />

            </div>
            <!– ページ下部 –>
            <main>
                <slot class="slot" />
            </main>
        </div>
    </div>
</template>

<script>
  import CanvasComponent from "~/components/CanvasComponent.vue";
  import HeaderComponent from "~/components/HeaderComponent.vue";

  export default {
    components: {
      CanvasComponent,
      HeaderComponent,
    }
  };
</script>

<style lang="scss" scoped>
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
        height: 70%;
      }
      .title {
        color: #fff; 
        font-size: 30px;
        font-family: 'Amiri', serif;
        position: absolute;
        z-index: 20;
        width: 100%;
        height: 100%;
        text-decoration-color: #fff;
        pointer-events: none;
      }
    }
  }
</style>