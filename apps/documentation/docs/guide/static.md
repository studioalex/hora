# Static header and columns

Hora Grid offers three properties to add static (fixed) columns `isFirstFieldStatic` and `isLastFieldStatic`, and header the row `isHeaderStatic`. All these properties can be mixed.

## Static header

Use the `isHeaderStatic` property to enable a vertically scrolling table with headers that remain static (fixed) as the table body scrolls. Setting the property to true (or no explicit value) will enable the static header. This property is ignored when `isHeaderVisible` is disabled, set to false.

<StaticHeaderExample />

```vue
<template>
  <hora-grid
    class="static-header-example"
    :fields="fieldList"
    :data="dataExample"
    :is-header-static="true"></hora-grid>
</template>

<style>
.static-header-example {
  max-height: 300px;
}
</style>
```

## Static columns

In the actual version of **Hora Grid** only the first and last column can be made static (fixed). Here for set the `isFirstFieldStatic` property to true (or no explicit value) to fix the first column. The same works for the last column with the `isLastFieldStatic` property.

The static column property is particularly useful with the Row select support property.

<StaticColumnsExample />

Scroll horizontally inside the grid to test the static (fixed) columns.

```vue
<template>
  <hora-grid
    :fields="fieldList"
    :data="dataExample"
    :is-header-static="true"></hora-grid>
</template>
```

## Using Static Header

Some times it can happen that the property `isHeaderStatic` seems not to work. This happened because of a problem to calculate the height of the parent element. This happen for example when setting the **Hora Grid Component** to CSS property `min-height` or `max-height`, without setting the `height` property.

```css
.my-grid {
  // BAD
  max-height: 300px;

  // GOOD
  height: 300px;

  // BAD
  height: 30%;

  // GOOD
  height: 30vh;

  // BAD
  min-height: 300px;
  max-height: 600px;

  // BETTER
  min-height: 300px;
  max-height: 600px;
  height: 100vh;
}
```

### Using Static Header with CSS Grid

Setting the **Hora Grid Component** as CSS Grid element cause the same problem because of the `align-items` setting. All settings except `align-items: start` will cause the same problem. Here for place the **Hora Grid Component** inside a CSS Grid element and do not set the CSS Grid settings to **Hora Grid Component** directly.

That problem isn’t actually something buggy or wrong. In fact, that’s the effect of a default CSS behavior. Why and how? Learn more about this [here](https://ishadeed.com/article/position-sticky-css-grid/)

<script setup>
  import StaticHeaderExample from './StaticHeaderExample.vue'
  import StaticColumnsExample from './StaticColumnsExample.vue'
</script>
