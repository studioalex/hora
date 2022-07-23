<script lang="ts" setup>
  import { ref, Ref } from 'vue'
  import { HoraField } from '@studioalex/horagrid'
  import { useSettingsStore } from '../store/settings'
  import data from '../features/columns'

  const store = useSettingsStore()
  const theme = ref('')
  const settings = ref(false)
  const themeList = ref([
    { class: '', label: 'Default' },
    { class: 'theme-block', label: 'Block' }
  ])

  function setSelected (items: Array<HoraField>) {
    store.selectedItems = items
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
      :class="theme"
      :fields="data.columns"
      :data="data.data"
      :is-header-static="store.isHeaderStatic"
      :is-first-field-static="store.isFirstColumnStatic"
      :is-last-field-static="store.isLastColumnStatic"
      :is-header-visible="store.isHeaderVisible"
      :is-selectable="store.isSelectable"
      :is-sortable="store.isSortable"
      :is-settings-enabled="store.isSettingsEnabled"
      :is-multiple-selection="store.isMultipleSelection"
      :show-settings="settings"
      @on-selection="setSelected">
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