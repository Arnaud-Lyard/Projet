<!-- PWAPrompt.vue -->
<template>
        <div v-if="shown">
            <div class="pwa">
                <div>
                    Installer l'application pour être informé des dernières nouveautés !
                </div>
                <div>
                  <button class="pwa-btn dismiss" @click="dismissPrompt">
                  Une prochaine fois
                  </button>

                  <button class="pwa-btn install" @click="installPWA">
                  Installer
                  </button>
              </div>
        </div>
    </div>
</template>

<style scoped src="./Pwa.css">

</style>

<script>
export default {
  name: 'Pwa',
  data: () => ({
    shown: false,
  }),

  beforeMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },

  methods: {
    dismissPrompt() {
      this.shown = false
    },

    installPWA() {
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt() // Hide the prompt once the user's clicked
        if (choice.outcome === 'accepted') {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      })
    },
  }
}
</script>