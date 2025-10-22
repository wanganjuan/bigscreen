<template>
  <div class="right_bottom">
    <dv-capsule-chart :config="config" style="width: 100%; height: 260px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gatewayno: "",
      config: {
        showValue: true,
        unit: "次",
        data: [],
      },
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  mounted() {},

  methods: {
  

    getData() {
      const res = {
        success: true,
        data: [
          { value: 888, name: "秦皇岛市" },
          { value: 859, name: "晋中市" },
          { value: 783, name: "来宾市" },
          { value: 531, name: "铜陵市" },
          { value: 427, name: "海北藏族自治州" },
          { value: 335, name: "铁岭市" },
          { value: 304, name: "昌都地区" },
          { value: 226, name: "西双版纳傣族自治州" },
        ],
      };

      this.config = {
        ...this.config,
        data: res.data,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.list_Wrap {
  height: 100%;
  overflow: hidden;
  :deep(.kong) {
    width: auto;
  }
}

.sbtxSwiperclass {
  .img_wrap {
    overflow-x: auto;
  }
}

.right_bottom {
  box-sizing: border-box;
  padding: 0 16px;

  .searchform {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    .searchform_item {
      display: flex;
      justify-content: center;
      align-items: center;

      label {
        margin-right: 10px;
        color: rgba(255, 255, 255, 0.8);
      }

      button {
        margin-left: 30px;
      }

      input {
      }
    }
  }

  .img_wrap {
    display: flex;
    // justify-content: space-around;
    box-sizing: border-box;
    padding: 0 0 20px;
    // overflow-x: auto;

    li {
      width: 105px;
      height: 137px;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      // background: #84ccc9;
      // border: 1px solid #ffffff;
      overflow: hidden;
      flex-shrink: 0;
      margin: 0 10px;

      img {
        flex-shrink: 0;
      }
    }
  }

  .noData {
    width: 100%;
    line-height: 100px;
    text-align: center;
    color: rgb(129, 128, 128);
  }
}
</style>
