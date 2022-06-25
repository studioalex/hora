<script lang="ts" setup>
  import { ref, toRefs, PropType, computed, Ref } from 'vue'
  import { getColumnClasses, getHeaderClasses } from './hora'
  import SortIcon from './SortIcon.vue'
  import GearIcon from './GearIcon.vue'
  import HoraSettings from './HoraSettings.vue'

  interface HoraColumns {
    key: string;
    title: string;
    visible?: boolean;
    width?: string;
    order?: number;
    sortable?: boolean;
  }

  const props = defineProps({
    columns: {
      type: Array as PropType<Array<HoraColumns>>,
      default: []
    },
    data: {
      type: Array as PropType<Array<any>>,
      default: []
    },
    loading: {
      type: Boolean,
      default: false
    },
    isHeaderVisible: {
      type: Boolean,
      default: true
    },
    isHeaderStatic: {
      type: Boolean,
      default: false
    },
    isFirstColumnStatic: {
      type: Boolean,
      default: false
    },
    isSortable: {
      type: Boolean,
      default: false
    },
    isSelectable: {
      type: Boolean,
      default: false
    },
    multipleSelection: {
      type: Boolean,
      default: false
    },
    isSettingsEnabled: {
      type: Boolean,
      default: false
    }
  })

  const {
    loading,
    columns,
    data,
    isHeaderStatic,
    isFirstColumnStatic,
    isHeaderVisible,
    isSortable,
    isSelectable,
    multipleSelection,
    isSettingsEnabled
  } = toRefs(props)

  const emit = defineEmits(['sort'])
  const sortColumn: Ref<String[]> = ref([])
  const settingsVisible = ref(false)
  const selected: Ref<String[]> = ref([])
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
      .sort((a, b) => (a.order === b.order) ? 0 : (a.order < b.order) ? 1 : -1)
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
   * Handle click on sort icon. When sort is not set, or the clicked column
   * do not match with the first element in array, it set the clicked column
   * to sorting ascending. When the clicked column is the set one, we switch
   * the sorting direction.
   * @param column String
   * @returns {void}
   */
  function handleSort (column: String) {
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
  function getSortIconClass (column: String) {
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
</script>

<template>
  <div
    class="hora__grid"
    :class="gridClass"
    :style="gridStyle">
    <!-- settings view -->
    <HoraSettings @close="toggleSettingsVisibility" v-if="isSettingsEnabled">
      content
    </HoraSettings>
    <!-- header -->
    <div
      v-if="isHeaderVisible"
      class="row__header">
      <!-- header columns -->
      <div 
        class="header"
        :class="getHeaderClasses(index, isHeaderStatic, isFirstColumnStatic)"
        v-for="(column, index) in columnList"
        :key="index">
        <!-- header column slot -->
        <div>
          <slot :name="`${column.key}-header`" :column="column">
          {{column.title}}
          </slot>
        </div>
        <!-- header column slot -->
        <div
          v-if="isSortable === true && column.sortable !== false"
          class="header__action">
          <button @click="handleSort(column.key)" class="hora__icon-button">
            <SortIcon class="hora__icon-sort" :class="getSortIconClass(column.key)" />
          </button>
        </div>
      </div>
      <!-- header action column -->
      <div
        v-if="isActionColumnVisible"
        class="header"
        :class="getHeaderClasses(columns.length++, isHeaderStatic, isFirstColumnStatic)">
        <button
          v-if="isSettingsEnabled === true"
          @click="toggleSettingsVisibility" 
          class="hora__icon-button">
          <GearIcon class="hora__icon"/>
        </button>
      </div>
    </div>
    <!-- body -->
    <div
      class="row"
      v-for="(record, rowIndex) in data"
      :key="rowIndex">
      <div
        v-for="(column, columnIndex) in columnList"
        :key="columnIndex"
        class="cell"
        :class="getColumnClasses(columnIndex, isFirstColumnStatic)">
        <!-- column slot -->
        <slot :name="column.key" :record="record" :column="column">
          {{ record[column.key] }}
        </slot>
      </div>
      <div
        v-if="isActionColumnVisible"
        class="cell">
      </div>
    </div>
  </div>
</template>
