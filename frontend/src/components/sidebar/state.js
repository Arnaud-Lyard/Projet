import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 300
export const NAVBAR_WIDTH = ((window.innerWidth*9)/10 - 300)
export const NAVBAR_WIDTH_COLLAPSED = (window.innerWidth*9)/10

export const SIDEBAR_WIDTH_COLLAPSED = 0
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)

export let navbarWidth = computed(
  () => `${collapsed.value ? NAVBAR_WIDTH_COLLAPSED : NAVBAR_WIDTH}px`
)
