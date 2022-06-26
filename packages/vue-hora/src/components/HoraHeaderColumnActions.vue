<script lang="ts" setup>
  import { toRefs, PropType } from 'vue'
  import SortIcon from './SortIcon.vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: null
    },
    columnKey: {
      type: String,
      default: null
    }
  })

  const { isVisible, customClass, columnKey } = toRefs(props)
  const emit = defineEmits<{
    (e: 'sort', value: string): void
  }>()
</script>

<template>
  <div
    v-if="isVisible && columnKey"
    class="header__action">
    <button
      @click="emit('sort', columnKey)"
      class="hora__icon-button">
      <SortIcon
        class="hora__icon-sort"
        :class="customClass" />
    </button>
    <slot></slot>
  </div>
</template>