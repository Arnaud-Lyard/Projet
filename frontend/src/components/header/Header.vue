<template>
    <div class="header" :class="{ right : !collapsed}">
       
        <div class="header-left">
            <span v-if="collapsed" class="burger" @click="toggleSidebar"><font-awesome-icon :icon="['fas', 'bars']" /></span>
            <span v-if="!collapsed" class="burger" @click="toggleSidebar"><font-awesome-icon :icon="['fas', 'x']" /></span>
             Menu
        </div>
           
        <div class="header-right">
            <span class="mode" @click="toggleSidebar"><font-awesome-icon :icon="['fas', 'moon']" /></span>
        </div>
    </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from '../sidebar/state'

export default {
  props: {},
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Some Default Title";
      },
    },
  },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },

}

</script>

<style scoped src="./Header.css">

</style>