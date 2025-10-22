<template>
  <!-- 下面内容是 994 ，其实还要减6 ，988， 但是里面的内容 基本上不到988，950左右，通过flex ，两边对齐的效果
 给人感觉对齐的效果的 -->

  <div class="main-content">
    <digital-flop />

    <div class="block-left-right-content">
      <ranking-board />

      <div class="block-top-bottom-content">
        <div class="block-top-content">
          <rose-chart />

          <water-level-chart />

          <scroll-board />
        </div>

        <cards />
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from "./topHeader";
import digitalFlop from "./digitalFlop";
import rankingBoard from "./rankingBoard";
import roseChart from "./roseChart";
import waterLevelChart from "./waterLevelChart";
import scrollBoard from "./scrollBoard";
import cards from "./cards";

export default {
  name: "DataView",
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">


  .main-content {
    padding-top: 10px;
    height: 976px;
    display: flex;
    flex-direction: column;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
</style>
