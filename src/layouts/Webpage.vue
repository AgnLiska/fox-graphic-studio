<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-icon src="/icons/icon-128x128.png" color="white" />

        <q-toolbar-title>
          Fox Graphic Studio
        </q-toolbar-title>
        <q-btn
          icon="phone"
          :label="!$q.screen.xs ? '601 278 353' : ''"
          type="a"
          href="tel:+48601278353"
        />
        <q-btn
          v-if="!$q.screen.xs"
          icon="email"
          type="a"
          href="mailto:biuro@fgs.pl"
        />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <!--        <essential-link-->
        <!--          v-for="link in essentialLinks"-->
        <!--          :key="link.title"-->
        <!--          v-bind="link"-->
        <!--        />-->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <section
        :class="
          !$q.screen.xs
            ? 'row q-px-xl q-py-md q-gutter bg-blue-9 justify-between'
            : 'row q-pa-md q-gutter bg-blue-9 justify-between'
        "
      >
        <div class="col-8 col-sm-8 col-xs-12 row">
          <div v-if="!$q.screen.xs" class="col-grow" />
          <q-list class="col-5 col-sm-5 col-xs-12 q-pa-md self-center">
            <q-item>
              <q-item-section
                avatar
                :class="$q.screen.xs ? 'q-ml-xl q-pr-none' : ''"
              >
                <q-btn icon="place" outline round @click="openGoogleMaps" />
              </q-item-section>
              <q-item-section>
                ul. Na Ostrowiu 1 <br />
                80-873 Gdańsk
              </q-item-section>
            </q-item>
            <q-item :class="$q.screen.xs ? 'justify-center' : ''">
              <q-item-section style="max-width: 200px">
                <q-btn
                  icon="phone"
                  label="601 278 353"
                  type="a"
                  href="tel:+48601278353"
                  outline
                />
              </q-item-section>
            </q-item>
            <q-item :class="$q.screen.xs ? 'justify-center' : ''">
              <q-item-section style="max-width: 200px">
                <q-btn
                  icon="email"
                  type="a"
                  href="mailto:biuro@fgs.pl"
                  label="biuro@fgs.pl"
                  no-caps
                  outline
                />
              </q-item-section>
            </q-item>
          </q-list>
          <div
            class="col-6 col-sm-6 col-xs-12  q-py-md q-px-lg self-center text-center"
          >
            <h5 class="q-my-none">
              Zapraszamy
            </h5>
            <br />
            <p>
              od poniedziałku do piątku
              <strong>8:00 - 16:00</strong>
            </p>
          </div>
        </div>

        <!--      <iframe-->
        <!--        class="col-3 col-sm-4 col-xs-12 bg-white"-->
        <!--        allowfullscreen-->
        <!--        height="250"-->
        <!--        frameborder="0"-->
        <!--        style="border:0"-->
        <!--        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDisDuZkqoQHbeDQhkMqHuO_XTYVIQUyhM&q=Fox+Graphic+Studio,Gdańsk+Poland"-->
        <!--      />-->
        <div
          class="col-3 col-sm-4 col-xs-12 col-grow bg-white"
          style="min-height: 250px"
        >
          <iframe
            class="bg-white fit"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBUyKwv9jxoXRSdafkA2XMKupmkg4mvg38
						&q=Fox+Graphic+Studio+Gdańsk"
          />
        </div>
      </section>
      <div class="bg-primary text-center text-caption q-py-md">
        &copy;2020 &bullet; Fox Graphic Studio
        <p v-if="!$q.screen.xs" class="q-ma-none">Agnieszka Lisowska</p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

const layoutName = 'Webpage';

@Component({ name: layoutName })
export default class Webpage extends Vue {
  private leftDrawerOpen = false;

  private googleMapsLink =
  'https://www.google.pl/maps/dir//Fox+Graphic+Studio+%E2%80%93+Agencja+reklamowa,+Na+Ostrowiu+1,+80-873+Gda%C5%84sk/@54.3732974,18.6483619,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x46fd74be29f3bbed:0x3cffadd3158d191d!2m2!1d18.6505559!2d54.3732943!3e0';

  private openGoogleMaps() {
    open(this.googleMapsLink);
  }
}
</script>
