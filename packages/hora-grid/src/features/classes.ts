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
  const _index = fieldIndex + 1
  const classes: Array<string> = [
    'hora-grid__field'
  ]
  // Mark as first field
  if (_index === 1) {
    classes.push('hora-grid__field--first')
  }
  // Mark as last field
  if (_index === fieldCount) {
    classes.push('hora-grid__field--last')
  }
  // Fix first field and mark as static
  if (isFirstFieldFixed === true && _index === 1) {
    classes.push('hora-grid__field--fixed-left')
  }
  // Fix last field and mark as static
  if (isLastFieldFixed === true && _index === fieldCount) {
    classes.push('hora-grid__field--fixed-right')
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
  isLastFieldFixed: boolean,
  hasActionField: boolean
  ): string {
  const _index = fieldIndex + 1
  const classes: Array<string> = [
    'hora-grid__header'
  ]
  // Header is marked as fixed
  if (isHeaderFixed === true) {
    // Fixed top-left
    if (isFirstFieldFixed === true && _index === 1) {
      classes.push('hora-grid__field--fixed-top-left')
    }
    // Fixed top-right
    if (isLastFieldFixed === true && _index === fieldCount) {
      classes.push('hora-grid__field--fixed-top-right')
    }
    // Top all others fields
    if ((_index > 1 && _index < fieldCount) 
       || (isFirstFieldFixed === false && _index === 1)
       || (isLastFieldFixed === false && _index === fieldCount)) {
      classes.push('hora-grid__field--fixed-top')
    }
  }

  // Header is NOT marked as fixed
  if (isHeaderFixed === false) {
    // Fixed left
    if (isFirstFieldFixed === true && _index === 1) {
      classes.push('hora-grid__field--fixed-left')
    }
    // Fixed right
    if (isLastFieldFixed === true && _index === fieldCount) {
      classes.push('hora-grid__field--fixed-right')
    }
  }

  // Mark first visible header field
  if (_index === 1) {
    classes.push('hora-grid__header--first')
  }

  // Mark last visible header field
  if (_index === fieldCount) {
    classes.push('hora-grid__header--last')
  }

  // Has action Field inside
  if (hasActionField === true) {
    classes.push('hora-grid__header--action')
  }

  return classes.join(' ')
}
