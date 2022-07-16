<script lang="ts" setup>
  import { ref, toRefs } from 'vue'
  import HrdCheckbox from './HrdCheckbox.vue'

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null,
      required: false
    }
  })
  const { title, description, id } = toRefs(props)
  const isChecked = ref(props.modelValue)

  const onChange = () => {
    emit('update:modelValue', isChecked.value)
  }
</script>

<template>
  <div class="hrd-switch">
    <div class="hrd-switch__title">
      <label class="hrd-switch__caption" :for="id">{{title}}</label>
      <div class="hrd-switch__switch">
        <HrdCheckbox :id="id" v-model="isChecked" @change="onChange"/>
      </div>
    </div>
    <p class="hrd-switch__description">
      <slot>{{description}}</slot>
    </p>
  </div>
</template>
