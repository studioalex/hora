<script lang="ts" setup>
  import { toRefs, PropType } from 'vue'
  import { GridOptions } from '../../features/initGrid'
  import { useGrid } from '../../features/useGrid'
  import HoraFieldSettings from './FieldSettings.vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object as PropType<GridOptions>,
      required: true
    }
  })

  const { isVisible, options } = toRefs(props)
  const { isSettingsEnabled } = options.value.properties
  const { fieldsDefinition } = useGrid(options.value)

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
