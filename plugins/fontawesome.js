import { library, config } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

// This line add brands icons into application
/*
  for use:
  <font-awesome-icon :icon="['fa-brands', 'github']" />
  <font-awesome-icon :icon="['fa-brands', 'twitter']" />
  <font-awesome-icon :icon="['fa-brands', 'linkedin']" />
 */
library.add(faLinkedin, faTwitter, faGithub)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
