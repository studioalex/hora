import { defineStore } from 'pinia'
import { HoraField } from '@studioalex/horagrid'

export interface GridSettings {
  isHeaderStatic: boolean;
  isHeaderVisible: boolean;
  isFirstColumnStatic: boolean;
  isLastColumnStatic: boolean;
  isSortable: boolean;
  isSettingsEnabled: boolean;
  isSelectable: boolean;
  isMultipleSelection: boolean;
  selectedItems: Array<HoraField>;
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
      isMultipleSelection: false,
      selectedItems: []
    } as GridSettings
  }
})