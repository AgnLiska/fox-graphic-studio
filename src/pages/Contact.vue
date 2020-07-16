<template>
  <q-page class="row justify-around">
    <div class="text-center col-12">
      <h3 class="q-mb-none">
        Zapraszamy
      </h3>
      <h4 class="q-my-sm">
        do nowego biura!
      </h4>
      <br />
      <q-btn
        icon="place"
        color="red"
        label="Pokaż na mapie"
        outline
        size="lg"
        @click="openGoogleMaps"
      />
      <p class="q-pt-md">
        Na Ostrowiu 1
        <br />80-873 Gdańsk
      </p>
    </div>
    <div class="col-lg-6 col-md-10 col-sm-12 col-xs-12 q-mb-xl">
      <q-img
        src="/img/NowaLokalizacja.png"
        srcset="/img/NowaLokalizacja640.png 640w, /img/NowaLokalizacja.png 1280w"
        sizes="(max-width: 640px) 640w,
            (max-width: 1280px) 1280w"
        alt="nowa lokalizacja"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Carousel from 'components/Carousel.vue';

const pageName = 'Contact';

@Component({ name: pageName, components: { Carousel } })
export default class Contact extends Vue {
  private googleMapsLink =
    'https://www.google.pl/maps/dir//Fox+Graphic+Studio+%E2%80%93+Agencja+reklamowa,+Na+Ostrowiu+1,+80-873+Gda%C5%84sk/@54.3732974,18.6483619,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x46fd74be29f3bbed:0x3cffadd3158d191d!2m2!1d18.6505559!2d54.3732943!3e0';

  private openGoogleMaps() {
    open(this.googleMapsLink);
  }
}
</script>

<style scoped></style>
