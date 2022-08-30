<script setup>
  import { HoraButton } from '@studioalex/hora-elements'
  import '@studioalex/hora-elements/style.css'
</script>

<template>
  <div class="example-group">
    <hora-button type="primary" pill>primary</hora-button>
    <hora-button type="secondary" pill>secondary</hora-button>
    <hora-button type="success" pill>success</hora-button>
    <hora-button type="danger" pill>danger</hora-button>
    <hora-button type="warning" pill>warning</hora-button>
    <hora-button type="info" pill>info</hora-button>
    <hora-button type="dark" pill>dark</hora-button>
    <hora-button type="light" pill>light</hora-button>
    <hora-button type="link" pill>link</hora-button>
  </div>
</template>

<style scoped>
.example-group > * {
  margin: .5rem;
}
</style>
