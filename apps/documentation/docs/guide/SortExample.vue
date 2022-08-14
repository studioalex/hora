<script setup>
  import { ref } from 'vue'
  import _ from 'lodash'
  import { HoraGrid } from '@studioalex/horagrid'
  import '@studioalex/horagrid/style.css'

  const dataExample = ref([
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London" },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin" },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh" },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff" }
  ])

  const fieldList = ref([
    { "key": "first_name" },
    { "key": "last_name" },
    { "key": "age" },
    { "key": "gender"},
    { "key": "city" }
  ])

  const sortField = ref(null)
  const sortDirection = ref(null)

  function handleSort (data) {
    sortField.value = data[0]
    sortDirection.value = data[1]
    // handle sorting by sort function or db query
    dataExample.value = _.orderBy(dataExample.value, [sortField.value], [sortDirection.value.toLowerCase()])
  }
</script>

<template>
  <div class="custom-sort">
    Sorting: <br>
    <span v-if="!sortField">Please click sort icon at field to set sorting for the field.</span>
    <span v-if="sortField">Field: <strong>{{sortField}}</strong> - Direction: <strong>{{sortDirection}}</strong></span>
  </div>
  <hora-grid
    :fields="fieldList"
    :data="dataExample"
    :is-sortable="true"
    @on-sort="handleSort"></hora-grid>
</template>

<style>
.custom-sort {
  padding: 2rem 0;
  text-align: center;
}
</style>