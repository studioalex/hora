<script lang="ts" setup>
  import { ref, toRefs, PropType, computed, watch, Ref } from 'vue'
  import {
    getFieldClasses,
    getHeaderClasses
  } from '../features/classes'
  import {
    selected,
    isSelected,
    setSelection,
    clearSelection,
    selectedCount,
    selectAll
  } from '../features/selection'
  import { HoraField } from '../types'
  import HoraHeaderFieldActions from './HeaderFieldActions.vue'
  import HoraGridSettings from './GridSettings.vue'
  import HoraGridLoading from './GridLoading.vue'
  import HoraFieldSettings from './FieldSettings.vue'
  import HoraStatusIndicator from './StatusIndicator.vue'

  const props = defineProps({
    fields: {
      type: Array as PropType<Array<HoraField>>,
      default: () => []
    },
    data: {
      type: Array as PropType<Array<any>>,
      default: () => []
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

  const emit = defineEmits(['onSort', 'onSelection'])

  /**
   * COMPONENT PREPARATION
   * > > > > > > > > > > > >
   */
  const fieldsDefinition: Ref<Array<HoraField>> = ref([])
  const sortField: Ref<string[]> = ref([])

  /**
   * Prepare field definitions,
   * The minimum requirement on field definitions is the key property,
   * to identify the data property in the JSON object. But we expect some
   * properties, like `order` or `title` that exists.
   * Here we set the minimum field definition properties.
   * @todo may it is better to use a lib like ZOD
   */
  fieldsDefinition.value = fields.value.map(field => {
    field.visible = (field.visible != false)
    field.order = field.order || 0
    field.title = field.title || field.key
    return field
  })

  /**
   * Return a list of fields in sorted order and only fields mark as visible.
   * The list is also required by `grid-template-fields` to set the right amount of fields.
   *
   * The list contains only field:
   *   - marked as visible
   *   - ordered by order property
   *
   * @returns Array
   */
  const fieldList = computed(() =>
    fieldsDefinition.value
      .filter(field => field.visible === true)
      .sort((a:HoraField, b:HoraField): number => {
        if (typeof a.order != 'number') a.order = 0
        if (typeof b.order != 'number') b.order = 0
        return (a.order === b.order) ? 0 : (a.order < b.order) ? 1 : -1
      })
  )
  
  /**
   * Return the total number of visible fields.
   */
  const fieldCount = computed(() => {
    let length = fieldList.value.length
    if (isSelectionFieldVisible.value === true) {
      length++
    }
    return length
  })
  
  /**
   * Return the total number of visible records.
   */
  const recordCount = computed(() => data.value.length)

  /**
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
   * > > > > > > > > > > > >
   * 
   */
  /**
   * Set `grid-template-columns` in styles depend on column count and their visibility.
   * When Settings are visible set `grid-template-columns` fix to one column.
   */
  const gridStyle = computed(() => {
    let gridTemplateColumnsValue = gridTemplateColumns.value.join(' ')

    if (settingsVisible.value === true || isLoading.value === true) {
      gridTemplateColumnsValue = '1fr'
    }

    return {
      gridTemplateColumns: gridTemplateColumnsValue
    }
  })

  /**
   * Set Grid CSS classes like:
   * - row hovering
   */
  const gridClass = computed(() => {
    return {
      'hora-grid--hover': isSelectable.value === true,
      'hora-grid--view-enabled': settingsVisible.value === true || isLoading.value === true
    }
  })

  /**
   * SELECTIONS
   * > > > > > > > >
   * Handle record selections.
   */
  const isSelectionFieldVisible = computed(() => (isSelectable.value === true))

  /**
   * Handle selection click on record.
   * Add selected record to list and propagate all selected records.  
   * @param index 
   */
  function handleSelection (index: number) {
    setSelection(index, isMultipleSelection.value)
    emit('onSelection', data.value.filter((__record, index) => selected.value.includes(index)))
  }

  /**
   * Clear selection when single or multiple select ability was disabled.
   */
  watch([isSelectable, isMultipleSelection], ([newSelectable, newMultipleSelection]) => {
    if (newSelectable === false || newMultipleSelection === false) {
      clearSelection()
    }
  })

  /**
   * Return `true` if all visible records are selected.
   */
  const isSelectedAll = computed(() => recordCount.value === selectedCount.value)

  /**
   * Mark all records as selected.
   * Clear the selection and add all records to the selection list.
   */
  function handleSelectAll () {
    if (isSelectedAll.value === true) {
      clearSelection()
    } else {
      selectAll(recordCount.value)
    }
  }

  /**
   * SETTINGS
   * > > > > > > > >
   * Show or hide settings panel.
   */
  const settingsVisible = ref(false)

  /**
   * Toggle settings visibility
   */
  function toggleSettingsVisibility (): void {
    settingsVisible.value = !settingsVisible.value
  }

  /**
   * Watch the component `showSettings` property,
   * when it change to enable the visibility of the settings from outside. 
   */
  watch(() => props.showSettings, (newValue) => {
    settingsVisible.value = (newValue && isSettingsEnabled.value)
  })

  /**
   * SETTINGS::FIELD
   * > > > > > > > > > >
   */
  /**
   * Handle click on sort icon. When sort is not set, or the clicked field
   * do not match with the first element in array, it set the clicked field
   * to sorting ascending. When the clicked field is the set one, we switch
   * the sorting direction.
   * @param field String
   * @returns {void}
   */
  function handleSort (field: string) {
    if (Array.isArray(sortField.value) && sortField.value[0]) {
      const [fieldKey, sortDirection] = sortField.value[0].split('::')

      if (field === fieldKey) {
        if (sortDirection === 'ASC') {
          sortField.value = [`${field}::DESC`]
        } else {
          sortField.value = [`${field}::ASC`]
        }
      } else {
        sortField.value = [`${field}::ASC`]
      }
    } else {
      sortField.value = [`${field}::ASC`]
    }

    // Emit the sort value
    emit('onSort', sortField.value[0].split('::'))
  }

  /**
   * Set the css class for the sort icon in header to show
   * which sort direction is set. Ascending or descending.
   * @param field String
   * @returns {string}
   */
  function getSortIconClass (field: string) {
    if (Array.isArray(sortField.value) && sortField.value[0]) {
      const [fieldKey, sortDirection] = sortField.value[0].split('::')

      if (fieldKey === field ) {
        return `hora__icon hora__icon-sort--${sortDirection.toLowerCase()}`
      }
    }

    return ''
  }

  /**
   * LOADING
   * > > > > > > >
   * Watch property is loading and hide all other internal views
   * like settings when loading view change.
   */
  watch(() => props.isLoading, () => {
    settingsVisible.value = false
  })

  /**
   * RECORD SUBGRID
   * > > > > > > > > > >
   * Set Subgrid styles.
   */
  const rowDetailStyle = computed(() => {
    return {
      gridColumn: `1 / ${fieldCount.value + 1}`
    }
  })
</script>

<template>
  <div class="hora">
    <div
      class="hora-grid"
      :class="gridClass"
      :style="gridStyle">
      <!-- SETTINGS -->
      <HoraGridSettings
        v-if="isSettingsEnabled"
        :is-visible="settingsVisible"
        @close="toggleSettingsVisibility">
        <HoraFieldSettings v-model="fieldsDefinition" />
      </HoraGridSettings>
      <!-- LOADING -->
      <HoraGridLoading :is-visible="isLoading" />
      <!-- HEADER -->
      <div
        v-if="isHeaderVisible"
        class="hora-grid__row-header">
        <!-- HEADER::FIELD -->
        <div
          v-for="(field, index) in fieldList"
          :key="index"
          :class="getHeaderClasses(index+1, fieldCount, isHeaderStatic, isFirstFieldStatic, isLastFieldStatic, (isSortable === true && field.sortable !== false))">
          <!-- HEADER::SLOT -->
          <div>
            <slot
              :name="`header-${field.key}`"
              :field="field">
              {{ field.title }}
            </slot>
          </div>
          <!-- HEADER::INFIELD-ACTIONS -->
          <HoraHeaderFieldActions
            :is-visible="isSortable === true && field.sortable !== false"
            :custom-class="getSortIconClass(field.key)"
            :field-key="field.key"
            @sort="handleSort(field.key)" />
        </div>
        <!-- HEADER::ALL-RECORDS-SELECTION -->
        <div
          v-if="isSelectionFieldVisible"
          :class="getHeaderClasses(fieldCount, fieldCount, isHeaderStatic, isFirstFieldStatic, isLastFieldStatic, true)">
          <HoraStatusIndicator
            v-if="isMultipleSelection"
            :is-active="isSelectedAll"
            @click="handleSelectAll()" />
        </div>
      </div>
      <!-- FIELDS -->
      <div
        v-for="(record, rowIndex) in data"
        :key="rowIndex"
        class="hora-grid__row">
        <div
          v-for="(field, fieldIndex) in fieldList"
          :key="fieldIndex"
          :class="getFieldClasses(fieldIndex+1, fieldCount, isFirstFieldStatic, isLastFieldStatic)"
          :data-selected="isSelected(rowIndex)">
          <!-- FIELD::SLOT -->
          <slot
            :name="`cell-${field.key}`"
            :record="record"
            :field="field">
            {{ record[field.key] }}
          </slot>
        </div>
        <!-- FIELD::RECORD-SELECTION -->
        <div
          v-if="isSelectionFieldVisible"
          :class="getFieldClasses(fieldCount, fieldCount, isFirstFieldStatic, isLastFieldStatic)"
          :data-selected="isSelected(rowIndex)">
          <HoraStatusIndicator
            :is-active="isSelected(rowIndex)"
            @click="handleSelection(rowIndex)" />
        </div>
        <!-- FIELD::DETAILS -->
        <div
          class="hora-grid__row-details"
          :style="rowDetailStyle">
          <slot name="row-details">
            subgrid
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
