<script lang="ts" setup>
  import { ref, toRefs, PropType, computed, Ref } from 'vue'
  import {
    getColumnClasses,
    getHeaderClasses
  } from '../features/classes'
  import {
    selected,
    isSelected,
    setSelection
  } from '../features/selection'
  import { HoraColumn } from '../types'
  import HoraHeaderColumnActions from './HoraHeaderColumnActions.vue'
  import HoraHeaderActions from './HoraHeaderActions.vue'
  import HoraSettings from './HoraSettings.vue'
  import HoraCheckbox from './HoraCheckbox.vue'

  const props = defineProps({
    columns: {
      type: Array as PropType<Array<HoraColumn>>,
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
    /* Let the first column static on the left while scrolling. */
    isFirstColumnStatic: {
      type: Boolean,
      default: false
    },
    /* Let the last column static on the left while scrolling. */
    isLastColumnStatic: {
      type: Boolean,
      default: false
    },
    /* When header visibility is enabled show the sort icons 
     * and enable the functionality */
    isSortable: {
      type: Boolean,
      default: false
    },
    /* Enable column single selection by showing action
     * column at the end on table view with a checkbox */
    isSelectable: {
      type: Boolean,
      default: false
    },
    /* Enable multiple column selection when selections are enabled */
    multipleSelection: {
      type: Boolean,
      default: false
    },
    /* Show settings icon in an additional column at the end on the table view. */
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
    columns,
    data,
    isHeaderStatic,
    isFirstColumnStatic,
    isLastColumnStatic,
    isHeaderVisible,
    isSortable,
    isSelectable,
    // multipleSelection,
    isSettingsEnabled
  } = toRefs(props)

  const emit = defineEmits(['sort', 'onSelection'])
  const sortColumn: Ref<string[]> = ref([])
  const settingsVisible = ref(false)
  // const selected: Ref<string[]> = ref([])
  const isActionColumnVisible = computed(() => (isSettingsEnabled.value === true || isSelectable.value === true))

  /**
   * Return the list of columns prepared for `grid-template-columns`
   * property.
   * - marked as visible
   * - ordered by order property
   * @returns Array
   */
  const columnList = computed(() => {
    return columns.value
      .filter(column => column.visible === true)
      .map(column => {
        column.order = column.order || 0
        return column
      })
      .sort((a:HoraColumn, b:HoraColumn): number => {
        if (typeof a.order != 'number') a.order = 0
        if (typeof b.order != 'number') b.order = 0
        return (a.order === b.order) ? 0 : (a.order < b.order) ? 1 : -1
      })
  })

  /**
   * Set `grid-template-columns` for grid.
   * @returns String to set the `grid-template-columns` css property
   */
  const gridTemplateColumns = computed(() => {
    const columnsInGrid = columnList.value.map(column => column.width || '1fr')
    if (isActionColumnVisible.value === true) {
      columnsInGrid.push('var(--hora-action-column-width)')
    }

    return columnsInGrid
  })

  const columnCount = computed(() => {
    let length = columnList.value.length
    if (isActionColumnVisible.value === true) {
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
      gridColumn: `1 / ${columnCount.value + 1}`
    }
  })

  /**
   * Handle click on sort icon. When sort is not set, or the clicked column
   * do not match with the first element in array, it set the clicked column
   * to sorting ascending. When the clicked column is the set one, we switch
   * the sorting direction.
   * @param column String
   * @returns {void}
   */
  function handleSort (column: string) {
    if (Array.isArray(sortColumn.value) && sortColumn.value[0]) {
      const [columnKey, sortDirection] = sortColumn.value[0].split('::')

      if (column === columnKey) {
        if (sortDirection === 'ASC') {
          sortColumn.value = [`${column}::DESC`]
        } else {
          sortColumn.value = [`${column}::ASC`]
        }
      } else {
        sortColumn.value = [`${column}::ASC`]
      }
    } else {
      sortColumn.value = [`${column}::ASC`]
    }

    // Emit the sort value
    emit('sort', sortColumn.value)
  }

  /**
   * Set the css class for the sort icon in header to show
   * which sort direction is set. Ascending or descending.
   * @param column String
   * @returns {string}
   */
  function getSortIconClass (column: string) {
    if (Array.isArray(sortColumn.value) && sortColumn.value[0]) {
      const [columnKey, sortDirection] = sortColumn.value[0].split('::')

      if (columnKey === column ) {
        return `hora__icon-sort--${sortDirection.toLowerCase()}`
      }
    }

    return ''
  }

  function toggleSettingsVisibility () {
    settingsVisible.value = !settingsVisible.value
  }

  function handleSelection (index: number) {
    setSelection(index)
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
    </HoraSettings>
    <!-- header -->
    <div
      v-if="isHeaderVisible"
      class="row__header">
      <!-- header columns -->
      <div
        v-for="(column, index) in columnList"
        :key="index"
        class="header"
        :class="getHeaderClasses(index, columnCount, isHeaderStatic, isFirstColumnStatic, isLastColumnStatic)">
        <!-- header column slot -->
        <div>
          <slot
            :name="`header-${column.key}`"
            :column="column">
            {{ column.title }}
          </slot>
        </div>
        <!-- header column action slot -->
        <HoraHeaderColumnActions
          :is-visible="isSortable === true && column.sortable !== false"
          :custom-class="getSortIconClass(column.key)"
          :column-key="column.key"
          @sort="handleSort(column.key)" />
      </div>
      <!-- header action column -->
      <HoraHeaderActions
        :is-visible="isActionColumnVisible"
        :custom-class="getHeaderClasses(columnCount, columnCount, isHeaderStatic, isFirstColumnStatic, isLastColumnStatic)"
        :is-settings-enabled="isSettingsEnabled === true"
        @settings="toggleSettingsVisibility" />
    </div>
    <!-- body -->
    <div
      v-for="(record, rowIndex) in data"
      :key="rowIndex"
      class="row">
      <div
        v-for="(column, columnIndex) in columnList"
        :key="columnIndex"
        class="cell"
        :class="getColumnClasses(columnIndex, columnCount, isFirstColumnStatic, isLastColumnStatic)">
        <!-- column slot -->
        <slot
          :name="`cell-${column.key}`"
          :record="record"
          :column="column">
          {{ record[column.key] }}
        </slot>
      </div>
      <div
        v-if="isActionColumnVisible"
        class="cell"
        :class="getColumnClasses(columnCount, columnCount, isFirstColumnStatic, isLastColumnStatic)">
        <HoraCheckbox
          :value="isSelected(rowIndex)"
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
