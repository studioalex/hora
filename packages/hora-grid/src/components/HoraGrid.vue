<script lang="ts" setup>
  import { toRefs, PropType, computed, watch } from 'vue'
  import { HoraField } from '../types'
  import { initGrid, properties } from '../features/initGrid'
  import { useGrid } from '../features/useGrid'
  import { emitter } from '../features/emitter'
  import GridField from './GridField.vue'
  import GridSettings from './settings/GridSettings.vue'
  import GridFieldHeader from './GridFieldHeader.vue'
  import GridHeader from './GridHeader.vue'
  import GridLoading from './GridLoading.vue'
  import GridNotFound from './GridNotFound.vue'

  const props = defineProps({
    fields: {
      type: Array as PropType<Array<HoraField>>,
      default: () => []
    },
    data: {
      type: Array as PropType<Array<any>>,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    /* Show the loading item which indicate data loading status */
    isLoading: {
      type: Boolean,
      default: false
    },
    /* Show or hide the whole header with all header functions */
    isHeaderVisible: {
      type: Boolean,
      default: true
    },
    /* Let the header position static  on the top while scrolling. */
    isHeaderStatic: {
      type: Boolean,
      default: false
    },
    /* Let the first field static on the left while scrolling. */
    isFirstFieldStatic: {
      type: Boolean,
      default: false
    },
    /* Let the last field static on the left while scrolling. */
    isLastFieldStatic: {
      type: Boolean,
      default: false
    },
    /* When header visibility is enabled show the sort icons 
     * and enable the functionality */
    isSortable: {
      type: Boolean,
      default: false
    },
    /* Enable field single selection by showing action
     * field at the end on table view with a checkbox */
    isSelectable: {
      type: Boolean,
      default: false
    },
    /* Enable multiple field selection when selections are enabled */
    isMultipleSelection: {
      type: Boolean,
      default: false
    },
    /* Show settings icon in an additional field at the end on the table view. */
    isSettingsEnabled: {
      type: Boolean,
      default: false
    },
    showSettings: {
      type: Boolean,
      default: false
    }
  })

  const {
    fields,
    data,
    title,
    isLoading,
    isHeaderStatic,
    isFirstFieldStatic,
    isLastFieldStatic,
    isHeaderVisible,
    isSortable,
    isSelectable,
    isMultipleSelection,
    isSettingsEnabled
  } = toRefs(props)

  properties.title = title
  properties.recordCount = computed(() => data.value.length)
  properties.isHeaderStatic = isHeaderStatic
  properties.isFirstFieldStatic = isFirstFieldStatic
  properties.isLastFieldStatic = isLastFieldStatic
  properties.isHeaderVisible = isHeaderVisible
  properties.isSortable = isSortable
  properties.isSelectable = isSelectable
  properties.isSettingsEnabled = isSettingsEnabled
  properties.isMultipleSelection = isMultipleSelection
  properties.isSettingsEnabled = isSettingsEnabled
  properties.isLoading = isLoading
  initGrid(fields)
  const isSettingsVisible = properties.isSettingsVisible
  const isNotFoundVisible = properties.isNotFoundVisible

  const {
    fieldList,
    isSelectionFieldVisible
  } = useGrid()

  /** Emitter */
  const emit = defineEmits<{
    (e: 'onSort', value: Array<string>): void
    (e: 'onSelection', value: Array<string>): void
  }>()

  emitter.on('onSort', (e) => {
    emit('onSort', e)
  })

  emitter.on('onSelection', (e) => {
    emit('onSelection', e)
  })

  /**
   * GRID DISPLAY OPTIONS
   * Set `grid-template-fields` for grid.
   * @returns String to set the `grid-template-fields` css property
   */
  const gridTemplateColumns = computed(() => {
    const columnsInGrid = fieldList.value.map(field => field.width || '1fr')
    if (isSelectionFieldVisible.value === true) {
      columnsInGrid.push('var(--HORA--cell-action--width)')
    }

    return columnsInGrid
  })

  /**
   * GRID DISPLAY OPTIONS
   * Set `grid-template-columns` in styles depend on column count and their visibility.
   * When Settings are visible set `grid-template-columns` fix to one column.
   */
  const gridStyle = computed(() => {
    let gridTemplateColumnsValue = gridTemplateColumns.value.join(' ')

    if (properties.isSettingsVisible.value === true
      || isLoading.value === true
      || isNotFoundVisible.value === true) {
      gridTemplateColumnsValue = '1fr'
    }

    return {
      gridTemplateColumns: gridTemplateColumnsValue
    }
  })

  /**
   * GRID DISPLAY OPTIONS
   * Set CSS Grid Classes for `hovering`
   * and if Setting, Loading or No Data Found view should be visible.
   */
  const gridClass = computed(() => {
    const isViewEnabled = properties.isSettingsVisible.value === true
      || isLoading.value === true
      || isNotFoundVisible.value === true
    return {
      'hora-grid--hover': isSelectable.value === true,
      'hora-grid--view-enabled': isViewEnabled
    }
  })

  /**
   * SETTINGS
   * Watch the component `showSettings` property,
   * when it change to enable the visibility of the settings from outside. 
   */
  watch(() => props.showSettings, (newValue) => {
    isSettingsVisible.value = newValue
  })

  /**
   * LOADING
   * Watch property is loading and hide all other internal views
   * like settings when loading view change.
   */
  watch(() => props.isLoading, () => {
    properties.isSettingsVisible.value = false
  })

  watch(() => data.value, () => {
    isNotFoundVisible.value = (data.value.length === 0)
  })
</script>

<template>
  <div class="hora">
    <GridHeader :title="title" />
    <div
      class="hora-grid"
      :class="gridClass"
      :style="gridStyle">
      <GridFieldHeader />
      <GridField :data="data" />
      <GridSettings :is-visible="isSettingsVisible" />
      <GridLoading :is-visible="isLoading">
        <slot name="loading"></slot>
      </GridLoading>
      <GridNotFound :is-visible="isNotFoundVisible">
        <slot name="notfound"></slot>
      </GridNotFound>
    </div>
  </div>
</template>
