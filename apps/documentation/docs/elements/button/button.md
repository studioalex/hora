# Button

Use hora-button component for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Properties

| Prop       | Description                             | Accepted Values                                           | Default     |
| :--------- | :-------------------------------------- | :-------------------------------------------------------- | :---------- |
| `type`     | The display type of the butoon.         | `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`, `light`, `link`.  | `primary`   |
|            |                                         | Outline values: `primary-outline`, `secondary-outline`,  `success-outline`, `danger-outline`, `warning-outline`, `info-outline`, `dark-outline` |             |
| `pill`     | Enable full rounded borders             | String: `false`, `true`; Boolean: false, true             | `false`     |

## Examples

Buttons includes several predefined styles, each serving its own semantic purpose, with a few extras thrown in for more control.

<ButtonExample />

```vue
<hora-button type="primary">primary</hora-button>
<hora-button type="secondary">secondary</hora-button>
<hora-button type="success">success</hora-button>
<hora-button type="danger">danger</hora-button>
<hora-button type="warning">warning</hora-button>
<hora-button type="info">info</hora-button>
<hora-button type="dark">dark</hora-button>
<hora-button type="light">light</hora-button>
<hora-button type="link">link</hora-button>
```

### Button outline

In need of a button, but not the hefty background colors they bring? Add to the type `-outline` to display them outline without background.

<ButtonOutlineExample />

```vue
<hora-button type="primary-outline">primary</hora-button>
<hora-button type="secondary-outline">secondary</hora-button>
<hora-button type="success-outline">success</hora-button>
<hora-button type="danger-outline">danger</hora-button>
<hora-button type="warning-outline">warning</hora-button>
<hora-button type="info-outline">info</hora-button>
<hora-button type="dark-outline">dark</hora-button>

<hora-button type="primary-outline" pill>primary</hora-button>
<hora-button type="secondary-outline" pill>secondary</hora-button>
<hora-button type="success-outline" pill>success</hora-button>
<hora-button type="danger-outline" pill>danger</hora-button>
<hora-button type="warning-outline" pill>warning</hora-button>
<hora-button type="info-outline" pill>info</hora-button>
<hora-button type="dark-outline" pill>dark</hora-button>
```

### Button pill

<ButtonPillExample />

```vue
<hora-button type="primary" pill>primary</hora-button>
<hora-button type="secondary" pill>secondary</hora-button>
<hora-button type="success" pill>success</hora-button>
<hora-button type="danger" pill>danger</hora-button>
<hora-button type="warning" pill>warning</hora-button>
<hora-button type="info" pill>info</hora-button>
<hora-button type="dark" pill>dark</hora-button>
<hora-button type="light" pill>light</hora-button>
<hora-button type="link" pill>link</hora-button>
```

<script setup>
import ButtonExample from './ButtonExample.vue'
import ButtonOutlineExample from './ButtonOutlineExample.vue'
import ButtonPillExample from './ButtonPillExample.vue'
</script>
