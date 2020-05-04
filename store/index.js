export const state = () => ({
  locale: 'vi',
  locales: ['vi', 'en']
})

export const mutations = {
  setLanguage(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
