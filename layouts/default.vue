<template>
    <div>
        <div class="container">
            <Head>
                <Title>portfolio-test</Title>
            </Head>
            <!– ページ上部 –>
            <div class="top_container">
              <!- ページタイトル部分 ->
              <div class="page_title"> Ryutaro - Portfolio </div>
              
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
    }
    .page_title{
      font-size: 20px;
      color: #FFF;
      padding: 5%;
      height: 1%;
    }
    .page_canvas{
      font-size: 20px;
      color: #000;  
      height: 50%;
    }
  }
</style>