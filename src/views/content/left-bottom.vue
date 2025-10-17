<template>
  <div class="board">
    <ScrollList :list="rankList" :itemHeight="50" :speed="2">
      <template v-slot="{ item, index }">
        <div class="row">
          <div class="rank">{{ index + 1 }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="score">{{ item.score }}</div>
        </div>
      </template>
    </ScrollList>
  </div>
</template>

<script>
import ScrollList from '../components/scroll-item/index.vue'

export default {
  components: { ScrollList },
  data() {
    return {
      rankList: [
        { name: '张三', score: 98 },
        { name: '李四', score: 95 },
        { name: '王五', score: 93 },
        { name: '赵六', score: 92 },
        { name: '钱七', score: 90 },
      ]
    }
  }
}
</script>

<style scoped>
.board {
  width: 100%;
  height: calc(100% - 12px);
  background: rgba(0, 20, 40, 0.9);
  border-radius: 6px;
}
.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.rank {
  width: 40px;
  text-align: center;
  font-weight: bold;
}
.name {
  flex: 1;
}
.score {
  width: 60px;
  text-align: right;
}
</style>
