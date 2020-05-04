<template>
  <v-footer :fixed="false" :padless="true" class="text-center">
    <span align="center"
      >&copy; {{ new Date().getFullYear() + ' ' + $t('footer.content') }}</span
    >
  </v-footer>
</template>

<script>
export default {}
</script>

<style scoped></style>
