<script lang="ts" setup>
  import { toRefs, PropType, computed } from 'vue'
  import HoraStatusIndicator from './StatusIndicator.vue'
  import { useGrid } from '../features/useGrid'
  import { GridOptions } from '../features/initGrid'
  import { getFieldClasses } from '../features/classes'
  import { emitter } from '../features/emitter'

  const props = defineProps({
    data: {
      type: Array as PropType<Array<any>>,
      default: () => []
    },
    options: {
      type: Object as PropType<GridOptions>,
      required: true
    }
  })

  const { data, options } = toRefs(props)
  const {
    isFirstFieldStatic,
    isLastFieldStatic,
    isMultipleSelectable
  } = options.value.settings
  const {
    fieldList,
    fieldCount,
    isSelectionFieldVisible,
    isSelected,
    setSelection,
    toggleDetailVisibility,
    isDetailVisible
  } = useGrid(options.value)

  /**
   * Handle selection click on record.
   * Add selected record to list and propagate all selected records.  
   * @param index 
   */
  function handleSelection (index: number) {
    setSelection(index, isMultipleSelectable.value)
    emitter.emit('onSelection', data.value.filter((__record, index) => options.value.settings.recordSelected.value.includes(index)))
  }

  /**
   * Toggle details visibility of specified record, by it's index value.
   * We need to wrap the origin function to prevent recursive updates
   * in the component.
   * @param recordIndex {number} Index value of the record in grid.
   */
  function toggleDetails (recordIndex: number) {
    const toggle = () => {
      toggleDetailVisibility(recordIndex)
    }
    return toggle
  }

  /**
   * Set Subgrid styles.
   */
  const rowDetailStyle = computed(() => {
    return {
      gridColumn: `1 / ${fieldCount.value + 1}`
    }
  })
</script>

<template>
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
        :field="field"
        :toggle-details="toggleDetails(rowIndex)"
        :is-detail-visible="isDetailVisible(rowIndex)">
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
      v-if="isDetailVisible(rowIndex)"
      class="hora-grid__row-details"
      :style="rowDetailStyle">
      <slot
        name="details"
        :record="record"
        :index="rowIndex"
        :fields="fieldList"
        :toggle-details="toggleDetails(rowIndex)"
        :is-record-selected="isSelected(rowIndex)">
        {{ record }}
      </slot>
    </div> 
  </div>
</template>
