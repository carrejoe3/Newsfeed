<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Newsfeed</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-newspaper</v-icon>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {
    fetchData () {
      const url = 'https://newsapi.org/v2/top-headlines?' + 'country=gb&' + 'apiKey=892ade7a95c3416db5b38451fffd25d2'
      const req = new Request(url)
      fetch(req)
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          this.$store.commit('updateArticles', json.articles)
        })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
