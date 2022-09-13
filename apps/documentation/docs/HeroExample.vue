<script setup>
  import { ref } from 'vue'
  import _ from 'lodash'
  import { HoraGrid } from '@studioalex/hora-grid'
  import '@studioalex/hora-grid/style.css'

  const dataList = ref([])
  const isLoading = ref(false)
  const dataExample = ref([
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London" },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin" },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh" },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff" }
  ])

  const fieldList = ref([
    { "key": "first_name", "title": "First name" },
    { "key": "last_name", "title": "Last name" },
    { "key": "age", "title": "Age" },
    { "key": "gender", "title": "Gender" },
    { "key": "city", "title": "City" }
  ])

  function loadData () {
    dataList.value = dataExample.value
    isLoading.value = false
  }
  isLoading.value = true
  setTimeout(loadData, 1500)

  /** SORT */
  const sortField = ref(null)
  const sortDirection = ref(null)

  function handleSort (data) {
    sortField.value = data[0]
    sortDirection.value = data[1]
    dataList.value = _.orderBy(dataList.value, [sortField.value], [sortDirection.value.toLowerCase()])
  }
</script>

<template>
  <div class="VPDemo">
    <div class="container">
      <hora-grid
        title="Persons"
        :fields="fieldList"
        :data="dataList"
        :isLoading="isLoading"
        :isSelectable="true"
        :isMultipleSelectable="true"
        :isSettingsEnabled="true"
        :is-sortable="true"
        @on-sort="handleSort"></hora-grid>
    </div>
  </div>
</template>

<style>
@media (min-width: 960px) {
  .VPDemo {
    padding: calc(var(--vp-nav-height) + 80px) 64px 64px;
  }
}

@media (min-width: 640px) {
  .VPDemo {
    padding: calc(var(--vp-nav-height) + 80px) 48px 64px;
  }
}

.VPDemo {
  margin-top: calc(var(--vp-nav-height) * -1);
  padding: calc(var(--vp-nav-height) + 48px) 24px 48px;
}

.VPDemo .container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
  text-align: center;
}
</style>
