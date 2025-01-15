<script>
  import HomeCanvasComponent from "~/components/HomeCanvasComponent.vue";
  definePageMeta({
    layout: false,
  });
  export default {
    components: {
      HomeCanvasComponent,
    }
  };
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #canvas>
        <HomeCanvasComponent/>
      </template>
            
      <!- メインページ -!>
      <div class="container">
        自己紹介
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