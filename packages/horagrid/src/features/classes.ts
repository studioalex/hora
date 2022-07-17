/**
 * Set field classes to enable field be fixed
 * to left or right.
 * @param fieldIndex 
 * @returns {string}
 */
export function getFieldClasses (
  fieldIndex: number,
  fieldCount: number,
  isFirstFieldFixed: boolean,
  isLastFieldFixed: boolean
): string {
  const classes: Array<string> = ['hora-grid__cell']
  // Mark as first field
  if (fieldIndex === 1) {
    classes.push('hora-grid__cell--first')
  }
  // Mark as last field
  if (fieldIndex === fieldCount) {
    classes.push('hora-grid__cell--last')
  }
  // Fix first field and mark as static
  if (isFirstFieldFixed === true && fieldIndex === 1) {
    classes.push('hora-grid__cell--fixed-left')
  }
  // Fix last field and mark as static
  if (isLastFieldFixed === true && fieldIndex === fieldCount) {
    classes.push('hora-grid__cell--fixed-right')
  }
  
  return classes.join(' ')
}

/**
 * Set field header classes to enable fix headers.
 * there are several fixed positions we need to set, like
 * 
 * @param fieldOrder 
 * @returns {string}
 */
export function getHeaderClasses (
  fieldIndex: number,
  fieldCount: number,
  isHeaderFixed: boolean,
  isFirstFieldFixed: boolean,
  isLastFieldFixed: boolean
  ): string {
  const classes: Array<string> = ['hora-grid__header']
  // Header is marked as fixed
  if (isHeaderFixed === true) {
    // Fixed top-left
    if (isFirstFieldFixed === true && fieldIndex === 1) {
      classes.push('hora-grid__cell--fixed-top-left')
    }
    // Fixed top-right
    if (isLastFieldFixed === true && fieldIndex === fieldCount) {
      classes.push('hora-grid__cell--fixed-top-right')
    }
    // Top all others fields
    if ((fieldIndex > 1 && fieldIndex < fieldCount) 
       || (isFirstFieldFixed === false && fieldIndex === 1)
       || (isLastFieldFixed === false && fieldIndex === fieldCount)) {
      classes.push('hora-grid__cell--fixed-top')
    }
  }

  // Header is NOT marked as fixed
  if (isHeaderFixed === false) {
    // Fixed left
    if (isFirstFieldFixed === true && fieldIndex === 1) {
      classes.push('hora-grid__cell--fixed-left')
    }
    // Fixed right
    if (isLastFieldFixed === true && fieldIndex === fieldCount) {
      classes.push('hora-grid__cell--fixed-right')
    }
  }

  // Mark first visible header cell
  if (fieldIndex === 1) {
    classes.push('hora-grid__header--first')
  }

  // Mark last visible header cell
  if (fieldIndex === fieldCount) {
    classes.push('hora-grid__header--last')
  }

  return classes.join(' ')
}