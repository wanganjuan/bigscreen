<template>
  <ScrollTable :list="rankList" />
</template>

<script>
import ScrollTable from '../components/scroll-item/table.vue'

export default {
  components: { ScrollTable },
  data() {
    return {
      rankList: [
        { name: '张三', score: 98, trend: 'up' },
        { name: '李四', score: 95, trend: 'down' },
        { name: '王五', score: 93, trend: 'up' },
        { name: '赵六', score: 92, trend: 'none' },
        { name: '钱七', score: 90, trend: 'up' },
        { name: '孙八', score: 88, trend: 'down' },
        { name: '周九', score: 87, trend: 'up' }
      ]
    }
  }
}
</script>
