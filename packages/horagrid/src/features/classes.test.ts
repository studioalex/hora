import { assert, describe, expect, it } from 'vitest'
import { getColumnClasses, getHeaderClasses } from './classes'


describe('feature => classes:', () => {

  it('Column class should be fixed on first column and fix property', () => {
    expect(getColumnClasses(0, 10, true, true)).eq('fixed--left')
  })

  it('Column class should be undefined on first column when fix property is false', () => {
    expect(getColumnClasses(0, 10, false, true)).eq(undefined)
  })

  it('Column class should be fixed on last column when fix property is true', () => {
    expect(getColumnClasses(10, 10, false, true)).eq('fixed--right')
  })

  it('Column class should be undefined on last column when fix property is true', () => {
    expect(getColumnClasses(10, 10, false, false)).eq(undefined)
  })

  it('Column class should be undefined on any column when fix properties are false', () => {
    expect(getColumnClasses(8, 10, false, false)).eq(undefined)
  })

  it('Header first column should be fixed when header is fixed and also first column', () => {
    expect(getHeaderClasses(0, 10, true, true, true)).eq('fixed--topleft')
  })

  it('Header any column should be fixed when header is fixed', () => {
    expect(getHeaderClasses(2, 10, true, true, true)).eq('fixed--top')
  })

  it('Header last column should be fixed when header is fixed and also last column', () => {
    expect(getHeaderClasses(10, 10, true, true, true)).eq('fixed--topright')
  })

  it('Header first column should be fixed when only first column is fixed', () => {
    expect(getHeaderClasses(0, 10, false, true, true)).eq('fixed--left')
  })

  it('Header last column should be fixed when only last column is fixed', () => {
    expect(getHeaderClasses(10, 10, false, true, true)).eq('fixed--right')
  })

  it('Header should not be fixed when header is not fixed neither first column', () => {
    expect(getHeaderClasses(0, 10, false, false, false)).eq(undefined)
  })

  it('Header should not be fixed when header is not fixed neither last column', () => {
    expect(getHeaderClasses(10, 10, false, false, false)).eq(undefined)
  })

  it('Any Header should not be fixed when header is not fixed neither first or last column', () => {
    expect(getHeaderClasses(8, 10, false, false, false)).eq(undefined)
  })
})