/**
 * @vitest-environment happy-dom
 */
import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FieldSettings from './FieldSettings.vue'

describe('Grid Field Settings', () => {
  it('should render', () => {
    const wrapper = mount(FieldSettings)
  })
})