<template>
  <div class="scroll-list" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
    <div class="scroll-content" :style="{ transform: 'translateY(-' + scrollTop + 'px)' }">
      <!-- 原始列表 -->
      <div
        v-for="(item, index) in list"
        :key="'a' + index"
        class="scroll-item"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        <slot :item="item" :index="index"></slot>
      </div>
      <!-- 克隆一份，实现无缝连续 -->
      <div
        v-for="(item, index) in list"
        :key="'b' + index"
        class="scroll-item"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollList',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    itemHeight: {
      type: Number,
      default: 40
    },
    speed: {
      type: Number,
      default: 0.3 // 每帧滚动的像素值，越大越快
    }
  },
  data() {
    return {
      scrollTop: 0,
      animationFrame: null,
      paused: false
    }
  },
  mounted() {
    this.startScroll()
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animationFrame)
  },
  methods: {
    startScroll() {
      const totalHeight = this.list.length * this.itemHeight
      const step = () => {
        if (!this.paused) {
          this.scrollTop += this.speed
          if (this.scrollTop >= totalHeight) {
            // 滚动到底部后立即无缝重置
            this.scrollTop = 0
          }
        }
        this.animationFrame = requestAnimationFrame(step)
      }
      step()
    },
    pauseScroll() {
      this.paused = true
    },
    resumeScroll() {
      this.paused = false
    }
  }
}
</script>

<style scoped>
.scroll-list {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.scroll-content {
  will-change: transform;
}
.scroll-item {
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
