<script lang="ts" setup>
import { toRefs, computed, PropType } from 'vue'
import { HoraButton } from "@studioalex/hora-elements"
import { GridOptions } from '../features/initGrid'
import { useGrid } from '../features/useGrid'

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  options: {
    type: Object as PropType<GridOptions>,
    required: true
  }
})

const { title, options } = toRefs(props)
const { toggleSettingsVisibility } = useGrid(props.options)
const {
  isSettingsEnabled,
  isSettingsVisible,
  isLoading
} = options.value.settings

const settingsCaption = computed(() => isSettingsVisible.value === true ? 'Close Settings' : 'Settings')
</script>

<template>
  <header class="hora-header">
    <div class="hora-header--left">
      <span class="hora-header__title">{{ title }}</span>
    </div>
    <div class="hora-header--right">
      <hora-button
        v-if="isSettingsEnabled"
        class="hora-header__button"
        type="secondary"
        :disabled="isLoading"
        @click="toggleSettingsVisibility()">
        {{ settingsCaption }}
      </hora-button>
    </div>
  </header>
</template>
