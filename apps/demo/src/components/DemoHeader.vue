<script lang="ts" setup>
  import { ref } from 'vue'
  const baseurl = ref(import.meta.env.BASE_URL)
</script>

<template>
  <header class="demo__header">
    <div class="demo__header__logo">
      <a href="/"><img :src="`${baseurl}images/logo.png`" /></a>
    </div>
    <div class="demo__header__middle"></div>
    <nav class="demo__header__nav" role="navigation" aria-label="main navigation">
      <div class="demo__header__nav-item">
        <a href="/api/">API Documentation</a>
      </div>
      <div class="demo__header__nav-item">
        <a href="https://github.com/studioalex/hora/issues" class="navbar-item">Issues</a>
      </div>
      <div class="demo__header__nav-item">
        <a href="https://github.com/studioalex/hora" class="navbar-item">GitHub</a>
      </div>
      <div class="demo__header__nav-item">
        <a href="https://www.npmjs.com/package/@studioalex/hora" class="navbar-item">NPM</a>
      </div>
    </nav>
  </header>
</template>