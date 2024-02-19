<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  setup() {
    const count = ref(0)
    const like = reactive({
      age: 22,
      name: 'lili'
    })
    const increase = () => {
      count.value++
      like.age ++
    }
    return {
      count,
      increase,
      like
    }
  }
})
</script>

<template>
  <div>
    <h1>{{ like.age }}</h1>
    <button type="button" @click="increase">点我加</button>
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
