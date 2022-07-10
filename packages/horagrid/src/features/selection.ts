import { ref, Ref } from 'vue'

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
 * @param single {boolean} set selection type, single or multiple (default)
 * @returns {void}
 */
function setSelection (index: number, single: boolean = false) {
  if (isSelected(index) === false) {
    
    if (single === true) {
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

export {
  selected,
  isSelected,
  setSelection
}
