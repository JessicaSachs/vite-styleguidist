<template>
  <div style="max-width: 600px; margin: 0 auto;">
    <nav>
      <div style="width: 200px; text-align: left;">
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

  export default defineComponent({
    data: () => ({
      links: [
        {text: 'Home', to: '/'},
        {text: 'About', to: '/about'},
      ],
    }),
  })
</script>
