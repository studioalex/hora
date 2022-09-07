import { describe, expect, it } from 'vitest'
import { getFieldClasses, getHeaderClasses } from './classes'


describe('feature => classes:', () => {

  // Field tests
  it('field class should be fixed on first field and fix property', () => {
    expect(getFieldClasses(1, 10, true, true)).eq('hora-grid__field hora-grid__field--first hora-grid__field--fixed-left')
  })

  it('field class should be undefined on first field when fix property is false', () => {
    expect(getFieldClasses(1, 10, false, true)).eq('hora-grid__field hora-grid__field--first')
  })

  it('field class should be fixed on last field when fix property is true', () => {
    expect(getFieldClasses(10, 10, false, true)).eq('hora-grid__field hora-grid__field--last hora-grid__field--fixed-right')
  })

  it('field class should be undefined on last field when fix property is true', () => {
    expect(getFieldClasses(10, 10, false, false)).eq('hora-grid__field hora-grid__field--last')
  })

  it('field class should be undefined on any field when fix properties are false', () => {
    expect(getFieldClasses(8, 10, false, false)).eq('hora-grid__field')
  })

  it('field class should be marked as first visible', () => {
    expect(getFieldClasses(1, 10, false, false)).eq('hora-grid__field hora-grid__field--first')
  })

  it('field class should be marked as last visible', () => {
    expect(getFieldClasses(10, 10, false, false)).eq('hora-grid__field hora-grid__field--last')
  })

  // header field tests
  it('Header first field should be fixed when header is fixed and also first field', () => {
    expect(getHeaderClasses(1, 10, true, true, true, false)).eq('hora-grid__header hora-grid__field--fixed-top-left hora-grid__header--first')
  })

  it('Header any field should be fixed when header is fixed', () => {
    expect(getHeaderClasses(2, 10, true, true, true, false)).eq('hora-grid__header hora-grid__field--fixed-top')
  })

  it('Header last field should be fixed when header is fixed and also last field', () => {
    expect(getHeaderClasses(10, 10, true, true, true, false)).eq('hora-grid__header hora-grid__field--fixed-top-right hora-grid__header--last')
  })

  it('Header first field should be fixed when only first field is fixed', () => {
    expect(getHeaderClasses(1, 10, false, true, true, false)).eq('hora-grid__header hora-grid__field--fixed-left hora-grid__header--first')
  })

  it('Header last field should be fixed when only last field is fixed', () => {
    expect(getHeaderClasses(10, 10, false, true, true, false)).eq('hora-grid__header hora-grid__field--fixed-right hora-grid__header--last')
  })

  it('Any Header should not be fixed when header is not fixed neither first or last field', () => {
    expect(getHeaderClasses(8, 10, false, false, false, false)).eq('hora-grid__header')
  })

  it('Is first header field identified', () => {
    expect(getHeaderClasses(1, 10, false, false, false, false)).eq('hora-grid__header hora-grid__header--first')
  })

  it('Is first header field identified on fixed header', () => {
    expect(getHeaderClasses(1, 10, true, false, false, false)).eq('hora-grid__header hora-grid__field--fixed-top hora-grid__header--first')
  })

  it('Is last header field identified', () => {
    expect(getHeaderClasses(10, 10, false, false, false, false)).eq('hora-grid__header hora-grid__header--last')
  })

  it('Is last header field identified on fixed header', () => {
    expect(getHeaderClasses(10, 10, true , false, false, false)).eq('hora-grid__header hora-grid__field--fixed-top hora-grid__header--last')
  })

  it('Is last header field identified on fixed header and action are visible', () => {
    expect(getHeaderClasses(10, 10, true , false, false, true)).eq('hora-grid__header hora-grid__field--fixed-top hora-grid__header--last hora-grid__header--action')
  })
})
