/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DataGrid from './DataGrid.vue'
import { HoraField } from '../types'
import data from '../test/test_data'

describe('Grid Field Settings', () => {
  it('should render', () => {
    const wrapper = mount(DataGrid, {
      propsData: {
        data: data.data,
        fields: data.columns as Array<HoraField>
      }
    })

    expect(wrapper.find('.hora-grid').exists()).toBeTruthy
  })
})