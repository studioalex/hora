<script lang="ts" setup>
  import { toRefs } from 'vue'
  import type { PropType } from 'vue'

  export type navs = Map<string, {link: string, title: string}>

  const props = defineProps({
    nav: {
      type: Map as PropType<navs>,
      default: null,
      required: false
    }
  })

  const { nav } = toRefs(props)
</script>

<template>
  <div class="hrd-header hrd-header--content">
    <div class="hrd-header--content-left"></div>
    <div class="hrd-header--content-middle"></div>
    <nav
      class="hrd-header--content-right hrd-header--content-nav"
      role="navigation"
      aria-label="main navigation">
      <div
        v-for="[key, item] in nav"
        :key="key"
        class="hrd-header--content-nav-item">
        <a :href="item.link" class="navbar-item">{{ item.title }}</a>
      </div>
    </nav>
  </div>
</template>