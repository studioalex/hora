<script lang="ts" setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      default: null,
      required: false
    },
    logo: {
      type: String,
      default: null,
      required: false
    }
  })
  const { title } = toRefs(props)
</script>

<template>
   <div class="hrd-header hrd-header--side">
      <div class="hrd-header-title">
         <a class="hrd-header-logo-link" href="/">
            <img v-if="logo" class="hrd-header-logo" :src="logo" />
           {{ title }}
         </a>
      </div>
   </div>
</template>