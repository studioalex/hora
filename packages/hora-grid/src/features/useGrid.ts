import { computed } from 'vue'
import { HoraField } from '../types'
import { GridOptions } from '../features/initGrid'

export function useGrid (options: GridOptions) {
  const { settings, fieldsDefinition, visibleFields } = options
  /** COMPUTED */
  const isSelectionFieldVisible = computed(() => (settings.isSelectable.value === true))
  /**
   * Return a list of fields in sorted order and only fields mark as visible.
   * The list is also required by `grid-template-fields` to set the right amount of fields.
   *
   * The list contains only field:
   *   - marked as visible
   *   - ordered by order property
   *
   * @returns Array
   */
  const fieldList = computed(() =>
    fieldsDefinition.value
      .filter(field => field.visible === true)
      .sort((a:HoraField, b:HoraField): number => {
        if (typeof a.order != 'number') a.order = 0
        if (typeof b.order != 'number') b.order = 0
        return (a.order === b.order) ? 0 : (a.order < b.order) ? 1 : -1
      })
  )

  /**
   * Return the total number of visible fields.
   */
  const fieldCount = computed(() => {
    let length = fieldList.value.length
    if (isSelectionFieldVisible.value === true) {
      length++
    }
    return length
  })

  /**
   * Set the css class for the sort icon in header to show
   * which sort direction is set. Ascending or descending.
   * @param field String
   * @returns {string}
   */
   function getSortIconClass (field: string) {
    if (Array.isArray(visibleFields.value) && visibleFields.value[0]) {
      const [fieldKey, sortDirection] = visibleFields.value[0].split('::')

      if (fieldKey === field ) {
        return `hora__icon hora__icon-sort--${sortDirection.toLowerCase()}`
      }
    }

    return ''
  }

  /**
   * Toggle settings visibility,
   * but only show Settings when loading is not active.
   * Hide the "No data Found" message when visible.
   */
  function toggleSettingsVisibility (): void {
    if (settings.isLoading.value === false) {
      if (settings.isSettingsVisible.value === false) {
        settings.isNoDataVisible.value = false
      }
      settings.isSettingsVisible.value = !settings.isSettingsVisible.value
    }
  }

  /**
   * Check if record index number is in selected list.
   * @param index {number} The record index number
   * @returns {boolean}
   */
  const isSelected = (index: number) => {
    return settings.recordSelected.value.includes(index)
  }

  /**
   * Add or remove a record index number from selection, depend on
   * if the index is already in the selection.
   * @param index {number} The record index number to add or remove from selected.
   * @param multipleSelection {boolean} set selection type, single (default) or multiple 
   * @returns {void}
   */
  function setSelection (index: number, multipleSelection = false) {
    if (isSelected(index) === false) {
      
      if (multipleSelection === false) {
        // single selection
        settings.recordSelected.value = [index]
      } else {
        // multiple selection
        settings.recordSelected.value.push(index)
      }

    } else {
      settings.recordSelected.value = settings.recordSelected.value.filter(element => (element != index))
    }

    return settings.recordSelected.value
  }

  /**
   * Clear all selected records by resetting the array.
   * @returns {void}
   */
  function clearSelection () {
    settings.recordSelected.value = []
  }

  /**
   * Return the number of selected records.
   * @returns {void}
   */
  const selectedCount = computed(() => settings.recordSelected.value.length)

  /**
   * Marks all records in the grid as selected.
   * Caution: Additionally loaded data records, are not automatically
   * in the selection list. Therefore not marked as selected.
   * @param count {number} Total number of records in the grid.
   * @returns {void}
   */
  function selectAll(count: number):void {
    settings.recordSelected.value = Array.from(Array(count).keys())
  }

  /**
   * Check if record index number is in detailsVisible list.
   * @param index {number} The record index number
   * @returns {boolean}
   */
  const isDetailVisible = (index: number) => {
    return settings.detailsVisible.value.includes(index)
  }

  /**
   * Toggle details visibility of specified record, by it's index value.
   * @param index {number} Index value of the record in grid.
   * @returns {void}
   */
  const toggleDetailVisibility = (index: number) => {
    if (isDetailVisible(index) === false) {
      settings.detailsVisible.value.push(index)
    } else {
      settings.detailsVisible.value = settings.detailsVisible.value.filter(element => (element != index))
    }
  }

  /**
   * Clear all visible details by resetting the `detailsVisible` array.
   * @returns {void}
   */
  function closeAllDetails () {
    settings.detailsVisible.value = []
  }

  /**
   * Open all records details in the grid.
   * Caution: Additionally loaded data records, are not automatically
   * marked to show the details. Therefore there details are not visible.
   * @param count {number} Total number of records in the grid.
   * @returns {void}
   */
  function openAllDetails (count: number):void {
    settings.detailsVisible.value = Array.from(Array(count).keys())
  }

  return {
    fieldsDefinition,
    fieldList,
    fieldCount,
    getSortIconClass,
    visibleFields,
    isSelectionFieldVisible,
    toggleSettingsVisibility,
    isSelected,
    setSelection,
    clearSelection,
    selectedCount,
    selectAll,
    isDetailVisible,
    toggleDetailVisibility,
    closeAllDetails,
    openAllDetails
  }
}
