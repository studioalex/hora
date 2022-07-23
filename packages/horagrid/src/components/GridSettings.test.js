/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GridSettings from './GridSettings.vue'

describe('Grid Settings', () => {
  it('should render', async () => {
    const wrapper = mount(GridSettings, {
      propsData: {
        title: 'test-value'
      }
    })
    // Property check
    expect(wrapper.props('title')).toBe('test-value')
    // Has close button
    expect(wrapper.find('button').exists()).toBeTruthy()
    // Has title
    expect(wrapper.find('.hora-settings__title').exists()).toBeTruthy()
    expect(wrapper.find('.hora-settings__title').text()).toBe('test-value')

    // Trigger close
    const button = wrapper.find('button')
    button.trigger('click')
    wrapper.vm.$nextTick()
    expect(wrapper.emitted().close).toBeTruthy()
  })
})