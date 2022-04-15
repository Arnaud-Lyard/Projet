<template>
  <div class="home">
    <Image />
    <Pwa />
    <!-- <Slider /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Image from '@/components/image/Image.vue'
import Pwa from '@/components/pwa/Pwa.vue'
// import Slider from '@/components/slider/Slider.vue'

export default {
  name: 'HomeView',
  components: {
    Image,
    Pwa,
    // Slider
  }
}
</script>
