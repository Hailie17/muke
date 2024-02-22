<script lang="ts">
import { defineComponent, ref, reactive, computed, watch, onMounted, onUnmounted, onUpdated } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MyProfile from './components/MyProfile.vue'
import useMousePositon from './hooks/useMousePosition'
export default defineComponent({
  name: 'App',
  components: {
    MyProfile
  },
  setup() {
    // 需要 .value 来访问值
    const count = ref(0)
    // 模板引用 ref
    const headline = ref<null | HTMLElement> (null)
    // 参数
    // 只能是 Object
    const like = reactive({
      age: 22,
      name: 'lili'
    })
    const {x, y} = useMousePositon() 
    // computed 计算属性
    // 基于响应式依赖被缓存
    // 计算属性默认只读
    const buttonStatus = computed(() => {
      return {
        text: like.age >= 10 ? '可以参与' : '未满10岁不可以参加',
        disabled: like.age < 10
      }
    })
    // watch 三种写法
    // ref
    // 函数 写法
    // reactive
    watch(count, (newVal, oldVal) => {
      console.log(newVal, 'new');
      console.log(oldVal, 'old');
    })
    const increase = () => {
      count.value++
      like.age ++
    }
    const onChange = (hidden: boolean) => {
      document.title = hidden ? '隐藏年龄' : '显示年龄'
    }
    return {
      count,
      increase,
      like,
      buttonStatus,
      headline,
      onChange,
      x,
      y
    }
  }
})
</script>

<template>
  <div>
    <h1 ref="headline">{{ like.age }}</h1>
    <button type="button" @click="increase">点我加</button>
    <button type="button" :disabled="buttonStatus.disabled">{{ buttonStatus.text }}</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>X: {{ x }}</h1>
  <h1>Y: {{ y }}</h1>
  <my-profile :user="like" @change="onChange" />
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
