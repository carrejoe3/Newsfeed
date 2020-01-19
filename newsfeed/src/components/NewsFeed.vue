<template>
  <v-container>
    <v-card class="mx-auto my-12" v-for="(article, index) in articles" :key="index">
      <v-img :src="article.urlToImage"></v-img>
      <v-card-title id="title">{{ article.title }}</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <div class="my-4 subtitle-1 black--text">{{ article.publishedAt | formatDateTime }}</div>
        <div>{{ article.description }}</div>
      </v-card-text>
      <v-card-actions>
        <a :href="article.url" target="_blank">
          <v-btn color="primary accent-4" text>Read</v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'NewsFeed',
  data: () => ({}),
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style lang="scss" scoped>
#title {
  word-break: normal;
}
</style>
