/**
 * Set column classes to enable column be fixed
 * to left or right.
 * @param columnIndex 
 * @returns {string}
 */
export function getColumnClasses (
  columnIndex: number,
  columnCount: number,
  isFirstColumnFixed: boolean,
  isLastColumnFixed: boolean
): string|undefined {
  // Fix first column
  if (isFirstColumnFixed === true && columnIndex === 0) {
    return 'fixed--left'
  }
  // Fix last column
  if (isLastColumnFixed === true && columnIndex === columnCount) {
    return 'fixed--right'
  }
  return undefined
}

/**
 * Set column header classes to enable fix headers.
 * there are several fixed positions we need to set, like
 * 
 * @param columnOrder 
 * @returns {string}
 */
export function getHeaderClasses (
  columnIndex: number,
  columnCount: number,
  isHeaderFixed: boolean,
  isFirstColumnFixed: boolean,
  isLastColumnFixed: boolean
  ): string|undefined {
  // Top-left
  if (isHeaderFixed === true
    && isFirstColumnFixed === true
    && columnIndex === 0) {
    return 'fixed--topleft'
  }
  // Top-right
  if (isHeaderFixed === true
    && isLastColumnFixed === true
    && columnIndex === columnCount) {
      return 'fixed--topright'
  }
  // Left
  if (isHeaderFixed === false
    && isFirstColumnFixed === true
    && columnIndex === 0) {
      return 'fixed--left'
  }
  // Right
  if (isHeaderFixed === false
    && isLastColumnFixed === true
    && columnIndex === columnCount) {
      return 'fixed--right'
  }
  // Top all others columns
  if (isHeaderFixed === true) {
    return 'fixed--top'
  }

  return undefined
}