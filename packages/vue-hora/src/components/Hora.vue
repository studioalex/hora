<script lang="ts" setup>
  import { reactive, toRefs, PropType, computed } from 'vue'

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
    showActions: {
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
    canHover
  } = toRefs(props)

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
  const gridStyle = reactive({
    gridTemplateColumns: gridTemplateColumns.value.join(' ')
  })

  /**
   * Set Grid CSS classes.
   */
  const gridClass = reactive({
    'hora--hover': canHover.value
  })

  /**
   * Set column header classes to enable
   * - fix headers
   * @param columnOrder 
   */
  function getHeaderClasses(columnIndex) {
    const classes = []

    if (fixHeader.value && fixFirstColumn.value && columnIndex === 0) {
      classes.push("fixed--topleft")
    }

    if (!fixHeader.value && fixFirstColumn.value && columnIndex === 0) {
      classes.push("fixed--left")
    }

    if (fixHeader.value && !fixFirstColumn.value && columnIndex === 0) {
      classes.push("fixed--top")
    }

    if (fixHeader.value && columnIndex > 0) {
      classes.push("fixed--top")
    }

    return classes.join(' ')
  }

  function getColumnClasses(columnIndex) {
    const classes = []

    if (fixFirstColumn.value && columnIndex === 0) {
      classes.push('fixed--left')
    }
    return classes.join(' ')
  }
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
        :class="getHeaderClasses(index)"
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
        class="cell"
        :class="getColumnClasses(columnIndex)"
        v-for="(column, columnIndex) in columnList"
        :key="columnIndex">
        {{record[column.key]}}
      </div>
    </div>
  </div>
</template>
