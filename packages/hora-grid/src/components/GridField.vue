<script lang="ts" setup>
  import { toRefs, PropType, computed } from 'vue'
  import HoraStatusIndicator from './StatusIndicator.vue'
  import { selected, isSelected, setSelection } from '../features/selection'
  import { useGrid } from '../features/useGrid'
  import { properties } from '../features/initGrid'
  import { getFieldClasses } from '../features/classes'
  import { emitter } from '../features/emitter'

  const props = defineProps({
    data: {
      type: Array as PropType<Array<any>>,
      default: () => []
    }
  })

  const { data } = toRefs(props)
  const {
    isFirstFieldStatic,
    isLastFieldStatic,
    isMultipleSelection
  } = properties
  const {
    fieldList,
    fieldCount,
    isSelectionFieldVisible
  } = useGrid()

  /**
   * Handle selection click on record.
   * Add selected record to list and propagate all selected records.  
   * @param index 
   */
  function handleSelection (index: number) {
    setSelection(index, isMultipleSelection.value)
    emitter.emit('onSelection', data.value.filter((__record, index) => selected.value.includes(index)))
  }

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
</template>
