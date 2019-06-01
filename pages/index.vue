<template lang="pug">
  div
    nav.board.card(v-for="i in 2", :key="i")
      header.card-header
        h2.card-header-title {{ i === 1 ? 'RP' : 'HRP' }}
      div.card-content
        div.category.columns(v-for="category in (i === 1 ? stories : categories)")
          category-card.column.is-three-quarters(:category="category")
          last-post-card.column(:category="category")
</template>

<script>
import CategoryCard from '../components/cards/CategoryCard'
import PostExcerptCard from '../components/cards/PostExcerptCard'
import LastPostCard from '../components/cards/LastPostCard'

export default {
  components: {
    CategoryCard,
    PostExcerptCard,
    LastPostCard
  },
  data () {
    return {
      stories: [],
      categories: []
    }
  },
  beforeMount () {
    this.$axios.get('/categories').then(res => {
      this.categories = res.data
    })
    this.$axios.get('/places').then(res => {
      this.stories = res.data
    })
  }
}
</script>

<style lang="scss">
  .board {
    .card:hover {
      box-shadow: inset 0 0 10px white;
    }
    .board:not(:last-child) {
      margin-bottom: 5vh;
    }
  }
</style>

