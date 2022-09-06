<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/hora-grid'
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
    { "key": "city" },
    { "key": "action" }
  ])
</script>

<template>
  <hora-grid
    :fields="fieldList"
    :data="dataExample">
    <template #cell-action="{ toggleDetails, isDetailVisible }">
      <button @click="toggleDetails()">
        {{ isDetailVisible? 'Hide': 'Show' }} details
      </button>
    </template>
    <template #details="{ record, fields, toggleDetails }">
      <ul>
        <li v-for="field in fields" :key="field.key">
          <label>{{field.title}}:</label> <strong>{{ record[field.key] }}</strong>
        </li>
      </ul>
      <div>
        <button @click="toggleDetails()">
          close
        </button>
      </div>
    </template>
  </hora-grid>
</template>

<style>
button {
  border: 1px solid grey;
  border-radius: 4px;
  padding: 3px 8px;
  white-space: nowrap;
}
label {
  opacity: 0.7;
}
li {
  list-style: none;
}
</style>
