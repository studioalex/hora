<script lang="ts" setup>
  import { ref } from 'vue'
  const baseurl = ref(import.meta.env.BASE_URL)
</script>

<template>
<footer class="demo__footer">
  <div class="demo__container">
    <div class="demo__footer__nav">
      <div class="demo__footer__nav-item--start">© 2022 StudioAlex</div>
      <div class="demo__footer__nav-item--middle"></div>
      <div class="demo__footer__nav-item--end">
        <img :src="`${baseurl}/images/czech_with_love.png`" />
      </div>
    </div>
  </div>
</footer>
</template>