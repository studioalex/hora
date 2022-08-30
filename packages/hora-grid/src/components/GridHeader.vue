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
  <header class="hora-control">
    <div class="hora-control--left">
      <span class="hora-control__title">{{ title }}</span>
    </div>
    <div class="hora-control--right">
      <hora-button
        v-if="isSettingsEnabled"
        class="hora-control__button"
        type="primary-outline"
        @click="toggleSettingsVisibility()">
        Settings
      </hora-button>
    </div>
  </header>
</template>
