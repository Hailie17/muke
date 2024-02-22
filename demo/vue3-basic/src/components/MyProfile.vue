<template>
  <div class="my-profile">
    <h2>
      Name: {{ user.name }}
    </h2>
    <h2 v-if="!isHidden">Age: {{ user.age }}</h2>
    <h2 v-if="!isHidden">DoubleAge: {{ doubleAge }}</h2>
    <button type="button" @click="toggleHide">{{ isHidden ? '显示' : '隐藏' }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from 'vue';
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  name: 'MyProfile',
  props: {
    user: {
      type: Object as PropType<Person>,
      required: true
    }
  },
  emits: ['change'],
  setup(props, ctx) {
    const isHidden = ref(false)
    const doubleAge = computed(() => props.user.age * 2)
    const toggleHide = () => {
      isHidden.value = !isHidden.value
      ctx.emit('change', isHidden.value)
    }
    return {
      doubleAge,
      isHidden,
      toggleHide
    }
  }
})
</script>

<style scoped>
.my-profile{
  
}
</style>