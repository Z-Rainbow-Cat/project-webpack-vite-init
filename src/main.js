import { createApp } from "vue";
import App from "./App.vue"

import "@/mock"

//i18n
import { createI18n } from "vue-i18n"
import message from "@/language/index.js"

const i18n = createI18n({
    locale:"en",
    messages:message,
    silentTranslationWarn:true
})

import router from "@/router"

createApp(App).use(router).use(i18n).mount("#app")