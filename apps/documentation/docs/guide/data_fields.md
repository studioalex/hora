# Data and fields

In order to be able to display data, 2 properties are required, `data` and `fields`. Once the data that should be displayed, and the fields definitions of this data.

The data is always expected in as an array of JSON values, where the field definitions are passed as a JSON object.

A valid example of Data to be displayed:

```json
[
  {
    "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London"
  },
  {
    "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin"
  },
  {
    "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh"
  },
  {
    "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff"
  }
]
```

**Hora Grid** requires a column definition, to identify field property names to be displayed. Unlike other components, we don't want to analyze the data, or make an assumption about the columns based on the first record, to the field definition is mandatory.

While a minimal definition of the fields on the data might look like this:

```json
[
  {
    "key": "first_name",
  }, {
    "key": "first_name",
  }, {
    "key": "first_name",
  }, {
    "key": "first_name",
  }, {
    "key": "first_name",
  }
]
```

This settings then result to the following table view:

<DataExample />

```vue
<template>
  <hora-grid
    :fields="fieldList"
    :data="dataExample"></hora-grid>
</template>
```

<script setup>
 import DataExample from './DataExample.vue'
</script>
