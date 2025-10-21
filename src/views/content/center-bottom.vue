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
import Echart from "../components/echart/index.vue";
import { graphic } from "echarts";
export default {
  components: { Echart },
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
      const res = {
        success: true,
        data: {
          barData: [
            27, 15, 66, 62, 92, 77, 98, 99, 19, 54, 51, 10, 40, 71, 61, 13, 54,
            13, 86, 86, 89, 98, 13, 77, 52, 63, 49, 11, 14, 51,
          ],
          category: [
            "2025-9-20",
            "2025-9-21",
            "2025-9-22",
            "2025-9-23",
            "2025-9-24",
            "2025-9-25",
            "2025-9-26",
            "2025-9-27",
            "2025-9-28",
            "2025-9-29",
            "2025-9-30",
            "2025-10-1",
            "2025-10-2",
            "2025-10-3",
            "2025-10-4",
            "2025-10-5",
            "2025-10-6",
            "2025-10-7",
            "2025-10-8",
            "2025-10-9",
            "2025-10-10",
            "2025-10-11",
            "2025-10-12",
            "2025-10-13",
            "2025-10-14",
            "2025-10-15",
            "2025-10-16",
            "2025-10-17",
            "2025-10-18",
            "2025-10-19",
          ],
          lineData: [
            57, 30, 115, 122, 122, 142, 189, 133, 89, 58, 79, 38, 98, 159, 84,
            89, 144, 65, 166, 176, 173, 147, 51, 81, 72, 86, 133, 35, 44, 104,
          ],
          rateData: [
            "47",
            "50",
            "57",
            "51",
            "75",
            "54",
            "52",
            "74",
            "21",
            "93",
            "65",
            "26",
            "41",
            "45",
            "73",
            "15",
            "38",
            "20",
            "52",
            "49",
            "51",
            "67",
            "25",
            "95",
            "72",
            "73",
            "37",
            "31",
            "32",
            "49",
          ],
        },
      };

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
          data: ["借贷方发生额差值"],
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
          {
            name: "借贷方发生额差值",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              borderRadius: 5,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#956FD4" },
                { offset: 1, color: "#3EACE5" },
              ]),
            },
            data: newData.barData,
          },
          // {
          //   name: "计划安装",
          //   type: "bar",
          //   barGap: "-100%",
          //   barWidth: 10,
          //   itemStyle: {
          //     borderRadius: 5,
          //     color: new graphic.LinearGradient(0, 0, 0, 1, [
          //       { offset: 0, color: "rgba(156,107,211,0.8)" },
          //       { offset: 0.2, color: "rgba(156,107,211,0.5)" },
          //       { offset: 1, color: "rgba(156,107,211,0.2)" },
          //     ]),
          //   },
          //   z: -12,
          //   data: newData.lineData,
          // },
          // {
          //   name: "安装率",
          //   type: "line",
          //   smooth: true,
          //   showAllSymbol: true,
          //   symbol: "emptyCircle",
          //   symbolSize: 8,
          //   yAxisIndex: 1,
          //   itemStyle: {
          //     color: "#F02FC2",
          //   },
          //   data: newData.rateData,
          // },
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
