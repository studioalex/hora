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
): string|undefined {
  // Fix first field
  if (isFirstFieldFixed === true && fieldIndex === 0) {
    return 'fixed--left'
  }
  // Fix last field
  if (isLastFieldFixed === true && fieldIndex === fieldCount) {
    return 'fixed--right'
  }
  return undefined
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
  ): string|undefined {
  // Top-left
  if (isHeaderFixed === true
    && isFirstFieldFixed === true
    && fieldIndex === 0) {
    return 'fixed--topleft'
  }
  // Top-right
  if (isHeaderFixed === true
    && isLastFieldFixed === true
    && fieldIndex === fieldCount) {
      return 'fixed--topright'
  }
  // Left
  if (isHeaderFixed === false
    && isFirstFieldFixed === true
    && fieldIndex === 0) {
      return 'fixed--left'
  }
  // Right
  if (isHeaderFixed === false
    && isLastFieldFixed === true
    && fieldIndex === fieldCount) {
      return 'fixed--right'
  }
  // Top all others fields
  if (isHeaderFixed === true) {
    return 'fixed--top'
  }

  return undefined
}