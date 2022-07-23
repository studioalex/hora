<script lang="ts" setup>
  import { ref } from 'vue'
  import { useSettingsStore } from '../store/settings'
  import data from '../features/columns'

  const store = useSettingsStore()
  const theme = ref('')
  const settings = ref(false)
  const themeList = ref([{class: 'theme-block', label: 'Block'}])

  function setSelected (items: any) {
    store.selectedItems = items
  }
</script>

<template>
  <div class="hrd-grid-content">
    <div>
      <h1>Grid Example</h1>
      <div class="demogrid-settings">
        <label for="">Theme: </label>
        <select v-model="theme">
          <option value="">
            default
          </option>
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

<style lang="postcss">
.demogrid-settings {
  margin-bottom: 1rem;
}
</style>