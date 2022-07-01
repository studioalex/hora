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
    viewBox="0 0 1024 1024">
    <g>
      <path class="ASC" d="M956.6,674.7l-41.4-39.4c-11.8-11.8-29.5-11.8-41.4,0L803,706.2c-11.8,11.8-33.5,3.9-33.5-13.8V271
        c0-15.8-13.8-29.5-29.5-29.5h-59.1c-15.8,0-29.5,15.8-29.5,29.5v417.5c0,17.7-21.7,25.6-33.5,13.8L547,631.4
        c-11.8-11.8-29.5-11.8-41.4,0l-41.4,43.3c-11.8,11.8-11.8,29.5,0,41.4l226.5,226.5c11.8,11.8,29.5,11.8,41.4,0l226.5-226.5
        C968.4,704.3,968.4,684.6,956.6,674.7z"/>
      <path class="DESC" d="M559.4,349.3c11.8-11.8,11.8-29.5,0-41.4L335,81.5c-11.8-11.8-29.5-11.8-41.4,0L67.1,307.9
        c-11.8,11.8-11.8,29.5,0,41.4l41.4,41.4c11.8,11.8,29.5,11.8,41.4,0l70.9-70.9c11.8-11.8,33.5-3.9,33.5,13.8V751
        c0,15.8,13.8,29.5,29.5,29.5h59.1c15.8,0,29.5-15.8,29.5-29.5V333.5c0-17.7,21.7-25.6,33.5-13.8l70.9,70.9
        c11.8,11.8,29.5,11.8,41.4,0L559.4,349.3z"/>
    </g>
  </svg>
  <!-- eslint-enable -->
</template>