<template>
  <ul>
    <li v-for="component in components" :key="component.name">{{ component.name }}</li>
  </ul>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {
        components: [{ name: "Hello World" }]
      }
    }
  })
</script>
