<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list :dense="false" :rounded="true">
      <v-subheader>{{ $t('header.langue') }}</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(itema, index) in items"
          :key="index"
          @click="changeLangue(index)"
        >
          <v-list-item-avatar>
            <v-img :src="itema.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="itema.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          avatar: '/tiengviet.png',
          title: this.$t('links.vietnamese')
        },
        {
          avatar: '/tienganh.png',
          title: this.$t('links.english')
        }
      ]
    }
  },
  methods: {
    changeLangue(item) {
      if (item === 0) this.$i18n.locale = 'vi'
      else this.$i18n.locale = 'en'
    }
  }
}
</script>

<style scoped></style>
