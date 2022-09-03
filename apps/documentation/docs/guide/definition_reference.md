# Component references

- [Component references](#component-references)
  - [Field Properties](#field-properties)
  - [Table Properties](#table-properties)
  - [Table Events](#table-events)
  - [Table Slots](#table-slots)

## Field Properties

The following field properties are recognized:

| Property          | Type              | Description |
| ----------------- | ----------------- | ----------- |
| key               | String            | The key for selecting data from the record in the items array. This value is the only required one. |
| label             | String            | Appears in the columns table header. |
| visible           | Boolean           | Determine the field visibility. |
| order             | Number            | Set the display order in grid. |
| sortable          | Boolean           | Enable sorting on this column. Refer to the [Sorting Section](sorting.md) for more details. |
| sortDirection     | String            | Set the initial sort direction on this column when it becomes sorted. Refer to the [Sorting Section](sorting.md) for more details. |

## Table Properties

| Property              | Type              | Description |
| --------------------- | ----------------- | ----------- |
| fields                | Array of fields   |             |
| data                  | Array             |             |
| isLoading             | Boolean           | Show the loading item which indicate data loading status. |
| isSortable            | Boolean           | When header visibility is enabled show the sort icons and enable the functionality. |
| isHeaderVisible       | Boolean           | Show or hide the whole header with all header functions. |
| isHeaderStatic        | Boolean           | Let the header position static  on the top while scrolling. |
| isFirstFieldStatic    | Boolean           | Let the first field static on the left while scrolling. |
| isLastFieldStatic     | Boolean           | Let the last field static on the left while scrolling. |
| isSelectable          | Boolean           | Enable field single selection by showing action field at the end on table view with a checkbox. |
| isMultipleSelectable  | Boolean           | Enable multiple field selection when selections are enabled |
| isSettingsEnabled     | Boolean           | Show settings icon in an additional field at the end on the table view. |

## Table Events

| Event              | Arguments         | Description |
| ------------------ | ----------------- | ----------- |
| onSelection        | Array of the row items that are selected | Emitted when a row or rows have been selected or unselected. |
| onSort             | Array with the sort field as first value and the sort direction as the second value | Emitted on click at the sort icons. |

## Table Slots

| Name               | Scoped            | Description |
| ------------------ | ----------------- | ----------- |
| row-details        | x | x |
| header-`{key}`     | `{ field }` | Scoped slot for custom header label rendering. `{key}` is the field's key name. |
| cell-`{key}`       | `{ record, field }` | Scoped slot for custom data rendering of field data. `{key}` is the field's key name. |
