<script setup>
  import { HoraButton } from '@studioalex/hora-elements'
  import '@studioalex/hora-elements/style.css'
</script>

<template>
  <div class="example-group">
    <hora-button type="primary">primary</hora-button>
    <hora-button type="secondary">secondary</hora-button>
    <hora-button type="success">success</hora-button>
    <hora-button type="danger">danger</hora-button>
    <hora-button type="warning">warning</hora-button>
    <hora-button type="info">info</hora-button>
    <hora-button type="dark">dark</hora-button>
    <hora-button type="light">light</hora-button>
    <hora-button type="link">link</hora-button>
  </div>
</template>

<style scoped>
.example-group > * {
  margin: .5rem;
}
</style>
