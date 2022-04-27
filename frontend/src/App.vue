<template>
  <nav>
    <router-link to="/">Carroussel aléatoire</router-link> |
    <router-link to="/about">A propos</router-link>
  </nav>

  <router-view/>
</template>

<script>


export default {
  mounted() {
    this.$store.dispatch('carrousselOne/getcarrousselItems'); // Appel de l'API via la méthode dispatch() pour le 1er carroussel
    this.$store.dispatch('carrousselTwo/getcarrousselItems'); // Appel de l'API via la méthode dispatch() pour le 2eme carroussel
    this.$store.dispatch('carrousselThree/getcarrousselItems'); // Appel de l'API via la méthode dispatch() pour le 1er carroussel
    this.$store.dispatch('carrousselFour/getcarrousselItems'); // Appel de l'API via la méthode dispatch() pour le 1er carroussel
    this.$store.dispatch('carrousselFive/getcarrousselItems'); // Appel de l'API via la méthode dispatch() pour le 1er carroussel
  },
}

</script>

<style>
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
