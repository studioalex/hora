import { assert, describe, expect, it } from 'vitest'
import { getFieldClasses, getHeaderClasses } from './classes'


describe('feature => classes:', () => {

  // cell tests
  it('field class should be fixed on first field and fix property', () => {
    expect(getFieldClasses(1, 10, true, true)).eq('cell cell--first fixed--left')
  })

  it('field class should be undefined on first field when fix property is false', () => {
    expect(getFieldClasses(1, 10, false, true)).eq('cell cell--first')
  })

  it('field class should be fixed on last field when fix property is true', () => {
    expect(getFieldClasses(10, 10, false, true)).eq('cell cell--last fixed--right')
  })

  it('field class should be undefined on last field when fix property is true', () => {
    expect(getFieldClasses(10, 10, false, false)).eq('cell cell--last')
  })

  it('field class should be undefined on any field when fix properties are false', () => {
    expect(getFieldClasses(8, 10, false, false)).eq('cell')
  })

  it('field class should be marked as first visible', () => {
    expect(getFieldClasses(1, 10, false, false)).eq('cell cell--first')
  })

  it('field class should be marked as last visible', () => {
    expect(getFieldClasses(10, 10, false, false)).eq('cell cell--last')
  })

  // header cell tests
  it('Header first field should be fixed when header is fixed and also first field', () => {
    expect(getHeaderClasses(1, 10, true, true, true)).eq('header fixed--topleft header--first')
  })

  it('Header any field should be fixed when header is fixed', () => {
    expect(getHeaderClasses(2, 10, true, true, true)).eq('header fixed--top')
  })

  it('Header last field should be fixed when header is fixed and also last field', () => {
    expect(getHeaderClasses(10, 10, true, true, true)).eq('header fixed--topright header--last')
  })

  it('Header first field should be fixed when only first field is fixed', () => {
    expect(getHeaderClasses(1, 10, false, true, true)).eq('header fixed--left header--first')
  })

  it('Header last field should be fixed when only last field is fixed', () => {
    expect(getHeaderClasses(10, 10, false, true, true)).eq('header fixed--right header--last')
  })

  it('Any Header should not be fixed when header is not fixed neither first or last field', () => {
    expect(getHeaderClasses(8, 10, false, false, false)).eq('header')
  })

  it('Is first header cell identified', () => {
    expect(getHeaderClasses(1, 10, false, false, false)).eq('header header--first')
  })

  it('Is first header cell identified on fixed header', () => {
    expect(getHeaderClasses(1, 10, true, false, false)).eq('header fixed--top header--first')
  })

  it('Is last header cell identified', () => {
    expect(getHeaderClasses(10, 10, false, false, false)).eq('header header--last')
  })

  it('Is last header cell identified on fixed header', () => {
    expect(getHeaderClasses(10, 10, true , false, false)).eq('header fixed--top header--last')
  })
})