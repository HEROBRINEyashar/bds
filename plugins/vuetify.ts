import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import {mdi} from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr:true,
        theme:{
            themes:{
                light:{
                    dark: false,
                    colors: {
                        primary: '#2e477d',
                      }
                }
            }
        },
        icons: {
            defaultSet: 'mdi',
            sets: {
                mdi,
            }
        },
    })
    nuxtApp.vueApp.use(vuetify)
})