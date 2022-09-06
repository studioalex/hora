<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/hora-grid'
  import { HoraButton } from '@studioalex/hora-elements'
  import '@studioalex/hora-grid/style.css'

  const data = [
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London" },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin" },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh" },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff" }
  ]

  const dataExample = ref(data)

  const fieldList = ref([
    { "key": "first_name" },
    { "key": "last_name" },
    { "key": "age" },
    { "key": "gender"},
    { "key": "city" }
  ])

  const nodata = ref(false)

  function switchData () {
    nodata.value = !nodata.value
    if (nodata.value === true) {
      dataExample.value = []
    } else {
      dataExample.value = data
    }
  }
</script>

<template>
  <div class="example">
    <div>
      <hora-button
        type="primary"
        @click="switchData()">
        {{nodata ? 'Hide' : 'Show'}} no data state
      </hora-button>
    </div>
    <hora-grid
      :fields="fieldList"
      :data="dataExample"></hora-grid>
  </div>
</template>

<style>
  .example {
    min-height: 400px;
  }
</style>
