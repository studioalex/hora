# Styling options

Hora Grid provides several CSS variables to modify the style of the grid in a simple way.
It also support the the browser `light` and `dark` theme.

## Define your own Theme

To define a own theme you only need to define a CSS Class `.my-theme` and define the CSS variables described below.
Variables not set will use the default value. When your CSS Class is defined add it to the Grid Element.
To enable the `dark` theme define add a second class definition to your CSS `.dark .my-theme`.

```css
.my-theme {
  --HORA--color--action: black;
  --HORA--grid--gap: 5px;
  ...
}

.dark .my-theme {
  --HORA--color--action: white;
  --HORA--grid--gap: 5px;
  ...
}
```

```html
<hora-grid
  class="my-theme"
  :data="loadedData"
  :fields="myFields">
</hora-grid>
```

## Grid styling

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |  
| --HORA--color--action                        | Color definition used for define action states like the indicator for data record selection. |
| --HORA--grid--gap                            | The [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) size between the fields |
| --HORA--grid--font-family                    | Grid primary [font family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |
| --HORA--grid--rows-auto                      | Grid default cell width. Default is `minmax(20px, auto)` which define the min. width to `20px` and is free to expand. |

## Headline

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |  
| --HORA--headline--title-font                 | Headline [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) definition. |
| --HORA--headline--title-color                | Headline Font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). |

## Header styling

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--header--background                   | Header field [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color). |
| --HORA--header--font-color                   | Header field font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). |
| --HORA--header--font-weight                  | Header field [font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). |
| --HORA--header--padding                      | Header field [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding). |
| --HORA--header--border-size                  | This Variable is not directly used in the components. We use it as single point reference for the `top`, `bottom`, `left`, `right` border variables. |
| --HORA--header--border-radius                | Field [border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) is set for header data record. Not for single fields in this record. |
| --HORA--header--border                       | This Variable is not directly used in the components. We use it as single point reference for the `top`, `bottom`, `left`, `right` border variables. |
| --HORA--header--border-top                   | Header field [border top](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) style. |
| --HORA--header--border-bottom                | Header field [border bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) style. |
| --HORA--header--border-left                  | Header field [border left](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left) style. |
| --HORA--header--border-right                 | Header field [border right](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right) style. |
| --HORA--header--border-separator             | Border side between header fields. Has the same property as border top or border left. |

::: tip
The variable `--HORA--header--border-separator` define the border side between the fields. We mark this as a field separator.

The variables `--HORA--header--border-size` and `--HORA--header--border` is not used directly in the css styling.
We suggest to use them as reference variables in the `--HORA--header--border-{top,bottom,left,right}` variables,
like `--HORA--header--border: var(--HORA--header--border-size) solid grey;` and define then the border sides
`--HORA--header--border-top: var(--HORA--header--border);`
:::

### Header action styling

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--header-action-hover-background       | Update the field background color when data record is in hover state.         |

## Field styling

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--field--background                    | Field [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color). |
| --HORA--field--padding                       | field [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding). |
| --HORA--field--font-color                    | Field font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). |
| --HORA--field--font-weight                   | Field [font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). |
| --HORA--field--border-size                   | This Variable is not directly used in the components. We use it as single point reference for the `top`, `bottom`, `left`, `right` border variables. |
| --HORA--field--border-radius                 | Field [border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) is set for header data record in any state as `hovered` or `selected`. |
| --HORA--field--border                        | This Variable is not directly used in the components. We use it as single point reference for the `top`, `bottom`, `left`, `right` border variables. |
| --HORA--field--border-top                    | Field [border top](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) style. |
| --HORA--field--border-bottom                 | Field [border bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) style. |
| --HORA--field--border-left                   | Field [border left](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left) style. |
| --HORA--field--border-right                  | Field [border right](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right) style. |
| --HORA--field--border-separator              | Border side between header fields. Has the same property as border top or border left. |

### Field hover

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--field-hover--background-color        | Hovered field [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color). |
| --HORA--field-hover--border-separator        | Border side between header fields. Has the same property as border top or border left. |
| --HORA--field-hover--border                  | This Variable is not directly used in the components. We use it as single point reference for the `top`, `bottom`, `left`, `right` border variables. |
| --HORA--field-hover--border-top              | Hovered field [border top](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) style. |
| --HORA--field-hover--border-bottom           | Hovered field [border bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) style. |
| --HORA--field-hover--border-left             | Hovered field [border left](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left) style. |
| --HORA--field-hover--border-right            | Hovered field [border right](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right) style. |
| --HORA--field-hover--font-color              | Hovered Font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). |

### Field selected

Setting the field appearance when selected.

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--field-selected--background           | Field [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) |
| --HORA--field-selected--border-separator     | Field separator [border properties](https://developer.mozilla.org/en-US/docs/Web/CSS/border) |
| --HORA--field-selected--border               | This Variable is not directly used in the components. We use it as single point reference for the `top`, `bottom`, `left`, `right` border variables. |
| --HORA--field-selected--border-top           | Field [border top](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) properties |
| --HORA--field-selected--border-bottom        | Field [border bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) properties |
| --HORA--field-selected--border-left          | Field [border left](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left) properties |
| --HORA--field-selected--border-right         | Field [border right](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right) properties |
| --HORA--field-selected--font-color           | Font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) |

### Selection Field

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--field-selection-width                |  Define the width of the of the selection indicator field when visible.       |

## Grid settings

Grid settings view to field settings and other settings possibilities.

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--settings--background-color           | The [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of the settings view. |
| --HORA--settings--border-radius              | The [border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) of the settings view. |

### Grid field settings

Field settings are fields in the Settings View which are used to set field visibility and field display order.

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--field-settings--background           | Field [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color). |
| --HORA--field-settings--background-disabled  | Field [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) when disabled. |
| --HORA--field-settings--border-radius        | Field [border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius). |
| --HORA--field-settings--border-size          | This Variable is not directly used in the components. We use it as single point reference for the border definition. |
| --HORA--field-settings--border               | Field [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). |
| --HORA--field-settings--border-disabled      | Field [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border) when disabled. |
| --HORA--field-settings--font-color           | Field font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). |
| --HORA--field-settings--font-weight          | Field font [font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). |
| --HORA--field-settings--padding              | Field [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding). |
| --HORA--field-settings--margin               | Field [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin). |
| --HORA--field-settings--ghost-background     | Field [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) before drop. |

## Grid No-Data message

The No-Data view is automatically visible when no data is loaded.

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--nodata--background-color             | The [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of the No Data Found view. |
| --HORA--nodata--title-font-color             | Title font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). |
| --HORA--nodata--title-font-weight            | Title [font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). |
| --HORA--nodata--title-font-size              | Title [font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size). |
| --HORA--nodata--description-font-color       | Description Font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). |
|

## Grid loading view

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--loading--background-color            | The [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of the loading view. |
| --HORA--loading--border-radius               | The [border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) of the loading view. |

## Grid loading shimmer

The color of the default shimmer can be modified throw this variables.

| <div style="min-width:300px">Property</div>  | <div style="min-width:300px">Description</div>                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| --HORA--shimmer--background-color            |  The background color of the shimmer fields. |
| --HORA--shimmer--box-from-color              |  The start flashing color. |
| --HORA--shimmer--box-to-color                |  The end flashing color. |
