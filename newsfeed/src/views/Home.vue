<template>
  <v-container class="home">
    <NewsFeed/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import NewsFeed from '@/components/NewsFeed.vue'

export default {
  name: 'home',
  components: {
    NewsFeed
  }
}
</script>
