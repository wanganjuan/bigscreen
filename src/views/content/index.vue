<!-- 下面内容是 994 ，其实还要减6 ，988， 但是里面的内容 基本上不到988，950左右，通过flex ，两边对齐的效果
 给人感觉对齐的效果的 -->
<template>
  <div class="contents">
    <div class="contetn_left">
      <ItemWrap
        class="contetn_left-center contetn_lr-item"
        title="系统对账统计报表【总行】"
      >
        <LeftCenter />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-center contetn_lr-item"
        title="系统对账统计报表【分行】"
      >
        <LeftTop />
      </ItemWrap>
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="待办统计图">
        <RightBottom1 />
      </ItemWrap>
    </div>
    <div class="contetn_center">
      <CenterMap class="contetn_center_top" />
      <ItemWrap class="contetn_center-bottom" title="超结算周期应收应付款">
        <CenterBottom />
      </ItemWrap>
    </div>
    <div class="contetn_right">
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="短信通知率(%)"
      >
        <RightTop />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="夯实率(%)"
        style="padding: 0 10px 16px 10px"
      >
        <RightCenter />
      </ItemWrap>
      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="业务部门挂账反馈信息"
      >
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>

<script>
import LeftTop from "./left-top.vue";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./bs-table.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-center-3.vue";
import RightBottom1 from "./left-bottom.vue";
import ItemWrap from "../components/item-wrap/item-wrap.vue";
export default {
  components: {
    ItemWrap,
    LeftTop,
    LeftCenter,
    LeftBottom,
    CenterMap,
    RightTop,
    RightCenter,
    RightBottom,
    CenterBottom,
    RightBottom1,
  },
  data() {
    return {};
  },
  filters: {
    numsFilter(msg) {
      return msg || 0;
    },
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
// 内容
.contents {
  .contetn_left,
  .contetn_right {
    width: 540px;
    box-sizing: border-box;
    // padding: 16px 0;
  }

  .contetn_center {
    width: 746px;
  }

  //左右两侧 三个块
  .contetn_lr-item {
    height: 310px;
  }

  .contetn_center_top {
    width: 100%;
  }

  // 中间
  .contetn_center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .contetn_center-bottom {
    // height: 315px;
    height: 315px;
  }

  //左边 右边 结构一样
  .contetn_left,
  .contetn_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
  }
}

@keyframes rotating {
  0% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(1.1);
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>
