<template>
  <ul>
    <router-link v-for="(component, i) in components"
                 :key="component.name"
                 :to="component.name"
                 v-slot="{ navigate, href }">
      <li>
        <a
            :href="href"
            @click="navigate"
        >{{ component.name }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
  import {defineComponent} from "vue";
  import components from "foundComponentPaths.guidist?config=./guidist.config.js";

  export default defineComponent({
    setup() {
      return {
        components,
      };
    },
  });
</script>
