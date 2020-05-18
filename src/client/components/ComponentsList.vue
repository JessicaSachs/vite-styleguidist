<template>
  <ul>
    <li v-for="component in components" :key="component.name">
      {{ component.name }}
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import components from "foundComponentPaths.guidist?config=./guidist.config.js";

export default defineComponent({
  setup() {
    return {
      components,
    };
  },
});
</script>
