<script lang="ts" setup>
  import { ref } from 'vue'
  import { useSettingsStore } from '../store/settings'
  import data from '../features/columns'

  const store = useSettingsStore()
  const testSingleSelection = ref(false)

  function setSelected (items: any) {
    store.selectedItems = []
  }
</script>

<template>
  <div class="hrd-content__grid">
    <hora-grid
      :fields="data.columns"
      :data="data.data"
      :is-header-static="store.isHeaderStatic"
      :is-first-field-static="store.isFirstColumnStatic"
      :is-last-field-static="store.isLastColumnStatic"
      :is-header-visible="store.isHeaderVisible"
      :is-selectable="store.isSelectable"
      :is-sortable="store.isSortable"
      :is-settings-enabled="store.isSettingsEnabled"
      :single-selection="testSingleSelection"
      @onSelection="setSelected">
      <template #cell-k1="{ record, field }">
        {{ field }} -- {{ record }}
      </template>
    </hora-grid>
  </div>
</template>