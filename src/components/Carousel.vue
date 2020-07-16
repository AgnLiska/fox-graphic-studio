<template>
  <div>
    <q-carousel
      v-model="slide"
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      arrows
      navigation
      infinite
      swipeable
      padding
      :autoplay="true"
      :height="height"
    >
      <!--      <q-carousel-slide-->
      <!--        :name="1"-->
      <!--        img-src="../../public/img/NowaLokalizacja.jpg"-->
      <!--      />-->
      <q-carousel-slide :name="2" img-src="../../public/img/img1.png" />
      <q-carousel-slide :name="3" img-src="../../public/img/img2.png" />
      <q-carousel-slide :name="4" img-src="../../public/img/img3.png" />
      <q-carousel-slide :name="5" img-src="../../public/img/img4.png" />
      <q-carousel-slide :name="6" img-src="../../public/img/FBpoppy.png" />
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const componentName = 'Carousel';

@Component({ name: componentName })
export default class Carousel extends Vue {
  @Prop({ type: String }) height!: string;
  private slide = 2;
}
</script>

<style scoped></style>
