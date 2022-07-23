<script lang="ts" setup>
  import { ref, toRefs } from 'vue'
  
  const baseurl = ref(import.meta.env.BASE_URL)
  const props = defineProps({
   text: {
      type: String,
      default: null,
      required: false
   }
  })
  const { text } = toRefs(props)
</script>

<template>
  <div class="hrd-footer">
    <img :src="`${baseurl}images/czech_with_love.png`" /> 
    {{ text }}
  </div>
</template>