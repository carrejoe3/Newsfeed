<template>
  <v-container>
    <v-card class="mx-auto my-12" v-for="(article, index) in articles" :key="index" :href="article.url" target="_blank" ripple>
      <v-img :src="article.urlToImage"></v-img>
      <v-card-title id="title">{{ article.title }}</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <div class="my-4 subtitle-1">{{ article.description }}</div>
        <div>{{ article.source.name }} - {{ article.publishedAt | formatDateTime }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'NewsFeed',
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
