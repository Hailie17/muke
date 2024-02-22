<template>
  <div class="my-profile">
    <h2>
      Name: {{ user.name }}
    </h2>
    <h2>Age: {{ user.age }}</h2>
    <h2>DoubleAge: {{ doubleAge }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
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
  setup(props) {
    const doubleAge = computed(() => props.user.age * 2)
    return {
      doubleAge
    }
  }
})
</script>

<style scoped>
.my-profile{
  
}
</style>