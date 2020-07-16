<template>
  <div class="row justify-center">
    <q-img
      class="col-5 logo"
      src="/icons/icon-128x128.png"
      srcset="/icons/icon-128x128.png 96w, /icons/icon-192x192.png 192w, /icons/icon-384x384.png 384w"
      sizes="(max-width: 960px) 96w,
            (max-width: 1440px) 192w,
            (min-width: 1440px) 384w"
      style="min-width:96px; max-width:384px"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

const componentName = 'Logo';

@Component({ name: componentName })
export default class Logo extends Vue {}
</script>

<style>
.logo {
  animation: heartbeat 5s infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
