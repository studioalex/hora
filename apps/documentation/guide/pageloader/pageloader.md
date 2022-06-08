# Box

The box component is a simple customizable block.

| Prop       | Description               | Accepted Values                                           | Default     |
| :--------- | :------------------------ | :-------------------------------------------------------- | :---------- |
| `size`     | The button's text         | `small`, `medium`, `large`, `extralarge`                  | `medium`    |
| `surface`  | Surface style             | (`1th` = `primary`), (`2th` = `secondary`), `3th`, `4th`  | `3th`       |
| `shadow`   | Box shadow                | `true` or `false`                                         | `true`      |

```vue
<div style="margin-bottom: 1rem">
  <Box surface="1th">Surface 1</Box>
</div>
<div style="margin-bottom: 1rem">
  <Box surface="2th" size="small">Surface 2 small size</Box>
</div>
<div style="margin-bottom: 1rem">
  <Box surface="3th">Surface 3</Box>
</div>
<div style="margin-bottom: 1rem">
  <Box surface="4th">Surface 4</Box>
</div>
<div style="margin-bottom: 1rem">
  <Box surface="4th" :shadow="false">Surface 4 no border</Box>
</div>
```
