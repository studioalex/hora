import { defineStore } from 'pinia'
import { HoraField } from '@studioalex/hora-grid'

export interface GridSettings {
  isHeaderStatic: boolean;
  isHeaderVisible: boolean;
  isFirstColumnStatic: boolean;
  isLastColumnStatic: boolean;
  isSortable: boolean;
  isSettingsEnabled: boolean;
  isSelectable: boolean;
  isMultipleSelectable: boolean;
  selectedItems: Array<HoraField>;
  isLoading: boolean;
}

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
      isMultipleSelectable: false,
      isLoading: false,
      selectedItems: []
    } as GridSettings
  }
})
