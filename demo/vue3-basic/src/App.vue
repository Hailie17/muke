<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  setup() {
    // 需要 .value 来访问值
    const count = ref(0)
    // 参数
    // 只能是 Object
    const like = reactive({
      age: 22,
      name: 'lili'
    })
    // computed 计算属性
    // 基于响应式依赖被缓存
    // 计算属性默认只读
    const buttonStatus = computed(() => {
      return {
        text: like.age >= 10 ? '可以参与' : '未满10岁不可以参加',
        disabled: like.age < 10
      }
    })
    const increase = () => {
      count.value++
      like.age ++
    }
    return {
      count,
      increase,
      like,
      buttonStatus
    }
  }
})
</script>

<template>
  <div>
    <h1>{{ like.age }}</h1>
    <button type="button" @click="increase">点我加</button>
    <button type="button" :disabled="buttonStatus.disabled">{{ buttonStatus.text }}</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
