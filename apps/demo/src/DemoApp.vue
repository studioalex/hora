<script lang="ts" setup>
  import HrdHeader from './components/HrdHeader.vue'
  import HrdSideHeader from './components/HrdSideHeader.vue'
  import HrdFooter from './components/HrdFooter.vue'
  import HrdSideFooter from './components/HrdSideFooter.vue'
  import HrdFilter from './components/HrdFilter.vue'
  import HrdContent from './components/HrdContent.vue'

  type navs = Map<string, {link: string, title: string}>

  const baseurl: string = import.meta.env.BASE_URL
  const sideTitle = 'Hora Grid'
  const sideLogo = `${baseurl}images/logo.png`
  const footerCopyright = 'Copyright © 2022-present Alexander Sedeke'
  const headerLinks: navs = new Map([
    ["vitepress", { link: "/", title: "Documentation"}],
    // ["github:issues", { link: "https://github.com/studioalex/hora/issues", title: "Issues"}],
    ["github", { link: "https://github.com/studioalex/hora", title: "GitHub"}],
    ["npm", { link: "https://www.npmjs.com/package/@studioalex/hora", title: "NPM"}]
  ])
</script>

<template>
  <div class="hrd-side hrd--distribute">
    <HrdSideHeader :title="sideTitle" :logo="sideLogo" />
    <div class="hrd-side__content">
      <HrdFilter />
    </div>
    <HrdSideFooter />
  </div>
  <div class="hrd-content hrd--distribute">
    <HrdHeader :nav="headerLinks" />
    <HrdContent />
    <HrdFooter :text="footerCopyright" />
  </div>
</template>
