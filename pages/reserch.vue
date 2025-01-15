<script>
  import ReserchCanvasComponent from "~/components/ReserchCanvasComponent.vue";
  definePageMeta({
    layout: false,
  });
  export default {
    components: {
      ReserchCanvasComponent,
    }
  };
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #canvas>
        <ReserchCanvasComponent/>
      </template>
            
      <!- メインページ -!>
      <div class="container">
        研究紹介
      </div>

    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    font-size: 20px;
    color: #c514dd;
  }
</style>