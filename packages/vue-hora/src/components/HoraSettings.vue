<script lang="ts" setup>
import { toRefs } from 'vue'
  import CloseIcon from './CloseIcon.vue'

  const props = defineProps({
    title: {
      type: String,
      default: 'Settings'
    }
  })

  const { title } = toRefs(props)
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
  <div class="hora__settings">
    <div class="hora__settings__header">
      <div class="hora__settings__title">{{ title }}</div>
      <div class="hora__settings__close">
        <button @click="closeSettings" class="hora__icon-button">
          <CloseIcon class="hora__icon"/>
        </button>
      </div>
    </div>
    <div class="hora__settings__content">
      <slot></slot>
    </div>
  </div>
</template>