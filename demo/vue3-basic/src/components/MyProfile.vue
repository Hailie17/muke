<template>
  <div class="my-profile">
    <HelloWorld msg="hello from profile" />
    <h2>
      Name: {{ user.name }}
    </h2>
    <h2 v-if="!isHidden">Age: {{ user.age }}</h2>
    <h2 v-if="!isHidden">DoubleAge: {{ doubleAge }}</h2>
    <button type="button" @click="toggleHide">{{ isHidden ? '显示' : '隐藏' }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import HelloWorld from './HelloWorld.vue';
interface IPerson {
  name: string;
  age: number;
}
interface IEvents {
  (e: 'change', hidden: boolean): void
}

const props = withDefaults(defineProps<{user?: IPerson}>(), {
  user: () => ({name: 'viking', age: 50})
})

const emit =  defineEmits<IEvents>()

const isHidden = ref(false)
const doubleAge = computed(() => props.user.age * 2)
const toggleHide = () => {
  isHidden.value = !isHidden.value
  emit('change', isHidden.value)
}

</script>

<style scoped>
.my-profile{
  
}
</style>