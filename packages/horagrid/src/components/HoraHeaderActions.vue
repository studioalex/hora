<script lang="ts" setup>
  import { toRefs } from 'vue'
  import GearIcon from './icons/GearIcon.vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: null,
      required: false
    },
    isSettingsEnabled: {
      type: Boolean,
      default: false
    }
  })

  const { isVisible, customClass, isSettingsEnabled } = toRefs(props)
  const emit = defineEmits<{(e: 'settings', value: boolean): void}>()
</script>

<template>
  <div
    v-if="isVisible"
    class="header"
    :class="customClass">
    <button
      v-if="isSettingsEnabled === true"
      class="hora__icon-button"
      @click="emit('settings', true)">
      <GearIcon class="hora__icon" />
    </button>
  </div>
</template>