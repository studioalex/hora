<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  pill: {
    type: [String, Boolean],
    default: false
  }
})

const getType = computed(() => props.type.toLowerCase().replace(/[^a-z0-9-]/gi, ''))
const showPill = computed(() => ['true', '', true].includes(props.pill))

const getClasses = computed(() => {
  return {
    'hora-button': true,
    'hora-button--pill': showPill.value,
    [`hora-button--${getType.value}`]: true
  }
})
</script>

<template>
  <button :class="getClasses">
    <slot></slot>
  </button>
</template>
