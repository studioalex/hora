/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HoraGrid from './HoraGrid.vue'
import { HoraField } from '../types'
import data from '../test/test_data'

describe('Grid Field Settings', () => {
  it('should render', () => {
    const wrapper = mount(HoraGrid, {
      propsData: {
        data: data.data,
        fields: data.columns as Array<HoraField>
      }
    })

    expect(wrapper.find('.hora-grid').exists()).toBeTruthy
  })
})
