<template>
  <div class="center_bottom">
    <Echart
      :options="options"
      id="bottomLeftChart"
      class="echarts_bottom"
    ></Echart>
  </div>
</template>

<script>
import Echart from '../components/echart/index.vue'
import { graphic } from "echarts";

export default {
  components: {Echart},
  data() {
    return {
      options: {},
    };
  },
  props: {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const res = {"success":true,"data":{"barData":[42,82,55,76,17,94,30,72,73,12,66,30,96,20,68,47,27,68,29,75,69,67,17,56,37,70,52,74,37,53],"category":["2025-9-22","2025-9-23","2025-9-24","2025-9-25","2025-9-26","2025-9-27","2025-9-28","2025-9-29","2025-9-30","2025-10-1","2025-10-2","2025-10-3","2025-10-4","2025-10-5","2025-10-6","2025-10-7","2025-10-8","2025-10-9","2025-10-10","2025-10-11","2025-10-12","2025-10-13","2025-10-14","2025-10-15","2025-10-16","2025-10-17","2025-10-18","2025-10-19","2025-10-20","2025-10-21"],"lineData":[112,126,86,171,100,151,103,108,98,88,110,121,182,61,142,121,51,76,58,133,145,71,112,91,70,164,115,80,51,81],"rateData":["38","65","64","44","17","62","29","67","74","14","60","25","53","33","48","39","53","89","50","56","48","94","15","62","53","43","45","93","73","65"]}}
     this.init(res.data);
    },
    init(newData) {
      this.options = {
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
              if (item.value) {
                if (item.seriesName == "安装率") {
                  result +=
                    item.marker +
                    " " +
                    item.seriesName +
                    " : " +
                    item.value +
                    "%</br>";
                } else {
                  result +=
                    item.marker +
                    " " +
                    item.seriesName +
                    " : " +
                    item.value +
                    "个</br>";
                }
              } else {
                result += item.marker + " " + item.seriesName + " :  - </br>";
              }
            });
            return result;
          },
        },
        legend: {
          data: ['反馈量',"反馈率"],
          textStyle: {
            color: "#B4B4B4",
          },
          top: "0",
        },
        grid: {
          left: "50px",
          right: "40px",
          bottom: "30px",
          top: "20px",
        },
        xAxis: {
          data: newData.category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
              },
            },

            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
              },
            },
            axisLabel: {
              formatter: "{value}% ",
            },
          },
        ],
        series: [
          // {
          //   name: "借贷方发生额差值",
          //   type: "bar",
          //   barWidth: 10,
          //   itemStyle: {
          //     borderRadius: 5,
          //     color: new graphic.LinearGradient(0, 0, 0, 1, [
          //       { offset: 0, color: "#956FD4" },
          //       { offset: 1, color: "#3EACE5" },
          //     ]),
          //   },
          //   data: newData.barData,
          // },
          {
            name: "反馈量",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              borderRadius: 5,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(156,107,211,0.8)" },
                { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                { offset: 1, color: "rgba(156,107,211,0.2)" },
              ]),
            },
            z: -12,
            data: newData.lineData,
          },
          {
            name: "反馈率",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              color: "#F02FC2",
            },
            data: newData.rateData,
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.center_bottom {
  width: 100%;
  height: 100%;

  .echarts_bottom {
    width: 100%;
    height: 100%;
  }
}
</style>
