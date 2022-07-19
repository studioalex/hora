<script lang="ts" setup>
  import { toRefs } from 'vue'
  import SortIcon from './icons/SortIcon.vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: null
    },
    fieldKey: {
      type: String,
      default: null
    }
  })

  const { isVisible, customClass, fieldKey } = toRefs(props)
  const emit = defineEmits<{
    (e: 'sort', value: string): void
  }>()
</script>

<template>
  <div
    v-if="isVisible && fieldKey"
    class="hora-grid__header__action">
    <button
      class="hora__icon-button"
      @click="emit('sort', fieldKey)">
      <SortIcon
        class="hora__icon-sort"
        :class="customClass" />
    </button>
    <slot></slot>
  </div>
</template>