/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GridSettings from './GridSettings.vue'

describe('Grid Settings', () => {
  it('should render ab be visible', async () => {
    const wrapper = mount(GridSettings, {
      propsData: {
        isVisible: true
      }
    })
    // verify is rendered
    expect(wrapper.find('.hora-settings').exists()).toBeTruthy()
    expect(wrapper.find('.hora-settings.hora-settings--visible').exists()).toBeTruthy()
  })

  it('should render and not be visible', async () => {
    const wrapper = mount(GridSettings, {
      propsData: {
        isVisible: false
      }
    })
    // verify is rendered
    expect(wrapper.find('.hora-settings').exists()).toBeTruthy()
    expect(wrapper.find('.hora-settings.hora-settings--visible').exists()).toBeFalsy()
  })
})

