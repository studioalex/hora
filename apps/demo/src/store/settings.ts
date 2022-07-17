import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      isHeaderStatic: false,
      isHeaderVisible: true,
      isFirstColumnStatic: false,
      isLastColumnStatic: false,
      isSortable: false,
      isSelectable: false,
      isSettingsEnabled: false,
      isMultipleSelection: false,
      selectedItems: []
    }
  }
})