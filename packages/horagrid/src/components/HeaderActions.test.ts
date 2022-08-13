/**
 * @vitest-environment happy-dom
 */
import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderActions from './HeaderActions.vue'

describe('Grid Field Settings', () => {
  it('should render', () => {
    const wrapper = mount(HeaderActions)
    console.log(wrapper)
  })
})