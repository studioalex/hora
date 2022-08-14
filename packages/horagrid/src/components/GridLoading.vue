<script lang="ts" setup>
  import { toRefs } from 'vue'

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
    <slot>loading</slot>
  </div>
</template>