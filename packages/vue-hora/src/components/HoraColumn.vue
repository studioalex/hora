<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default(rawProps) {
        return {}
    }
  },
  column: {
    type: String,
    default: 'undefined'
  }
})

const { data, column } = toRefs(props)
</script>

<template :data="data" :column="column">
  <div>
    {{ data[column] }}
  </div>
</template>