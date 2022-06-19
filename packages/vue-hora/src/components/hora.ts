/**
 * Set column classes to enable column be fixed
 * to left or right.
 * @param columnIndex 
 */
export function getColumnClasses(columnIndex: Number, isFirstColumnFixed: Boolean) {
  const classes = []

  if (isFirstColumnFixed === true && columnIndex === 0) {
    classes.push('fixed--left')
  }
  return classes.join(' ')
}

/**
 * Set column header classes to enable
 * - fix headers
 * @param columnOrder 
 */
export function getHeaderClasses(
  columnIndex: Number,
  isHeaderFixed: Boolean,
  isFirstColumnFixed: Boolean
  ) {
  const classes = []

  if (isHeaderFixed === true
    && isFirstColumnFixed === true
    && columnIndex === 0) {
    classes.push("fixed--topleft")
  }

  if (isHeaderFixed === false
    && isFirstColumnFixed === true
    && columnIndex === 0) {
    classes.push("fixed--left")
  }

  if (isHeaderFixed === true 
    && isFirstColumnFixed === false
    && columnIndex === 0) {
    classes.push("fixed--top")
  }

  if (isHeaderFixed === true 
    && columnIndex > 0) {
    classes.push("fixed--top")
  }

  return classes.join(' ')
}