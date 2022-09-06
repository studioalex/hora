# Field visibility and field display order

The user can modify the column display order and the field visibility by him self, by enabling the `isSettingsEnabled` property.
When enabled, a button at the headline of the Grid appears which switch between the settings and the Grid view.

In the Settings view it is possible to set the view order by moving the field items.
The field visibility can be changed by the **indicator** on the right side of the field item.

## Available properties

| Property             | Type              | Description                                             |
| -------------------- | ----------------- | ------------------------------------------------------- |
| isSettingsEnabled    | Boolean           | Enable **Settings View** to change field visibility and display order. |

## Example

<SettingsExample />

<script setup>
  import SettingsExample from './examples/SettingsExample.vue'
</script>
