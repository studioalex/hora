<script lang="ts" setup>
  import { watch, computed } from 'vue'
  import { emitter } from '../features/emitter'
  import { useGrid } from '../features/useGrid'
  import { getHeaderClasses } from '../features/classes'
  import { properties } from '../features/initGrid'
  import {
    clearSelection,
    selectedCount,
    selectAll
  } from '../features/selection'
  import GridFieldHeaderActions from './GridFieldHeaderActions.vue'
  import HoraStatusIndicator from './StatusIndicator.vue'

  const {
    fieldList,
    fieldCount,
    getSortIconClass,
    isSelectionFieldVisible,
    sortField
  } = useGrid()

  const {
    isHeaderStatic,
    isFirstFieldStatic,
    isLastFieldStatic,
    isSortable,
    isMultipleSelection,
    isSelectable,
    recordCount
  } = properties

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
    emitter.emit('onSort', sortField.value[0].split('::'))
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
    v-if="properties.isHeaderVisible.value"
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
        :is-visible="properties.isSortable.value === true && field.sortable !== false"
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
</template>
