<script>
import BaseLayout from '@/components/BaseLayout.vue'
export default {
  name: 'App',
  components: {
    BaseLayout,
  }
}
</script>

<template>
  <base-layout>
    <router-view />
  </base-layout>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>