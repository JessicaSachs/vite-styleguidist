<template>
  <div style="max-width: 600px; margin: 0 auto;">
    <nav>
      <div style="width: 200px; text-align: left;">
        <h2>Pages</h2>
        <ul>
          <router-link
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              v-slot="{ navigate, href }"
          >
            <li>
              <a
                  :href="href"
                  @click="navigate"
              >{{ link.text }}</a>
            </li>
          </router-link>
        </ul>
        <h2>Components</h2>
        <components-list></components-list>
      </div>
    </nav>
    <header v-if="$route.meta.title">
      <div>
        <h1>
          {{ $route.meta.title }}
        </h1>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
  import ComponentsList from './components/ComponentsList.vue';

  export default defineComponent({
    components: { ComponentsList },
    data: () => ({
      links: [
        {text: 'Home', to: '/'},
        {text: 'About', to: '/about'},
      ],
    }),
  })
</script>
