<template>
            
<div class="container">
    <div class="home">
        <SliderOne />
        <SliderTwo />
        <SliderThree />
        <SliderFour />
        <SliderFive />
    </div>
    <div class="update">
        <button @click="carrousselreload" class="update-btn">Nouvelle Recherche</button>
    </div>
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
    SliderFive,
  },
  methods: {
    carrousselreload(){
        this.$store.dispatch('carrousselOne/getcarrousselItems');
        this.$store.dispatch('carrousselTwo/getcarrousselItems');
        this.$store.dispatch('carrousselThree/getcarrousselItems');
        this.$store.dispatch('carrousselFour/getcarrousselItems');
        this.$store.dispatch('carrousselFive/getcarrousselItems');
    }
  }
}
</script>

<style scoped src="./HomeView.css">

</style>