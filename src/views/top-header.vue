<template>
  <div class="d-flex jc-center title_wrap">
    <div class="zuojuxing"></div>
    <div class="youjuxing"></div>
    <div class="guang"></div>
    <div class="d-flex jc-center">
      <div class="title">
        <span class="title-text">可配置演示系统大屏可视化</span>
      </div>
    </div>
    <div class="timers"><TimeDesc /></div>
  </div>
</template>
<script>
import TimeDesc from './time-desc.vue';
export default {
 components: {
  TimeDesc
 },


};
</script>

<style lang="scss" scoped>
  .title_wrap {
    height: 60px;
    background-image: url("./img/top.png");
    background-size: cover;
    background-position: center center;
    position: relative;
    margin-bottom: 4px;

    .guang {
        position: absolute;
        bottom: -26px;
        background-image: url("./img/guang.png");
        background-position: 80px center;
        width: 100%;
        height: 56px;
    }

    .zuojuxing,
    .youjuxing {
        position: absolute;
        top: -2px;
        width: 140px;
        height: 6px;
        background-image: url("./img/headers/juxing1.png");
    }

    .zuojuxing {

        left: 11%;
    }

    .youjuxing {
        right: 11%;
        transform: rotate(180deg);
    }

    .timers {
        position: absolute;
        right: 0;
        top: 30px;
        font-size: 18px;
        display: flex;
        align-items: center;

        .blq-icon-shezhi02 {
            cursor: pointer;
        }
    }
}

  .title {
      position: relative;
      // width: 500px;
      text-align: center;
      background-size: cover;
      color: transparent;
      height: 60px;
      line-height: 46px;

      .title-text {
          font-size: 38px;
          font-weight: 900;
          letter-spacing: 6px;
          width: 100%;
          background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }
  }
</style>
