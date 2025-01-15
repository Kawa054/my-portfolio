<script>
  import ContactCanvasComponent from "~/components/ContactCanvasComponent.vue";
  definePageMeta({
    layout: false,
  });
  export default {
    components: {
      ContactCanvasComponent,
    }
  };
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #canvas>
        <ContactCanvasComponent/>
      </template>
            
      <!- メインページ -!>
      <div class="container">
        連絡先
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