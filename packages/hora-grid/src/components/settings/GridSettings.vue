<script lang="ts" setup>
  import { toRefs } from 'vue'
  import { properties } from '../../features/initGrid'
  import { useGrid } from '../../features/useGrid'
  import HoraFieldSettings from './FieldSettings.vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    }
  })

  const { isSettingsEnabled } = properties
  const { fieldsDefinition } = useGrid()

  const { isVisible } = toRefs(props)
</script>

<template>
  <div
    v-if="isSettingsEnabled"
    class="hora-settings"
    :class="{ 'hora-settings--visible': isVisible}">
    <div class="hora-settings__content">
      <HoraFieldSettings v-model="fieldsDefinition" />
      <slot></slot>
    </div>
  </div>
</template>
