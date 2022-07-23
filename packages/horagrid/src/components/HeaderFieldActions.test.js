/**
 * @vitest-environment happy-dom
 */
import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderFieldActions from './HeaderFieldActions.vue'

describe('Grid Field Settings', () => {
  it('should render', () => {
    const wrapper = mount(HeaderFieldActions)
  })
})