<script setup lang="ts">
  import { ref } from 'vue'
  import DemoHeader from './components/DemoHeader.vue'
  import DemoFooter from './components/DemoFooter.vue'
  import data from './features/columns'

  const isHeaderVisible = ref(true)
  const isHeaderFixed = ref(true)
  const canSelect = ref(true)
  const canSort = ref(false)
  const isFirstColumnFixed = ref(false)
  const isLastColumnFixed = ref(false)
  const isSettingsEnabled = ref(false)
</script>

<template>
  <DemoHeader />
  <!-- Hora Grid Settings -->
  <div class="demo__settings">
    <!-- is header visible -->
    <div class="settings__property">
      <input
        id="isHeaderVisible"
        v-model="isHeaderVisible"
        type="checkbox" />
      <label for="isHeaderVisible">Header visible</label>
    </div>
    <!-- is header fixed -->
    <div class="settings__property">
      <input
        id="isHeaderFixed"
        v-model="isHeaderFixed"
        type="checkbox"
        :disabled="!isHeaderVisible" />
      <label for="isHeaderFixed">Fix header</label>
    </div>
    <!-- can hover row -->
    <div class="settings__property">
      <input
        id="canHover"
        v-model="canSelect" 
        type="checkbox" />
      <label for="canHover">Selectable</label>
    </div>
    <!-- can sort -->
    <div class="settings__property">
      <input
        id="canSort"
        v-model="canSort"
        type="checkbox" />
      <label for="canSort">Sortable</label>
    </div>
    <!-- is first column fixed -->
    <div class="settings__property">
      <input
        id="isFirstColumnFixed"
        v-model="isFirstColumnFixed"
        type="checkbox" />
      <label for="isFirstColumnFixed">Fix first column</label>
    </div>
    <!-- is last column fixed -->
    <div class="settings__property">
      <input
        id="isLastColumnFixed"
        v-model="isLastColumnFixed"
        type="checkbox" />
      <label for="isLastColumnFixed">Fix last column</label>
    </div>
    <!-- enable settings -->
    <div class="settings__property">
      <input
        id="isSettingsEnabled"
        v-model="isSettingsEnabled"
        type="checkbox" />
      <label for="isSettingsEnabled">Enable settings</label>
    </div>
  </div>
  <!-- Hora Grid -->
  <div class="demo__grid">
    <hora-grid
      :columns="data.columns"
      :data="data.data"
      :is-header-static="isHeaderFixed"
      :is-first-column-static="isFirstColumnFixed"
      :is-last-column-static="isLastColumnFixed"
      :is-header-visible="isHeaderVisible"
      :is-selectable="canSelect"
      :is-sortable="canSort"
      :is-settings-enabled="isSettingsEnabled">
      <template #cell-k1="{ record, column }">
        {{ column }} -- {{ record }}
      </template>
    </hora-grid>
  </div>
  <DemoFooter />
</template>

<style>
.demo__grid {
  margin: 5vh;
}

.demo__settings {
  
}

.settings__property {
  padding: 0.3rem;
  font-size: 26px;
}

.settings__property label {
  min-width: 200px;
  padding-left: 1rem;
  cursor: pointer;
}

.settings__property input[type="checkbox"] {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
