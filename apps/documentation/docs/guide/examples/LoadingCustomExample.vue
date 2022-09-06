<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/hora-grid'
  import { HoraButton } from '@studioalex/hora-elements'
  import '@studioalex/hora-grid/style.css'

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

  const loading = ref(false)
</script>

<template>
  <div class="example">
    <div>
      <hora-button
        type="primary"
        @click="loading = !loading">
        {{loading ? 'Hide' : 'Show'}} loading state
      </hora-button>
    </div>
    <hora-grid
      :fields="fieldList"
      :data="dataExample"
      :is-loading="loading">
      <template #loading>
        loading data . . . .
      </template>
    </hora-grid>
  </div>
</template>

<style>
  .example {
    min-height: 400px;
  }
</style>
