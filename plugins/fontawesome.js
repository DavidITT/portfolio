import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import {
    faCircleUser as fasCircleUser,
    faMoon as fasMoon,
    faCircleHalfStroke as faLight,
    faSun as faSun,
    faBars as fasBars,
    faHospital as fasHospital
} from '@fortawesome/free-solid-svg-icons'

library.add(faTwitterSquare, faTwitch, faGithubSquare, fasMoon, faLight, faSun)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
