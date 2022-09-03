<script lang="ts" setup>
  import { toRefs, computed } from 'vue'

  const props = defineProps({
    isActive: {
      type: Boolean,
      default: false,
      required: true
    }
  })
  const { isActive } = toRefs(props)
  const classes = computed(() => {
    const classlist = ['hora-indicator']
    if (isActive.value === true) {
      classlist.push('hora-indicator--active')
    }
    return classlist.join(' ')
  })
</script>

<template>
  <div :class="classes"></div>
</template>
