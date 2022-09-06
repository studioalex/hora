# Custom data rendering

Custom rendering for each data field in a row is possible using either [scoped slots](https://vuejs.org/guide/components/slots.html) or a formatter callback function, or a combination of both.

## Scoped field slots

Scoped field slots give you greater control over how the record data appears. You can use scoped slots to provided custom rendering for a particular field. If you want to add an extra field which does not exist in the records, just add it to the fields array, and then reference the field(s) in the scoped slot(s). Scoped field slots use the following naming syntax: `cell-<fieldkey>`.

### Example: Custom data rendering with scoped slots

```vue
<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/horagrid'
  import '@studioalex/horagrid/style.css'

  const dataExample = ref([
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London" },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin" },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh" },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff"}
  ])

  const fieldList = ref([
    { "key": "first_name" },
    { "key": "last_name" },
    { "key": "age" },
    { "key": "gender" },
    { "key": "city" }
  ])
</script>

<template>
  <hora-grid
    :fields="fieldList"
    :data="dataExample">
    <template #cell-age="{ record, field }">
      {{ record[field.key] }} years old
    </template>
  </hora-grid>
</template>
```

The slot's scope variable (data in the above sample) will have the following properties:

<CustomDataExample />

The slot's scope variable `data` contain the current record object, white the scope variable `fields`contain the current filed properties described in [Field definition reference](./definition_reference#field-properties).

## Header custom rendering via scoped slots

It is also possible to provide custom rendering for the Grid Header Fields. Note by default the Grid Header Fields are enabled, and can be disabled by settings the Grid property `isHeaderVisible` to `false`.

Scoped slots for the header cells uses a special naming convention of `header-<fieldkey>` respectively.

### Example: Custom header rendering with scoped slots

```vue
<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/horagrid'
  import '@studioalex/horagrid/style.css'

  const dataExample = ref([
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London" },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin" },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh" },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff"}
  ])

  const fieldList = ref([
    { "key": "first_name" },
    { "key": "last_name" },
    { "key": "age" },
    { "key": "gender" },
    { "key": "city" }
  ])
</script>

<template>
  <hora-grid
    :fields="fieldList"
    :data="dataExample">
    <template #header-age="{ field }">
      User age in field {{ field.key }}
    </template>
  </hora-grid>
</template>
```

<CustomHeaderExample />

<script setup>
 import CustomDataExample from './examples/CustomDataExample.vue'
 import CustomHeaderExample from './examples/CustomHeaderExample.vue'
</script>
