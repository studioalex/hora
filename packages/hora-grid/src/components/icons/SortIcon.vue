<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps(
  {
    direction: {
      type: String,
      default: null
    },
    enabled: {
      type: Boolean,
      default: true
    }
  }
)

const styling = computed(() => {
  if (props.enabled === false) {
    return 'hora__icon-sort--disabled'
  }

  return {
    'hora__icon-sort--asc': props.direction === 'ASC',
    'hora__icon-sort--desc': props.direction === 'DESC',
  }
})
</script>

<template>
  <!-- eslint-disable -->
  <svg
    class="hora__icon-sort"
    :class="styling"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 400">
    <g>
      <path class="ASC" d="M200 3L400 399H0L200 3Z" fill="white" />
      <path class="DESC" d="M600 400L400 1.96656e-05L800 7.10487e-05L600 400Z" fill="white" />
    </g>
  </svg>
  <!-- eslint-enable -->
</template>