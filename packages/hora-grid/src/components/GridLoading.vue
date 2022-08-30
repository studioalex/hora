<script lang="ts" setup>
  import { toRefs } from 'vue'
  import GridShimmer from './GridShimmer.vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    }
  })

  const { isVisible } = toRefs(props)
</script>

<template>
  <div
    class="hora-loading"
    :class="{ 'hora-loading--visible': isVisible}">
    <slot><GridShimmer /></slot>
  </div>
</template>