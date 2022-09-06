# Selection Support

You can make rows selectable, by using the property `isSelectable` and `isMultipleSelectable`.
While enabling `isSelectable` allow selecting one only record at time. Enabling `isMultipleSelectable` property
expand this ability to select multiple data record.

The `isSelectable` property also enable the **hover effect** on records.

:::tip
The data records are selected exclusively by the indicator. While other components
support selection by clicking anywhere within the data record, we have decided against this behavior.
We want to avoid problems with other click events within the data record.
:::

## How to select

When `isSelectable` property is enabled, a field become visible at the right side of the grid within a selection `indicator`.
By clicking this `indicator` the record can be selected or unselected.

## Use Select All

In **multiple selection** mode (`isMultipleSelectable`) a `indicator` is visible in the Grid header. By using this indicator all records can be selected or unselected.

## Available properties on `<hora-grid>`

| Property             | Type              | Description                                             |
| -------------------- | ----------------- | ------------------------------------------------------- |
| isSelectable         | Boolean           | The entire row record data object                       |
| isMultipleSelectable | Boolean           | The entire row record data object                       |

## Available events on `<hora-grid>`

| Event             | Arguments         | Description                                             |
| ----------------- | ----------------- | ------------------------------------------------------- |
| onSelection       |                   | Emitted when the record selection change, return the selected records as `Array` of `Objects` |

## Example

<SelectionExample />

<script setup>
  import SelectionExample from './examples/SelectionExample.vue'
</script>
