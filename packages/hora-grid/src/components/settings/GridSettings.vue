<script lang="ts" setup>
  import { toRefs } from 'vue'
  import { properties } from '../../features/initGrid'
  import { useGrid } from '../../features/useGrid'
  import HoraFieldSettings from './FieldSettings.vue'
  import CloseIcon from '../icons/CloseIcon.vue'

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

  const { isSettingsEnabled } = properties
  const {
    fieldsDefinition,
    toggleSettingsVisibility
  } = useGrid()

  const { title, isVisible } = toRefs(props)
</script>

<template>
  <div
    v-if="isSettingsEnabled"
    class="hora-settings"
    :class="{ 'hora-settings--visible': isVisible}">
    <div class="hora-settings__header">
      <div class="hora-settings__title">
        {{ title }}
      </div>
      <div class="hora-settings__close">
        <button
          class="hora__icon-button"
          @click="toggleSettingsVisibility">
          <CloseIcon class="hora__icon" />
        </button>
      </div>
    </div>
    <div class="hora-settings__content">
      <HoraFieldSettings v-model="fieldsDefinition" />
      <slot></slot>
    </div>
  </div>
</template>
