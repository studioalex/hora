<script lang="ts" setup>
  import { ref, PropType, computed } from 'vue'
  import { VueDraggableNext as draggable } from 'vue-draggable-next'
  import { HoraField } from '../../types'
  import HoraStatusIndicator from '../StatusIndicator.vue'
  import MoveIcon from '../icons/MoveIcon.vue'

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    modelValue: {
      type: Array as PropType<Array<HoraField>>,
      default: () => []
    }
  })

  const fieldsDefinitions = ref(props.modelValue)

  /**
   * Toggle the visibility value inside the fieldsDefinitions list and
   * re-set the list to it`s new value. 
   * Also emit the changes to modelValue.
   * @param fieldKey {string} Field key to toggle visibility
   */
  function toggleFieldVisibility (fieldKey: string): void {
    fieldsDefinitions.value = fieldsDefinitions.value.map(field => {
      if (field.key === fieldKey) {
        field.visible = !field.visible
      }
      return field
    })
    emit('update:modelValue', fieldsDefinitions.value)
  }

  /**
   * Transform visibility value to boolean if it is not set. The default value is then used.
   * @param visibility {boolean|undefined} Get the Field visibility value.
   * @param defaultValue The default value to return if visibility value is undefined. Default is ‘true‘.
   */
  function isFieldVisible (visibility: boolean|undefined, defaultValue = true): boolean {
    if (typeof visibility !== 'boolean') {
      return defaultValue
    }
    return visibility
  }

  /**
   * Draggable options
   */
  const dragOptions = computed(() => ({
    animation: 0,
    group: 'key',
    disabled: false,
    ghostClass: 'hora-grid-field-settings__ghost-field',
  }))
</script>

<template>
  <draggable
    v-model="fieldsDefinitions"
    v-bind="dragOptions"
    class="hora-grid-field-settings"
    @update="emit('update:modelValue', fieldsDefinitions)">
    <div
      v-for="fieldItem in fieldsDefinitions"
      :key="fieldItem.key"
      class="hora-grid-field-settings__field"
      :class="{ 'hora-grid-field-settings__field--disabled': !isFieldVisible(fieldItem.visible) }"
      :data-field-key="fieldItem.key">
      <div class="hora-grid-field-settings__field-move">
        <MoveIcon />
      </div>
      <div class="hora-grid-field-settings__field-title">
        {{ fieldItem.title }}
      </div>
      <div
        class="hora-grid-field-settings__field-actions">
        <HoraStatusIndicator
          :is-active="isFieldVisible(fieldItem.visible)"
          @click="toggleFieldVisibility(fieldItem.key)" />
      </div>
    </div>
  </draggable>
</template>
