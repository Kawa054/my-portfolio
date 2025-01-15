<script>
  import WorksCanvasComponent from "~/components/WorksCanvasComponent.vue";
  definePageMeta({
    layout: false,
  });
  export default {
    components: {
      WorksCanvasComponent,
    }
  };
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #canvas>
        <WorksCanvasComponent/>
      </template>
            
      <!- メインページ -!>
      <div class="container">
        作品等
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