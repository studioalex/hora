<script lang="ts" setup>
import { toRefs, computed } from 'vue'
import { HoraButton } from "@studioalex/hora-elements"
import { properties } from '../features/initGrid'
import { useGrid } from '../features/useGrid'

const props = defineProps({
  title: {
    type: String,
    default: undefined
  }
})

const { title } = toRefs(props)
const { toggleSettingsVisibility } = useGrid()
const {
  isSettingsEnabled,
  isSettingsVisible,
  isLoading
} = properties

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
