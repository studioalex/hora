<script lang="ts" setup>
  import { useSettingsStore } from '../store/settings'
  import HrdSwitch from './HrdSwitch.vue';

  const store = useSettingsStore()
</script>
<template>
  <div class="hrd-group">
    <h4 class="hrd-title">
      Settings
    </h4>
    <HrdSwitch
      id="switch-1"
      v-model="store.isHeaderVisible"
      title="Header visible">
      Show or hide the Header with all his functionality.
    </HrdSwitch>
    <HrdSwitch
      v-if="store.isHeaderVisible"
      id="switch-5"
      v-model="store.isSortable"
      title="Sortable">
      Show <strong>sort icon</strong> in every header column to enable sorting.
      The sort icon can be disabled for every column in field settings.
    </HrdSwitch>
    <HrdSwitch
      v-if="store.isHeaderVisible"
      id="switch-2"
      v-model="store.isHeaderStatic"
      title="Static header">
      Make the Header static to stick on the top when scrolling.
    </HrdSwitch>
    <HrdSwitch
      id="switch-3"
      v-model="store.isFirstColumnStatic"
      title="Static first column">
      Make the first column static to stick on the left when scrolling horizontally.
    </HrdSwitch>
    <HrdSwitch
      id="switch-4"
      v-model="store.isLastColumnStatic"
      title="Static last column">
      Make the last column static to stick on the right when scrolling horizontally.
    </HrdSwitch>
    <HrdSwitch
      v-if="store.isHeaderVisible"
      id="switch-6"
      v-model="store.isSettingsEnabled"
      title="Has Settings">
      Show the settings icon in header on the last column to show the settings view.
    </HrdSwitch>
    <HrdSwitch
      id="switch-7"
      v-model="store.isSelectable"
      title="Selectable" />
    <HrdSwitch
      v-if="store.isSelectable"
      id="switch-8"
      v-model="store.isMultipleSelectable"
      title="Can select multiple" />
    <HrdSwitch
      id="switch-9"
      v-model="store.isLoading"
      title="Show loading">
      Show the loading view.
    </HrdSwitch>
  </div>
</template>
