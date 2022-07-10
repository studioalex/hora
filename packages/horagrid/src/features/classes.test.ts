import { assert, describe, expect, it } from 'vitest'
import { getFieldClasses, getHeaderClasses } from './classes'


describe('feature => classes:', () => {

  it('field class should be fixed on first field and fix property', () => {
    expect(getFieldClasses(0, 10, true, true)).eq('fixed--left')
  })

  it('field class should be undefined on first field when fix property is false', () => {
    expect(getFieldClasses(0, 10, false, true)).eq(undefined)
  })

  it('field class should be fixed on last field when fix property is true', () => {
    expect(getFieldClasses(10, 10, false, true)).eq('fixed--right')
  })

  it('field class should be undefined on last field when fix property is true', () => {
    expect(getFieldClasses(10, 10, false, false)).eq(undefined)
  })

  it('field class should be undefined on any field when fix properties are false', () => {
    expect(getFieldClasses(8, 10, false, false)).eq(undefined)
  })

  it('Header first field should be fixed when header is fixed and also first field', () => {
    expect(getHeaderClasses(0, 10, true, true, true)).eq('fixed--topleft')
  })

  it('Header any field should be fixed when header is fixed', () => {
    expect(getHeaderClasses(2, 10, true, true, true)).eq('fixed--top')
  })

  it('Header last field should be fixed when header is fixed and also last field', () => {
    expect(getHeaderClasses(10, 10, true, true, true)).eq('fixed--topright')
  })

  it('Header first field should be fixed when only first field is fixed', () => {
    expect(getHeaderClasses(0, 10, false, true, true)).eq('fixed--left')
  })

  it('Header last field should be fixed when only last field is fixed', () => {
    expect(getHeaderClasses(10, 10, false, true, true)).eq('fixed--right')
  })

  it('Header should not be fixed when header is not fixed neither first field', () => {
    expect(getHeaderClasses(0, 10, false, false, false)).eq(undefined)
  })

  it('Header should not be fixed when header is not fixed neither last field', () => {
    expect(getHeaderClasses(10, 10, false, false, false)).eq(undefined)
  })

  it('Any Header should not be fixed when header is not fixed neither first or last field', () => {
    expect(getHeaderClasses(8, 10, false, false, false)).eq(undefined)
  })
})