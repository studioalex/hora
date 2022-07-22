import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      isHeaderStatic: false,
      isHeaderVisible: true,
      isFirstColumnStatic: false,
      isLastColumnStatic: false,
      isSortable: false,
      isSettingsEnabled: true,
      isSelectable: false,
      isMultipleSelection: false,
      selectedItems: []
    }
  }
})