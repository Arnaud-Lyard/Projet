<template>
  <div class="home">
    <SliderOne />
    <SliderTwo />
    <SliderThree />
    <SliderFour />
    <SliderFive />
  </div>
</template>

<script>
import SliderOne from '@/components/sliderone/SliderOne.vue'
import SliderTwo from '@/components/slidertwo/SliderTwo.vue'
import SliderThree from '@/components/sliderthree/SliderThree.vue'
import SliderFour from '@/components/sliderfour/SliderFour.vue'
import SliderFive from '@/components/sliderfive/SliderFive.vue'

export default {
  name: 'HomeView',
  components: {
    SliderOne,
    SliderTwo,
    SliderThree,
    SliderFour,
    SliderFive
  }
}
</script>

<style scoped src="./HomeView.css">

</style>