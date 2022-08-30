/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FieldSettings from './FieldSettings.vue'
import { HoraField } from '../../types'

const testFields: HoraField[] = [
  {
    key: 'field1',
    title: 'First Field',
    visible: true,
    order: 1
  },
  {
    key: 'field2',
    title: 'Second Field',
    visible: true,
    order: 2
  }
]

describe('Grid Field Settings', () => {
  it('should render', () => {
    const wrapper = mount(FieldSettings, {
      propsData: {
        modelValue: testFields
      }
    })

    // Settings should be rendered
    expect(wrapper.find('.hora-grid-field-settings').exists()).toBeTruthy()
    // Fields should be rendered
    expect(wrapper.find('[data-field-key="field1"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-field-key="field2"]').exists()).toBeTruthy()

    // Verify the indicator for field 2 exists
    const field2Indicator = wrapper.find('[data-field-key="field2"] .hora-indicator')
    expect(field2Indicator.exists()).toBeTruthy()
    // Verify the indicator has active state
    expect(field2Indicator.classes()).toContain('hora-indicator--active')
    // Click the indicator
    field2Indicator.trigger('click')
    // Get emitted value
    const emittedOrder: any = wrapper.emitted('update:modelValue')
    // Verify emitted value visible should be false at second field
    expect(emittedOrder).toBeTruthy()
    const visibleProp: any = emittedOrder.flat().flat()[1]
    expect(visibleProp.visible).toBeFalsy()
  })
})