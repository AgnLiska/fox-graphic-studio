<template>
  <q-page class="row items-center justify-evenly" style="min-height: 400px">
    <div class="col-12" style="min-height: 150px" />
    <logo />
    <div class="col-12" style="min-height: 350px" />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Logo from 'components/static/Logo.vue';

const layoutName = 'Home';

@Component({ name: layoutName, components: { Logo } })
export default class Home extends Vue {}
</script>
