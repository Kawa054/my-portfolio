<script>
  import AboutCanvasComponent from "~/components/AboutCanvasComponent.vue";
  definePageMeta({
    layout: false,
  });
  export default {
    components: {
      AboutCanvasComponent,
    }
  };
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #canvas>
        <AboutCanvasComponent/>
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