<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">

        <!-- <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    ><font-awesome-icon :icon="['fas', 'bars']" />
    </span> -->

<div class="sidebar-link" v-if="!collapsed">

    <SidebarLink to="/" icon="house">Boutique</SidebarLink>
    <SidebarLink to="/about" icon="book-open">Actualités</SidebarLink>

</div>

<div 
  v-if="!collapsed" 
  @click="toggleSidebar" 
  style="position:fixed;left:0;top:0;right:0;bottom:0;z-index:0">
</div>


    <!-- <h1>
      <span v-if="collapsed">
        <img class="logo" src="../../assets/logo.png" alt="">
      </span>
      <span v-else>Boutique Warhammer</span>
    </h1> -->
    
  </div>
</template>


<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
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
  }
}
</script>



<style>
:root {
  --sidebar-bg-color: #2f44a5;
  --sidebar-item-hover: #3850a1;
  --sidebar-item-active: #182d86;
}
</style>

<style scoped src="./Sidebar.css">
</style>