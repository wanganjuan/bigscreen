<template>
  <ScaleScreen :width="1920" :height="1080" class="scale-wrap">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 头部 s -->
        <TopHeader></TopHeader>
        <!-- 头部 e-->
        <!-- 内容  s-->
        <Content></Content>
        <!-- 内容 e -->
      </div>
    </div>
  </ScaleScreen>
  <!-- </div> -->
</template>

<script>
import ScaleScreen from "./components/scale-screen/scale-screen.vue";
import Content from "./content/index.vue";
import TopHeader from "./top-header.vue";

export default {
  components: { ScaleScreen, Content ,TopHeader},
  data() {
    return {
      loading: true,
    };
  },

  computed: {},
  created() {},
  mounted() {
    this.cancelLoading();
  },

  methods: {
    cancelLoading() {
      let timer = setTimeout(() => {
        this.loading = false;
        clearTimeout(timer);
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "./home.scss";
</style>
