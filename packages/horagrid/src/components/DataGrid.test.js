/**
 * @vitest-environment happy-dom
 */
import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import DataGrid from './DataGrid.vue'

describe('Grid Field Settings', () => {
  it('should render', () => {
    const wrapper = mount(DataGrid)
  })
})