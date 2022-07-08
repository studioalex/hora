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
 * @returns {void}
 */
function setSelection (index: number) {
  if (isSelected(index) === false) {
    selected.value.push(index)
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
