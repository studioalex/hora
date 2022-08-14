<script lang="ts" setup>
  import { toRefs } from 'vue'
  import CloseIcon from './icons/CloseIcon.vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Settings'
    }
  })

  const { title, isVisible } = toRefs(props)
  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  /**
   * Emit 'close' to let the parent component,
   * to handle closing the settings dialog.
   */
  function closeSettings() {
    emit('close')
  }
</script>

<template>
  <div
    class="hora-settings"
    :class="{ 'hora-settings--visible': isVisible}">
    <div class="hora-settings__header">
      <div class="hora-settings__title">
        {{ title }}
      </div>
      <div class="hora-settings__close">
        <button
          class="hora__icon-button"
          @click="closeSettings">
          <CloseIcon class="hora__icon" />
        </button>
      </div>
    </div>
    <div class="hora-settings__content">
      <slot></slot>
    </div>
  </div>
</template>