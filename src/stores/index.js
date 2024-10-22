import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: '',
    tokenStarter: '',
    position: 0,
    position2: 0,
    responses: null,
    oldEstimate: null
  }),
  actions: {
    saveUser(user) {
      this.user = user
    },
    saveToken(token) {
      this.token = token
    },
    saveTokenStarter(tokenStarter) {
      this.tokenStarter = tokenStarter
    },
    savePosition(position) {
      this.position = position
    },
    savePosition2(position2) {
      this.position2 = position2
    },
    saveResponses(responses) {
      this.responses = responses
    },
    saveOldEstimate(oldEstimate) {
      this.oldEstimate = oldEstimate
    },
    logout() {
      this.$reset()
      // window.location.reload()
    }
  },
  persist: {
    enabled: true, // Activer la persistance
    strategies: [
      {
        key: 'user-store', // Clé pour le localStorage/sessionStorage
        storage: localStorage // Choisir le stockage : localStorage ou sessionStorage
      }
    ]
  }
})
