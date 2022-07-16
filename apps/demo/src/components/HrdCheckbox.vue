<script lang="ts" setup>
  import { ref, toRefs } from 'vue'
  
  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  })
  const { id } = toRefs(props)
  const isChecked = ref(props.modelValue)

  const onChange = () => {
    emit('update:modelValue', isChecked.value)
  }
</script>

<template>
  <div class="hrd-checkbox">
    <input
      :id="id" 
      type="checkbox"
      v-model="isChecked"
      @change="onChange"/>
    <label :for="id"></label>
  </div>
</template>
