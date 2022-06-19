<script lang="ts" setup>
  import { ref, toRefs, PropType, computed } from 'vue'
  import { getColumnClasses, getHeaderClasses } from './hora'

  interface HoraColumns {
    key: string;
    title: string;
    visible: boolean;
    width: string;
    order: number;
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
    fixHeader: {
      type: Boolean,
      default: false
    },
    fixFirstColumn: {
      type: Boolean,
      default: false
    },
    canHover: {
      type: Boolean,
      default: true
    },
    canSort: {
      type: Boolean,
      default: false
    }
  })

  const {
    loading,
    columns,
    data,
    fixHeader,
    fixFirstColumn,
    isHeaderVisible,
    canHover,
    canSort
  } = toRefs(props)

  const sortColumn = ref(null)

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
  const gridTemplateColumns = computed(() => columnList.value.map(column => column.width || '1fr'))

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
      'hora--hover': canHover.value === true
    }
  })

</script>

<template>
  <div
    class="hora--grid"
    :class="gridClass"
    :style="gridStyle">
    <!-- header -->
    <div
      v-if="isHeaderVisible"
      class="row__header">
      <div 
        class="header"
        :class="getHeaderClasses(index, fixHeader, fixFirstColumn)"
        v-for="(column, index) in columnList"
        :key="index">
        <div>{{column.title}}</div>
        <div class="header__action">action</div>
      </div>
    </div>
    <!-- data -->
    <div
      class="row"
      v-for="(record, rowIndex) in data"
      :key="rowIndex">
      <div
        v-for="(column, columnIndex) in columnList"
        :key="columnIndex"
        class="cell"
        :class="getColumnClasses(columnIndex, fixFirstColumn)">
        <!-- enable -->
        <slot :name="column.key" :record="record" :column="column">
          {{ record[column.key] }}
        </slot>
      </div> 
    </div>
  </div>
</template>
