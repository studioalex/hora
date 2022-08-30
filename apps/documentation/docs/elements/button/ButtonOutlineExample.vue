<script setup>
  import { HoraButton } from '@studioalex/hora-elements'
  import '@studioalex/hora-elements/style.css'
</script>

<template>
  <div class="example-group">
    <hora-button type="primary-outline">primary</hora-button>
    <hora-button type="secondary-outline">secondary</hora-button>
    <hora-button type="success-outline">success</hora-button>
    <hora-button type="danger-outline">danger</hora-button>
    <hora-button type="warning-outline">warning</hora-button>
    <hora-button type="info-outline">info</hora-button>
    <hora-button type="dark-outline">dark</hora-button>
  </div>

  <div class="example-group">
    <hora-button type="primary-outline" pill>primary</hora-button>
    <hora-button type="secondary-outline" pill>secondary</hora-button>
    <hora-button type="success-outline" pill>success</hora-button>
    <hora-button type="danger-outline" pill>danger</hora-button>
    <hora-button type="warning-outline" pill>warning</hora-button>
    <hora-button type="info-outline" pill>info</hora-button>
    <hora-button type="dark-outline" pill>dark</hora-button>
  </div>
</template>

<style scoped>
.example-group > * {
  margin: .5rem;
}
</style>
