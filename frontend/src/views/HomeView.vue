<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Pwa />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Pwa from '@/components/pwa/Pwa.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Pwa,
  }
}
</script>
