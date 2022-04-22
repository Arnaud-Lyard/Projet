<template>
  <div class="home">
    <Slider />
    <Slider />
  </div>
</template>

<script>
import Slider from '@/components/slider/Slider.vue'

export default {
  name: 'HomeView',
  components: {
    Slider
  }
}
</script>

<style scoped src="./HomeView.css">

</style>