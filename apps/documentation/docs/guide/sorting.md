# Sorting

Clicking on a sortable column header will sort the column in ascending direction (smallest first), while clicking on it again will switch the direction of sorting to descending (largest first). Clicking on a non-sortable column will clear the sorting (the prop no-sort-reset can be used to disable this feature).

Sorting is not enabled by default. Use the `isSortable` property to enable sorting. Setting the property to true (or no explicit value) will enable the sorting to appear in the header. This will appear only if the `isHeaderVisible` property is not set to false.

**Hora Grid** do not provide any sorting mechanism for you. It use the `onSort` event to let you handle the sorting on your data. This gives the possibility to determine the optimal sorting function yourself, or to let the database or the backend do it itself. This is considerably more effective with large amounts of data, since they do not all have to be loaded into the frontend.

## Sort Event

The `onSort` event returns an array where the first element is the selected field and the second element is the sort direction. The sort direction can be only the string value **ASC** or **DESC** in capital letters.

```js
// ['field key', 'Sort direction']
['first_name', 'ASC']
```

## Example

<SortExample />

```vue
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
```

<script setup>
  import SortExample from './examples/SortExample.vue'
</script>
