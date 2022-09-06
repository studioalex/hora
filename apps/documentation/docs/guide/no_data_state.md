# No Data State

Hora Grid provide a view to show when no data was provided.
To customize this message use the `nodata` slot as show in example below.

## Example of default message

<NoDataExample />

## Example of message slot usage

```vue
<hora-grid
  :fields="fieldList"
  :data="dataExample">
  <template #nodata>
    Sorry we could not find any data.
  </template>
</hora-grid>
```

<NoDataCustomExample />

<script setup>
  import NoDataExample from './examples/NoDataExample.vue'
  import NoDataCustomExample from './examples/NoDataCustomExample.vue'
</script>
