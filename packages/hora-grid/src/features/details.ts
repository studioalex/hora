import { ref, Ref } from 'vue'

const detailsVisible: Ref<Array<number>> = ref([])

/**
 * Check if record index number is in detailsVisible list.
 * @param index {number} The record index number
 * @returns {boolean}
 */
const isDetailVisible = (index: number) => {
  return detailsVisible.value.includes(index)
}

/**
 * Toggle details visibility of specified record, by it's index value.
 * @param index {number} Index value of the record in grid.
 * @returns {void}
 */
const toggleDetailVisibility = (index: number) => {
  if (isDetailVisible(index) === false) {
    detailsVisible.value.push(index)
  } else {
    detailsVisible.value = detailsVisible.value.filter(element => (element != index))
  }
}

/**
 * Clear all visible details by resetting the `detailsVisible` array.
 * @returns {void}
 */
 function closeAllDetails () {
  detailsVisible.value = []
}

/**
 * Open all records details in the grid.
 * Caution: Additionally loaded data records, are not automatically
 * marked to show the details. Therefore there details are not visible.
 * @param count {number} Total number of records in the grid.
 * @returns {void}
 */
function openAllDetails (count: number):void {
  detailsVisible.value = Array.from(Array(count).keys())
}

export {
  detailsVisible,
  isDetailVisible,
  toggleDetailVisibility,
  closeAllDetails,
  openAllDetails
}
