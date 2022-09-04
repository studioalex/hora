<script lang="ts" setup>
  import { watch, computed, toRefs, PropType } from 'vue'
  import { emitter } from '../features/emitter'
  import { GridOptions } from '../features/initGrid'
  import { useGrid } from '../features/useGrid'
  import { getHeaderClasses } from '../features/classes'
  import GridFieldHeaderActions from './GridFieldHeaderActions.vue'
  import HoraStatusIndicator from './StatusIndicator.vue'

  const props = defineProps({
    options: {
      type: Object as PropType<GridOptions>,
      required: true
    }
  })
  const { options } = toRefs(props)
  const {
    fieldList,
    fieldCount,
    getSortIconClass,
    isSelectionFieldVisible,
    visibleFields,
    clearSelection,
    selectedCount,
    selectAll
  } = useGrid(options.value)

  const {
    isHeaderStatic,
    isFirstFieldStatic,
    isLastFieldStatic,
    isSortable,
    isMultipleSelectable,
    isSelectable,
    recordCount
  } = options.value.settings

  /**
   * Clear selection when single or multiple select ability was disabled.
   */
  watch([isSelectable, isMultipleSelectable], ([newSelectable, newMultipleSelection]) => {
    if (newSelectable === false || newMultipleSelection === false) {
      clearSelection()
    }
  })

  /**
   * Return `true` if all visible records are selected.
   */
  const isSelectedAll = computed(() => recordCount.value === selectedCount.value)

  /**
   * Handle click on sort icon. When sort is not set, or the clicked field
   * do not match with the first element in array, it set the clicked field
   * to sorting ascending. When the clicked field is the set one, we switch
   * the sorting direction.
   * @param field String
   * @returns {void}
   */
   function handleSort (field: string) {
    if (Array.isArray(visibleFields.value) && visibleFields.value[0]) {
      const [fieldKey, sortDirection] = visibleFields.value[0].split('::')

      if (field === fieldKey) {
        if (sortDirection === 'ASC') {
          visibleFields.value = [`${field}::DESC`]
        } else {
          visibleFields.value = [`${field}::ASC`]
        }
      } else {
        visibleFields.value = [`${field}::ASC`]
      }
    } else {
      visibleFields.value = [`${field}::ASC`]
    }

    // Emit the sort value
    emitter.emit('onSort', visibleFields.value[0].split('::'))
  }

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
</script>

<template>
  <!-- HEADER -->
  <div
    v-if="options.settings.isHeaderVisible.value"
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
      <GridFieldHeaderActions
        :is-visible="options.settings.isSortable.value === true && field.sortable !== false"
        :custom-class="getSortIconClass(field.key)"
        :field-key="field.key"
        @sort="handleSort(field.key)" />
    </div>
    <!-- HEADER::ALL-RECORDS-SELECTION -->
    <div
      v-if="isSelectionFieldVisible"
      :class="getHeaderClasses(fieldCount, fieldCount, isHeaderStatic, isFirstFieldStatic, isLastFieldStatic, true)">
      <HoraStatusIndicator
        v-if="isMultipleSelectable"
        :is-active="isSelectedAll"
        @click="handleSelectAll()" />
    </div>
  </div>
</template>
