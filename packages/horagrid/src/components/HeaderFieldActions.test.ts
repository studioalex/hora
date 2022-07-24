/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderFieldActions from './HeaderFieldActions.vue'

describe('Grid header actions', () => {
  it('should not render', () => {
    const wrapper = mount(HeaderFieldActions)
    expect(wrapper.find('.hora-grid__row-header').exists()).toBeFalsy()
  })

  it('should not render without key', () => {
    const wrapper = mount(HeaderFieldActions, {
      propsData: {
        isVisible: true
      }
    })
    expect(wrapper.find('.hora-grid__row-header').exists()).toBeFalsy()
  })

  it('should render and function', () => {
    const wrapper = mount(HeaderFieldActions, {
      propsData: {
        isVisible: true,
        fieldKey: 'field1'
      }
    })
    expect(wrapper.find('.hora-grid__header__action').exists()).toBeTruthy()
    // click on sort icon
    const sortIcon = wrapper.find('.hora__icon-sort')
    expect(sortIcon.exists()).toBeTruthy()
    sortIcon.trigger('click')
    expect(wrapper.emitted().sort).toBeTruthy()
  })
})