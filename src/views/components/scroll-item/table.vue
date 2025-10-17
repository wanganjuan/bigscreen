<template>
  <div
    class="scroll-table"
    @mouseenter="pauseScroll"
    @mouseleave="resumeScroll"
  >
    <!-- 表头 -->
    <div class="table-header">
      <div class="col rank">排名</div>
      <div class="col name">姓名</div>
      <div class="col score">得分</div>
      <div class="col trend">趋势</div>
    </div>

    <!-- 滚动区域 -->
    <div class="scroll-body"    :class="{'scroll-body-no-auto': !isScroll}">
      <div
        class="scroll-content"
     
        :style="{ transform: 'translateY(-' + scrollTop + 'px)' }"
      >
        <!-- 原始数据 -->
        <div
          v-for="(item, index) in list"
          :key="'a' + index"
          class="row"
          :class="{ odd: index % 2 === 1 }"
          :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        >
          <div class="col rank">{{ index + 1 }}</div>
          <div class="col name">{{ item.name }}</div>
          <div class="col score">{{ item.score }}</div>
          <div class="col trend">
            <span :class="item.trend">{{
              item.trend === "up" ? "▲" : item.trend === "down" ? "▼" : "-"
            }}</span>
          </div>
        </div>

        <!-- 克隆一份 -->
        <div
          v-if="isScroll"
          v-for="(item, index) in list"
          :key="'b' + index"
          class="row"
          :class="{ odd: index % 2 === 1 }"
          :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        >
          <div class="col rank">{{ index + 1 }}</div>
          <div class="col name">{{ item.name }}</div>
          <div class="col score">{{ item.score }}</div>
          <div class="col trend">
            <span :class="item.trend">{{
              item.trend === "up" ? "▲" : item.trend === "down" ? "▼" : "-"
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollTable",
  props: {
    list: { type: Array, default: () => [] },
    itemHeight: { type: Number, default: 50 },
    speed: { type: Number, default: 0.6 }, // 每帧滚动像素
    isScroll: { type: Boolean, default: false }, // ✅ 是否滚动开关
  },
  data() {
    return {
      scrollTop: 0,
      animationFrame: null,
      paused: false,
    };
  },
  watch: {
    // 当开关变化时，自动控制滚动状态
    isScroll(newVal) {
      if (newVal) {
        this.startScroll();
      } else {
        this.stopScroll();
      }
    },
  },
  mounted() {
    if (this.isScroll) {
      this.startScroll();
    }
  },
  beforeDestroy() {
    this.stopScroll();
  },
  methods: {
    startScroll() {
      this.stopScroll(); // 防止重复动画帧
      const totalHeight = this.list.length * this.itemHeight;
      const step = () => {
        if (!this.paused && this.isScroll) {
          this.scrollTop += this.speed;
          if (this.scrollTop >= totalHeight) this.scrollTop = 0;
        }
        this.animationFrame = requestAnimationFrame(step);
      };
      step();
    },
    stopScroll() {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
      }
    },
    pauseScroll() {
      this.paused = true;
    },
    resumeScroll() {
      this.paused = false;
    },
  },
};
</script>

<style scoped>
.scroll-table {
  width: 100%;
  height: calc(100% - 12px);
  background: rgba(0, 20, 50, 0.85);
  border-radius: 8px;
  color: #fff;
  overflow: hidden;
  font-family: "Microsoft YaHei", sans-serif;
  border: 1px solid rgba(0, 180, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 150, 255, 0.1);
}

/* 表头 */
.table-header {
  display: flex;
  background: linear-gradient(90deg, #0078d7 0%, #00b7ff 100%);
  color: #fff;
  font-weight: bold;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.scroll-body {
  height: 100%; /* 可视区域高度 */
  overflow: hidden;
  position: relative;
  &.scroll-body-no-auto {
     overflow: auto;
  }
}

.scroll-content {
  will-change: transform;
}

.row {
  display: flex;
  text-align: center;
  transition: background 0.3s;
}

.row.odd {
  background: rgba(255, 255, 255, 0.04);
}

.row:hover {
  background: rgba(0, 180, 255, 0.2);
}

/* 列样式 */
.col {
  flex: 1;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}
.rank {
  width: 80px;
  flex: 0 0 80px;
}
.name {
  flex: 1;
  text-align: left;
  padding-left: 16px;
}
.score {
  width: 100px;
  flex: 0 0 100px;
}
.trend {
  width: 80px;
  flex: 0 0 80px;
}
.trend .up {
  color: #00ff8c;
}
.trend .down {
  color: #ff4d4d;
}
</style>
