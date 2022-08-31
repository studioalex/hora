<script lang="ts" setup>
import { toRefs } from 'vue'
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
const { isSettingsEnabled, isSettingsVisible } = properties
const { toggleSettingsVisibility } = useGrid()
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
        @click="toggleSettingsVisibility()">
        Settings
      </hora-button>
    </div>
  </header>
</template>
