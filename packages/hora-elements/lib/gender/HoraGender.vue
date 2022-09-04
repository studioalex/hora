<script lang="ts" setup>
  import { toRefs } from 'vue'
  const props = defineProps({
    gender: {
      type: String,
      default: 'none'
    },
    caption: {
      type: String,
      default: undefined
    }
  })

  const { gender } = toRefs(props)
</script>

<template>
  <div>
    {{ gender }}
  </div>
</template>
