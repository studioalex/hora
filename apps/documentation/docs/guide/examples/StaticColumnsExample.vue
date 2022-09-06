<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/hora-grid'
  import '@studioalex/hora-grid/style.css'

  const dataExample = ref([
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London", "description": "It_is_a_long_established_fact_that..." },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin", "description": "It_is_a_long_established_fact_that..." },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh", "description": "It_is_a_long_established_fact_that..." },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff", "description": "It_is_a_long_established_fact_that..." },
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London", "description": "It_is_a_long_established_fact_that..." },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin", "description": "It_is_a_long_established_fact_that..." },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh", "description": "It_is_a_long_established_fact_that..." },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff", "description": "It_is_a_long_established_fact_that..." }
  ])

  const fieldList = ref([
    { "key": "first_name" },
    { "key": "last_name" },
    { "key": "age" },
    { "key": "gender"},
    { "key": "city" },
    { "key": "description" }
  ])
</script>

<template>
  <hora-grid
    :fields="fieldList"
    :data="dataExample"
    :is-first-field-static="true"
    :is-last-field-static="true"></hora-grid>
</template>
