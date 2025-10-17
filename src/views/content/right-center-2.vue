
<template>
  <Echart
    id="rightTop"
    :options="option"
    class="right_top_inner"
    v-if="pageflag"
    ref="charts"
  />
</template>

<script>
import Echart from "../components/echart/index.vue";
import { currentGET } from "api/modules";
import { graphic } from "echarts";
export default {
  components: { Echart },
  data() {
    return {
      option: {},
      pageflag: false,
      timer: null,
    };
  },
  created() {},

  mounted() {
    this.getData();
  },
  beforeDestroy() {
    this.clearData();
  },
  methods: {
    clearData() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    getData() {
      this.pageflag = true;
      // this.pageflag =false
      currentGET("big4").then((res) => {
        if (!this.timer) {
          console.log("报警次数", res);
        }
        if (res.success) {
          this.countUserNumData = res.data;
          this.$nextTick(() => {
            this.init(res.data.dateList, res.data.numList, res.data.numList2);
            // this.switper();
          });
        } else {
          this.pageflag = false;
          this.$Message({
            text: res.msg,
            type: "warning",
          });
        }
      });
    },
    //轮询
    switper() {
      if (this.timer) {
        return;
      }
      let looper = (a) => {
        this.getData();
      };
   
      let myChart = this.$refs.charts.chart;
      myChart.on("mouseover", (params) => {
        this.clearData();
      });
   
    },
    init(xData, yData, yData2) {
      this.option = {
        xAxis: {
          type: "category",
          data: xData,
          boundaryGap: false, // 不留白，从原点开始
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(31,99,163,.2)",
            },
          },
          axisLine: {
            // show:false,
            lineStyle: {
              color: "rgba(31,99,163,.1)",
            },
          },
          axisLabel: {
            color: "#7EB7FD",
            fontWeight: "500",
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(31,99,163,.2)",
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(31,99,163,.1)",
            },
          },
          axisLabel: {
            color: "#7EB7FD",
            fontWeight: "500",
          },
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, .8)",
          textStyle: {
            color: "#FFF",
          },
          formatter: function (params) {
            // 添加单位
            var result = params[0].name + "<br>";
            params.forEach(function (item) {
              result +=
                item.marker +
                " " +
                item.seriesName +
                " : " +
                item.value +
                "%</br>";
            });
            return result;
          },
        },
        grid: {
          //布局
          show: true,
          left: "10px",
          right: "30px",
          bottom: "10px",
          top: "28px",
          containLabel: true,
          borderColor: "#1F63A3",
        },
        series: [
          // {
          //   data: yData,
          //   type: "line",
          //   smooth: true,
          //   symbol: "none", //去除点
          //   name: "短信通知率",
          //   color: "rgba(252,144,16,.7)",
          //   areaStyle: {
          //     //右，下，左，上
          //     color: new graphic.LinearGradient(
          //       0,
          //       0,
          //       0,
          //       1,
          //       [
          //         {
          //           offset: 0,
          //           color: "rgba(252,144,16,.7)",
          //         },
          //         {
          //           offset: 1,
          //           color: "rgba(252,144,16,.0)",
          //         },
          //       ],
          //       false
          //     ),
          //   },
          //   markPoint: {
          //     data: [
          //       {
          //         name: "最大值",
          //         type: "max",
          //         valueDim: "y",
          //         symbol: "rect",
          //         symbolSize: [60, 26],
          //         symbolOffset: [0, -20],
          //         itemStyle: {
          //           color: "rgba(0,0,0,0)",
          //         },
          //         label: {
          //           color: "#FC9010",
          //           backgroundColor: "rgba(252,144,16,0.1)",
          //           borderRadius: 6,
          //           padding: [7, 14],
          //           borderWidth: 0.5,
          //           borderColor: "rgba(252,144,16,.5)",
          //           formatter: "{c}%",
          //         },
          //       },
          //       {
          //         name: "最大值",
          //         type: "max",
          //         valueDim: "y",
          //         symbol: "circle",
          //         symbolSize: 6,
          //         itemStyle: {
          //           color: "#FC9010",
          //           shadowColor: "#FC9010",
          //           shadowBlur: 8,
          //         },
          //         label: {
          //           formatter: "",
          //         },
          //       },
          //     ],
          //   },
          // },
          {
            data: yData2,
            type: "line",
            smooth: true,
            symbol: "none", //去除点
            name: "夯实率",
            color: "rgba(9,202,243,.7)",
            areaStyle: {
              //右，下，左，上
              color: new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(9,202,243,.7)",
                  },
                  {
                    offset: 1,
                    color: "rgba(9,202,243,.0)",
                  },
                ],
                false
              ),
            },
            markPoint: {
              data: [
                {
                  name: "最大值",
                  type: "max",
                  valueDim: "y",
                  symbol: "rect",
                  symbolSize: [60, 26],
                  symbolOffset: [0, -20],
                  itemStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                  label: {
                    color: "#09CAF3",
                    backgroundColor: "rgba(9,202,243,0.1)",

                    borderRadius: 6,
                    borderColor: "rgba(9,202,243,.5)",
                    padding: [7, 14],
                    formatter: "{c}%",
                    borderWidth: 0.5,
                  },
                },
                {
                  name: "最大值",
                  type: "max",
                  valueDim: "y",
                  symbol: "circle",
                  symbolSize: 6,
                  itemStyle: {
                    color: "#09CAF3",
                    shadowColor: "#09CAF3",
                    shadowBlur: 8,
                  },
                  label: {
                    formatter: "",
                  },
                },
              ],
            },
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.right_top_inner {
  margin-top: -8px;
}
</style>
