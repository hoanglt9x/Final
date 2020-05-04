<template>
  <v-app dark>
    <component-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <component-footer />
  </v-app>
</template>

<script>
import componentFooter from '~/components/Footer.vue'
import componentHeader from '~/components/Header.vue'
export default {
  components: {
    componentFooter,
    componentHeader
  },
  data() {
    return {}
  }
}
</script>
