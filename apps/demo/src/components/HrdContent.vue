<script lang="ts" setup>
  import { ref } from 'vue'
  import _ from 'lodash'
  import { HoraField } from '@studioalex/hora-grid'
  import { useSettingsStore } from '../store/settings'
  import columns from '../features/columns'
  import data from '../features/data'

  const store = useSettingsStore()
  const theme = ref('')
  const settings = ref(false)
  const themeList = ref([
    { class: '', label: 'Default' },
    { class: 'theme-block', label: 'Block' }
  ])
  const sortField = ref('')
  const sortDirection = ref<boolean | 'asc' | 'desc'>(true)
  const gridData = ref(data)
  const gridColumns = ref(columns)

  function setSelected (items: Array<HoraField>) {
    store.selectedItems = items
  }

  function handleSort (data: Array<string>) {
    sortField.value = data[0]
    sortDirection.value = data[1].toLowerCase() === 'asc' ? 'asc' : 'desc'
    // handle sorting by sort function or db query
    gridData.value = _.orderBy(gridData.value, [sortField.value], [sortDirection.value])
  }
</script>

<template>
  <div class="hrd-grid-content">
    <div>
      <h1>Grid Example</h1>
      <div class="demo-grid-settings">
        <label for="theme">Theme: </label>
        <select id="theme" v-model="theme">
          <option
            v-for="(themeItem, index) in themeList"
            :key="index"
            :value="themeItem.class">
            {{ themeItem.label }}
          </option>
        </select>
        <button @click="settings = !settings">
          Toogle Settings
        </button>
      </div>
    </div>
    <hora-grid
      title="Demo List"
      :class="theme"
      :fields="gridColumns"
      :data="gridData"
      :is-header-static="store.isHeaderStatic"
      :is-first-field-static="store.isFirstColumnStatic"
      :is-last-field-static="store.isLastColumnStatic"
      :is-header-visible="store.isHeaderVisible"
      :is-selectable="store.isSelectable"
      :is-sortable="store.isSortable"
      :is-settings-enabled="store.isSettingsEnabled"
      :is-multiple-selection="store.isMultipleSelection"
      :is-loading="store.isLoading"
      :show-settings="settings"
      @on-selection="setSelected"
      @on-sort="handleSort">
      <template #cell-k0="{ record, field }">
        {{ field.key }} -- {{ record.k6 }}
      </template>
    </hora-grid>
  </div>
</template>

<style>
.demo-grid-settings {
  margin-bottom: 1rem;
}
</style>
