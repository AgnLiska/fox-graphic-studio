<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

const pageName = 'App';

@Component({ name: pageName })
export default class App extends Vue {}
</script>
