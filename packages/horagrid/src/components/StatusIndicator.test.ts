/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusIndicator from './StatusIndicator.vue'

describe('Grid Field Settings', () => {
  it('should render active indicator', () => {
    const wrapper = mount(StatusIndicator, {
      propsData: {
        isActive: true
      }
    })
    expect(wrapper.find('.hora-indicator--active').exists()).toBeTruthy()
  })

  it('should render inactive indicator', () => {
    const wrapper = mount(StatusIndicator, {
      propsData: {
        isActive: false
      }
    })
    expect(wrapper.find('.hora-indicator').exists()).toBeTruthy()
  })
})