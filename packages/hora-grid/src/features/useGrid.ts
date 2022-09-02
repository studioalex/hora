import { ref, Ref, computed } from 'vue'
import { properties, fieldsDefinition } from '../features/initGrid'
import { HoraField } from '../types'

/** Sort field definition */
const sortField: Ref<string[]> = ref([])

/** COMPUTED */
const isSelectionFieldVisible = computed(() => (properties.isSelectable.value === true))

export function useGrid () {
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
    if (Array.isArray(sortField.value) && sortField.value[0]) {
      const [fieldKey, sortDirection] = sortField.value[0].split('::')

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
    if (properties.isLoading.value === false) {
      if (properties.isSettingsVisible.value === false) {
        properties.isNoDataVisible.value = false
      }
      properties.isSettingsVisible.value = !properties.isSettingsVisible.value
    }
  }

  return {
    fieldsDefinition,
    fieldList,
    fieldCount,
    getSortIconClass,
    sortField,
    isSelectionFieldVisible,
    toggleSettingsVisibility
  }
}
