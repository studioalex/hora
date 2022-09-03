# Details Support

The detail rendering enables to display additional record information. Using the scoped slot `details`, in combination with the scoped function `toggleDetails` enables the using of details view below the row fields.

```vue
<template #details="{ record, toggleDetails }">
  <div>
    {{ record }}
  </div>
  <div>
    <button @click="toggleDetails()">
      close
    </button>
  </div>
</template>
```

::: info
Note: We don't extend or manipulate the record object at any point. The information about visible
**detail slot** is stored separately.
:::

## Available `details` scoped properties

| Property          | Type              | Description                                             |
| ----------------- | ----------------- | ------------------------------------------------------- |
| record            | Object            | The entire row record data object                       |
| index             | Number            | The current visible row number                          |
| fields            | Object            | The normalized fields definition array (in the array of objects format) |
| toggleDetails     | Function          | Function to toggle visibility of the row's details slot |
| isRecordSelected  | Boolean           | Will be `true` if the row has been selected.            |

## Example

<DetailSlotExample />

```vue
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
```

<script setup>
  import DetailSlotExample from './DetailSlotExample.vue'
</script>
