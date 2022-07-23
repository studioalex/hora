<script lang="ts" setup>
  import { ref, watch, onMounted, getCurrentInstance } from 'vue'
  
  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    id: {
      type: String,
      required: false
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  })

  const checkbox = ref(null)
  const componentId = ref(props.id)
  const isChecked = ref(props.modelValue)

  const onChange = (event: any) => {
    emit('update:modelValue', event.currentTarget.checked)
  }
  
  watch(() => props.modelValue, (newValue) => {
    isChecked.value = newValue
  })

  onMounted(() => {
    const getUid = getCurrentInstance()
    componentId.value = componentId.value || getUid?.uid.toString()
  })
</script>

<template>
  <div class="hrd-checkbox">
    <input
      :id="componentId"
      ref="checkbox"
      v-model="isChecked"
      type="checkbox"
      class="hrd-checkbox__input"
      @input="onChange" />
    <label class="hrd-checkbox__label" :for="componentId"></label>
  </div>
</template>
