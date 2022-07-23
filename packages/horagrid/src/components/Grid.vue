<script lang="ts" setup>
  import { ref, toRefs, PropType, computed, watch, Ref } from 'vue'
  // import { VueDraggableNext as draggable} from 'vue-draggable-next'
  import {
    getFieldClasses,
    getHeaderClasses
  } from '../features/classes'
  import {
    selected,
    isSelected,
    setSelection,
    clearSelection
  } from '../features/selection'
  import { HoraField } from '../types'
  import HoraHeaderFieldActions from './HeaderFieldActions.vue'
  import HoraHeaderActions from './HeaderActions.vue'
  import HoraSettings from './Settings.vue'
  import HoraIndicator from './Indicator.vue'
  import HoraFieldSettings from './FieldSettings.vue'

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
    loading: {
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
    loading,
    fields,
    data,
    isHeaderStatic,
    isFirstFieldStatic,
    isLastFieldStatic,
    isHeaderVisible,
    isSortable,
    isSelectable,
    isMultipleSelection,
    isSettingsEnabled
  } = toRefs(props)

  const emit = defineEmits(['sort', 'onSelection'])
  const fieldsDefinition: Ref<Array<HoraField>> = ref([])
  const sortField: Ref<string[]> = ref([])
  const isActionFieldVisible = computed(() => (isSettingsEnabled.value === true || isSelectable.value === true))

  // Settings
  const settingsVisible = ref(false)
  watch(() => props.showSettings, (newValue) => {
    settingsVisible.value = (newValue && isSettingsEnabled.value)
  })

  // prepare field definitions
  fieldsDefinition.value = fields.value.map(field => {
    field.visible = (field.visible != false)
    field.order = field.order || 0
    field.title = field.title || field.key
    return field
  })
  /**
   * Return the list of fields prepared for `grid-template-fields`
   * property.
   * - marked as visible
   * - ordered by order property
   * @returns Array
   */
  const fieldList = computed(() => {
    return fieldsDefinition.value
      .filter(field => field.visible === true)
      .sort((a:HoraField, b:HoraField): number => {
        if (typeof a.order != 'number') a.order = 0
        if (typeof b.order != 'number') b.order = 0
        return (a.order === b.order) ? 0 : (a.order < b.order) ? 1 : -1
      })
  })

  /**
   * Set `grid-template-fields` for grid.
   * @returns String to set the `grid-template-fields` css property
   */
  const gridTemplateColumns = computed(() => {
    const columnsInGrid = fieldList.value.map(field => field.width || '1fr')
    if (isActionFieldVisible.value === true) {
      columnsInGrid.push('var(--HORA--cell-action--width)')
    }

    return columnsInGrid
  })
  
  /**
   * Return the total number of visible fields.
   */
  const fieldCount = computed(() => {
    let length = fieldList.value.length
    if (isActionFieldVisible.value === true) {
      length++
    }
    return length
  })

  /**
   * Set `grid-template-columns` in styles depend on column count and their visibility.
   * When Settings are visible set `grid-template-columns` fix to one column.
   */
  const gridStyle = computed(() => {
    let gridTemplateColumnsValue = gridTemplateColumns.value.join(' ')

    if (settingsVisible.value === true) {
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
      'hora-grid--settings-enabled': settingsVisible.value === true
    }
  })

  /**
   * Set Subgrid styles.
   */
  const rowDetailStyle = computed(() => {
    return {
      gridColumn: `1 / ${fieldCount.value + 1}`
    }
  })

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
    emit('sort', sortField.value)
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
   * SELECTION
   * ---------
   * @param index 
   */
  function handleSelection (index: number) {
    setSelection(index, isMultipleSelection.value)
    emit('onSelection', data.value.filter((record, index) => selected.value.includes(index)))
  }
  /**
   * Clear selection when select ability was disabled.
   */
  watch([isSelectable,isMultipleSelection], ([newSelectable, newMultipleSelection]) => {
    if (newSelectable === false || newMultipleSelection === false) {
      clearSelection()
    }
  })

  /**
   * SETTINGS
   * --------
   */
  function toggleSettingsVisibility (): void {
    settingsVisible.value = !settingsVisible.value
  }
</script>

<template>
<div class="hora">
  <div
    class="hora-grid"
    :class="gridClass"
    :style="gridStyle">
    <!-- SETTINGS -->
    <HoraSettings
      v-if="isSettingsEnabled"
      @close="toggleSettingsVisibility">
        <HoraFieldSettings v-model="fieldsDefinition" />
    </HoraSettings>
    <!-- HEADER -->
    <div
      v-if="isHeaderVisible"
      class="hora-grid__row-header">
      <!-- HEADER::FIELD -->
      <div
        v-for="(field, index) in fieldList"
        :key="index"
        :class="getHeaderClasses(index+1, fieldCount, isHeaderStatic, isFirstFieldStatic, isLastFieldStatic)">
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
      <!-- HEADER::ACTIONS -->
      <HoraHeaderActions
        :is-visible="isActionFieldVisible"
        :custom-class="getHeaderClasses(fieldCount, fieldCount, isHeaderStatic, isFirstFieldStatic, isLastFieldStatic)"
        :is-settings-enabled="isSettingsEnabled === true"
        @settings="toggleSettingsVisibility" />
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
      <!-- FIELD::ACTIONS -->
      <div
        v-if="isActionFieldVisible"
        :class="getFieldClasses(fieldCount, fieldCount, isFirstFieldStatic, isLastFieldStatic)"
        :data-selected="isSelected(rowIndex)">
        <HoraIndicator 
          v-if="isSelectable"
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
