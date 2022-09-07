<script lang="ts" setup>
  import { toRefs, PropType, computed, watch } from 'vue'
  import { HoraField } from '../types'
  import { initGrid, GridOptions } from '../features/initGrid'
  import { useGrid } from '../features/useGrid'
  import { emitter } from '../features/emitter'
  import GridField from './GridField.vue'
  import GridSettings from './settings/GridSettings.vue'
  import GridFieldHeader from './GridFieldHeader.vue'
  import GridHeader from './GridHeader.vue'
  import GridLoading from './GridLoading.vue'
  import GridNoData from './GridNoData.vue'

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
    isMultipleSelectable: {
      type: Boolean,
      default: false
    },
    /* Show settings icon in an additional field at the end on the table view. */
    isSettingsEnabled: {
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
    isMultipleSelectable,
    isSettingsEnabled
  } = toRefs(props)
  
  const { settings, fieldsDefinition, visibleFields } = initGrid(fields)
  const {
    fieldList,
    isSelectionFieldVisible,
    closeAllDetails,
    clearSelection
  } = useGrid({ settings, fieldsDefinition, visibleFields })

  settings.title = title
  settings.recordCount = computed(() => data.value.length)
  settings.isHeaderStatic = isHeaderStatic
  settings.isFirstFieldStatic = isFirstFieldStatic
  settings.isLastFieldStatic = isLastFieldStatic
  settings.isHeaderVisible = isHeaderVisible
  settings.isSortable = isSortable
  settings.isSelectable = isSelectable
  settings.isSettingsEnabled = isSettingsEnabled
  settings.isMultipleSelectable = isMultipleSelectable
  settings.isSettingsEnabled = isSettingsEnabled
  settings.isLoading = isLoading

  const isSettingsVisible = settings.isSettingsVisible
  const isNoDataVisible = settings.isNoDataVisible

  const gridOptions: GridOptions = { settings, fieldsDefinition, visibleFields }

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
      columnsInGrid.push('var(--HORA--field-selection--width)')
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

    if (settings.isSettingsVisible.value === true
      || isLoading.value === true
      || isNoDataVisible.value === true) {
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
    const isViewEnabled = settings.isSettingsVisible.value === true
      || isLoading.value === true
      || isNoDataVisible.value === true
    return {
      'hora-grid--hover': isSelectable.value === true,
      'hora-grid--view-enabled': isViewEnabled
    }
  })

  /**
   * LOADING
   * Watch property is loading and hide all other internal views
   * like settings when loading view change.
   */
  watch(() => settings.isLoading.value, (newValue) => {
    if (newValue === true) {
      settings.isSettingsVisible.value = false
      settings.isNoDataVisible.value = false
    }
  })

  /**
   * Manage show "No Data Found" message visibility.
   * Also reset all selections and visible details slots.
   */
  watch(() => data.value, (newValue) => {
    isNoDataVisible.value = (newValue.length === 0)
    closeAllDetails()
    clearSelection()
  })

  /**
   * Show "No Data Found" message when there is no data
   * and setting view has been closed.
   */
  watch(() => settings.isSettingsVisible.value, (newValue) => {
    if (newValue === false && data.value.length === 0) {
      isNoDataVisible.value = true
    }
  })
</script>

<template>
  <div class="hora">
    <GridHeader
      :title="title"
      :options="gridOptions">
      <slot name="headline"></slot>
    </GridHeader>
    <div class="hora__wrapper">
      <div
        class="hora-grid"
        :class="gridClass"
        :style="gridStyle">
        <GridFieldHeader :options="gridOptions">
          <template
            v-for="(_, name) in $slots"
            #[name]="slotData">
            <slot
              :name="name"
              v-bind="slotData">
            </slot>
          </template>
        </GridFieldHeader>
        <GridField
          :data="data"
          :options="gridOptions">
          <template
            v-for="(_, name) in $slots"
            #[name]="slotData">
            <slot
              :name="name"
              v-bind="slotData">
            </slot>
          </template>
        </GridField>
        <GridSettings
          :is-visible="isSettingsVisible"
          :options="gridOptions" />
        <GridLoading :is-visible="isLoading">
          <slot name="loading"></slot>
        </GridLoading>
        <GridNoData :is-visible="isNoDataVisible">
          <slot name="nodata"></slot>
        </GridNoData>
      </div>
    </div>
  </div>
</template>
