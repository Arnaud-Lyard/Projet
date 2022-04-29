<template>
    <div class="header" :v-if="collapsed">
       
        <div class="header-left">
            <span class="burger" @click="toggleSidebar"><font-awesome-icon :icon="['fas', 'bars']" /></span>
             Menu
        </div>
           
        <div class="header-right">
            <span class="mode" @click="toggleSidebar"><font-awesome-icon :icon="['fas', 'moon']" /></span>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';

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