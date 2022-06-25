<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  customClass: {
    type: String,
    default: null
  }
})

const { customClass } = toRefs(props)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="hora__icon-close"
    :class="customClass"
    viewBox="0 0 64 64">
    <path data-name="layer1" d="M53.122 48.88L36.243 32l16.878-16.878a3 3 0 0 0-4.242-4.242L32 27.758l-16.878-16.88a3 3 0 0 0-4.243 4.243l16.878 16.88-16.88 16.88a3 3 0 0 0 4.243 4.241L32 36.243l16.878 16.88a3 3 0 0 0 4.244-4.243z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="var(--hora-icon-stroke)" stroke-linejoin="round" stroke-linecap="round"></path>
  </svg>
</template>