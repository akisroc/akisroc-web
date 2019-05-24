<template lang="pug">
  div
    nav.board.card(v-for="i in 2", :key="i")
      header.card-header
        h2.card-header-title {{ i === 1 ? 'RP' : 'HRP' }}
      div.card-content
        div.category.columns(v-for="category in (i === 1 ? rpCategories : hrpCategories)")
          category-card.column.is-three-quarters(:category="category")
          post-excerpt-card.column(author-name="Ec'bêl", author-img="ecbel.jpg",
                                   author-href="/users/ecbel", post-excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem sit amet, consectetur adipisicing"
                                   post-href="/", post-date="22 mai 2019 à 17:15",
                                   thread-title="La Peste de Nar'zashj", thread-href="/")
</template>

<script>
import CategoryCard from '../components/cards/CategoryCard'
import PostExcerptCard from '../components/cards/PostExcerptCard'

export default {
  components: {
    CategoryCard, PostExcerptCard
  },
  data () {
    return {
      rpCategories: [],
      hrpCategories: []
    }
  },
  beforeMount () {
    this.$axios.get('/categories').then(res => {
      this.rpCategories = res.data.filter(c => c['role_play'] === true)
      this.hrpCategories = res.data.filter(c => c['role_play'] === false)
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

