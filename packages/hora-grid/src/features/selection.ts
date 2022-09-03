import { ref, computed, Ref } from 'vue'

const selected: Ref<Array<number>> = ref([])

/**
 * Check if record index number is in selected list.
 * @param index {number} The record index number
 * @returns {boolean}
 */
const isSelected = (index: number) => {
  return selected.value.includes(index)
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
      selected.value = [index]
    } else {
      // multiple selection
      selected.value.push(index)
    }

  } else {
    selected.value = selected.value.filter(element => (element != index))
  }

  return selected.value
}

/**
 * Clear all selected records by resetting the array.
 * @returns {void}
 */
function clearSelection () {
  selected.value = []
}

/**
 * Return the number of selected records.
 * @returns {void}
 */
const selectedCount = computed(() => selected.value.length)

/**
 * Marks all records in the grid as selected.
 * Caution: Additionally loaded data records, are not automatically
 * in the selection list. Therefore not marked as selected.
 * @param count {number} Total number of records in the grid.
 * @returns {void}
 */
function selectAll(count: number):void {
  selected.value = Array.from(Array(count).keys())
}

export {
  selected,
  isSelected,
  setSelection,
  clearSelection,
  selectedCount,
  selectAll
}
