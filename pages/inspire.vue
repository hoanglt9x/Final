<template>
  <v-layout>
    <h1>{{ $t('home.title') }}</h1>
    <v-btn color="success" @click="thayDoiNgonNgu('en')">{{
      $t('links.english')
    }}</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="warning" @click="thayDoiNgonNgu('vi')">{{
      $t('links.vietnamese')
    }}</v-btn>
    <v-select
      v-model="ngonN"
      :items="this.$store.state.locales"
      :value="this.$i18n.locale"
      label="label"
      @change="thayDoiNgonNgu(ngonN)"
    ></v-select>
    <h2>{{ ngonN }}</h2>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      ngonN: 'vi'
    }
  },
  methods: {
    thayDoiNgonNgu(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped></style>
