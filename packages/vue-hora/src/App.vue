<script setup lang="ts">
import { ref } from 'vue'
import data from './assets/columns.js'
import Hora from './components/Hora.vue'

const isHeaderVisible = ref(true)
const isHeaderFixed = ref(true)
const canHover = ref(true)
const isFirstColumnFixed = ref(false)

</script>

<template>
  <img alt="Vue logo" src="./assets/hora_logo.png" width="200"/>
  <!-- Hora Grid Settings -->
  <div class="settings">
    <!-- is header visible -->
    <div class="settings__property">
      <input
        id="isHeaderVisible"
        type="checkbox"
        v-model="isHeaderVisible" />
      <label for="isHeaderVisible">Header visible</label>
    </div>
    <!-- is header fixed -->
    <div class="settings__property">
      <input
        id="isHeaderFixed"
        type="checkbox"
        v-model="isHeaderFixed"
        :disabled="!isHeaderVisible"/>
      <label for="isHeaderFixed">Fix header</label>
    </div>
    <!-- can hover row -->
    <div class="settings__property">
      <input
        id="canHover"
        type="checkbox"
        v-model="canHover" />
      <label for="canHover">Can hover</label>
    </div>
    <!-- is first column fixed -->
    <div class="settings__property">
      <input
        id="isFirstColumnFixed"
        type="checkbox"
        v-model="isFirstColumnFixed"/>
      <label for="isFirstColumnFixed">Fix first column</label>
    </div>
  </div>
  <!-- Hora Grid -->
  <div class="hora">
    <hora
      :columns="data.columns"
      :data="data.data"
      :fix-header="isHeaderFixed"
      :fix-first-column="isFirstColumnFixed"
      :is-header-visible="isHeaderVisible"
      :can-hover="canHover">
      <template #k1="{ record }">{{record.k1}}</template>
    </hora>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.settings {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 5vh;
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
