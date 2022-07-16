<script lang="ts" setup>
  import { toRefs } from 'vue'
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
  <div class="hrd-footer hrd-footer--content">
    {{ text }}
  </div>
</template>