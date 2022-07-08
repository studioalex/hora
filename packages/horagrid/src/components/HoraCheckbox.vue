<script lang="ts" setup>
  import { toRefs } from 'vue'

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: null,
      required: false
    }
  })

  const { modelValue } = toRefs(props)

  const updateValue = () => {
    emit('update:modelValue', modelValue.value);
  }
</script>
<template>
  <label class="hora__checkbox">
    <slot></slot>
    <input type="checkbox" :value="modelValue" @input="updateValue">
    <span class="checkmark">
    </span>
  </label>
</template>

<style lang="postcss" scoped>
/* The container */
.hora__checkbox {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  
  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    
    /* When the checkbox is checked, add a blue background */
    &:checked ~ .checkmark {
      background-color: #2196F3;
      /* Show the checkmark when checked */
      &:after{
        display: block;
      }
    }
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    
    /* Style the checkmark/indicator */
    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  
  /* On mouse-over, add a grey background color */
  &:hover .checkmark {
    background-color: #ccc;
  }
}
</style>