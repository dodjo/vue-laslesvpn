import i18n from "@/service/i18n/index.js";
import {nextTick} from "vue";

const Translation = {
  get defaultLocale() {
    return i18n.global.locale
  },

  get supportLanguages() {
    return ['en', 'ru']
  },

  set currentLocale(newLocale) {
    i18n.global.locale = newLocale
  },

  isLocaleSupported(locale) {
    return this.supportLanguages.includes(locale)
  },

  getUserLocale() {
    const locale =  localStorage.getItem('locale')

    if(this.isLocaleSupported(locale)) {
      return locale
    }
     return this.defaultLocale
  },

  async setLanguage(language) {
    await this.loadLocaleMessages(language)
    this.currentLocale = language
    document.querySelector('html').setAttribute("lang", language)
    localStorage.setItem('locale', language)
  },

  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/locales/${locale}.json`)
      i18n.global.setLocaleMessage(locale, messages.default)
    }
    return nextTick()
  }
}

export default Translation
