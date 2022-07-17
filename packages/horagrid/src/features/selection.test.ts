import { assert, describe, expect, it } from 'vitest'
import { selected, isSelected, setSelection } from './selection'

const firstIndex: number = 0;
const secondIndex: number = 3;

describe('feature => selections:', () => {
  it('selection should be empty', () => {
    assert.equal(selected.value.length, 0)
  })

  it('add first index number to multiple selection', () => {
    setSelection(firstIndex, true)
    assert.equal(selected.value.length, 1)
    expect(selected.value[0]).eq(firstIndex)
  })

  it('verify isSelected function work on index added before', () => {
    expect(isSelected(firstIndex)).eq(true)
  })

  it('add second index number to multiple selection', () => {
    setSelection(secondIndex, true)
    assert.equal(selected.value.length, 2)
    expect(selected.value[1]).eq(secondIndex)
  })

  it('remove first index number from multiple selection', () => {
    setSelection(firstIndex, true)
    assert.equal(selected.value.length, 1)
    expect(selected.value[0]).eq(secondIndex)
  })

  it('remove second index number from multiple selection', () => {
    setSelection(secondIndex, true)
    assert.equal(selected.value.length, 0)
  })

  it('add first index number to single selection', () => {
    setSelection(firstIndex, false)
    assert.equal(selected.value.length, 1)
    expect(selected.value[0]).eq(firstIndex)
  })

  it('add second index number to single selection', () => {
    setSelection(secondIndex, false)
    assert.equal(selected.value.length, 1)
    expect(selected.value[0]).eq(secondIndex)
  })
})