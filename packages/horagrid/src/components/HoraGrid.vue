<script lang="ts" setup>
  import { ref, toRefs, PropType, computed, Ref } from 'vue'
  import {
    getFieldClasses,
    getHeaderClasses
  } from '../features/classes'
  import {
    selected,
    isSelected,
    setSelection
  } from '../features/selection'
  import { HoraField } from '../types'
  import HoraHeaderFieldActions from './HoraHeaderFieldActions.vue'
  import HoraHeaderActions from './HoraHeaderActions.vue'
  import HoraSettings from './HoraSettings.vue'
  import HoraCheckbox from './HoraCheckbox.vue'

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
    singleSelection: {
      type: Boolean,
      default: false
    },
    /* Show settings icon in an additional field at the end on the table view. */
    isSettingsEnabled: {
      type: Boolean,
      default: false
    },
    /*  */
    selected: {
      type: Array as PropType<Array<any>>,
      default: () => []
    }
  })

  const {
    // loading,
    fields,
    data,
    isHeaderStatic,
    isFirstFieldStatic,
    isLastFieldStatic,
    isHeaderVisible,
    isSortable,
    isSelectable,
    singleSelection,
    isSettingsEnabled
  } = toRefs(props)

  const emit = defineEmits(['sort', 'onSelection'])
  const fieldsDefinition: Ref<Array<HoraField>> = ref([])
  const sortField: Ref<string[]> = ref([])
  const settingsVisible = ref(false)
  // const selected: Ref<string[]> = ref([])
  const isActionFieldVisible = computed(() => (isSettingsEnabled.value === true || isSelectable.value === true))

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
      columnsInGrid.push('var(--hora-action-column-width)')
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
   * Set Grid styles.
   */
  const gridStyle = computed(() => {
    return {
      gridTemplateColumns: gridTemplateColumns.value.join(' ')
    }
  })

  /**
   * Set Grid CSS classes like:
   * - row hovering
   */
  const gridClass = computed(() => {
    return {
      'hora__grid--hover': isSelectable.value === true,
      'hora__grid--settings': settingsVisible.value === true
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
        return `hora__icon-sort--${sortDirection.toLowerCase()}`
      }
    }

    return ''
  }

  function toggleSettingsVisibility () {
    settingsVisible.value = !settingsVisible.value
  }

  function handleSelection (index: number) {
    setSelection(index, singleSelection.value)
    emit('onSelection', data.value.filter((record, index) => selected.value.includes(index)))
  }
</script>

<template>
  <div
    class="hora__grid"
    :class="gridClass"
    :style="gridStyle">
    <!-- settings view -->
    <HoraSettings
      v-if="isSettingsEnabled"
      @close="toggleSettingsVisibility">
      content
      <div>Field List: {{fieldList}}</div>
      <div>Field Count: {{fieldCount}}</div>
      <div>Fields: {{fields}}</div>
    </HoraSettings>
    <!-- header -->
    <div
      v-if="isHeaderVisible"
      class="row__header">
      <!-- header fields -->
      <div
        v-for="(field, index) in fieldList"
        :key="index"
        class="header"
        :class="getHeaderClasses(index, fieldCount, isHeaderStatic, isFirstFieldStatic, isLastFieldStatic)">
        <!-- header field slot -->
        <div>
          <slot
            :name="`header-${field.key}`"
            :field="field">
            {{ field.title }}
          </slot>
        </div>
        <!-- header field action slot -->
        <HoraHeaderFieldActions
          :is-visible="isSortable === true && field.sortable !== false"
          :custom-class="getSortIconClass(field.key)"
          :field-key="field.key"
          @sort="handleSort(field.key)" />
      </div>
      <!-- header action field -->
      <HoraHeaderActions
        :is-visible="isActionFieldVisible"
        :custom-class="getHeaderClasses(fieldCount, fieldCount, isHeaderStatic, isFirstFieldStatic, isLastFieldStatic)"
        :is-settings-enabled="isSettingsEnabled === true"
        @settings="toggleSettingsVisibility" />
    </div>
    <!-- body -->
    <div
      v-for="(record, rowIndex) in data"
      :key="rowIndex"
      class="row">
      <div
        v-for="(field, fieldIndex) in fieldList"
        :key="fieldIndex"
        class="cell"
        :class="getFieldClasses(fieldIndex, fieldCount, isFirstFieldStatic, isLastFieldStatic)">
        <!-- field slot -->
        <slot
          :name="`cell-${field.key}`"
          :record="record"
          :field="field">
          {{ record[field.key] }}
        </slot>
      </div>
      <div
        v-if="isActionFieldVisible"
        class="cell"
        :class="getFieldClasses(fieldCount, fieldCount, isFirstFieldStatic, isLastFieldStatic)">
        <HoraCheckbox
          :v-model="isSelected(rowIndex)"
          @change="handleSelection(rowIndex)" />
      </div>
      <div
        class="row__details"
        :style="rowDetailStyle">
        <slot name="row-details">
          subgrid
        </slot>
      </div>
    </div>
  </div>
</template>
