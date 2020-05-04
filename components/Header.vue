<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <component-langue />
    </v-app-bar>
  </div>
</template>

<script>
import componentLangue from '~/components/Header/Langue.vue'
export default {
  components: {
    componentLangue
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
