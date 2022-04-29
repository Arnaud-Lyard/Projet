<template>
        <section>
            <Pwa />
            <Sidebar />
           
            <div :style="{ 'margin-left': sidebarWidth }">
                <Header />
            </div>
            <router-view />
        </section>
</template>

<script>

import Pwa from '@/components/pwa/Pwa'
import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'

export default {
  components: { 
    Sidebar,
    Header,
    Pwa,
  },
  setup() {
    return { sidebarWidth }
  },
  mounted() {
    // CALL API with dispatch() method for slider
    this.$store.dispatch('carrousselOne/getcarrousselItems');
    this.$store.dispatch('carrousselTwo/getcarrousselItems');
    this.$store.dispatch('carrousselThree/getcarrousselItems');
    this.$store.dispatch('carrousselFour/getcarrousselItems');
    this.$store.dispatch('carrousselFive/getcarrousselItems');
  },
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
