<template lang="pug">
  div
    nav.category.card(v-for="i in 2", :key="i")
      header.card-header
        h2.card-header-title {{ i === 1 ? 'RP' : 'HRP' }}
      div.card-content
        div.board.columns(v-for="i in 4", :key="i")
          nuxt-link.card.column.is-three-quarters(
            :to="localePath({name: 'categories-slug', params: {slug: 'place-frozell'}})")
            header.card-header
              h3.card-header-title Place Frozell
            p.card-content.is-small
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              | molestiae?
          post-excerpt-card.column(author-name="Ec'bêl", author-img="ecbel.jpg",
                                   author-href="/users/ecbel", post-excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem sit amet, consectetur adipisicing"
                                   post-href="/", post-date="22 mai 2019 à 17:15",
                                   thread-title="La Peste de Nar'zashj", thread-href="/")
</template>

<script>
import PostExcerptCard from '../components/cards/PostExcerptCard'

export default {
  components: {
    PostExcerptCard
  }
}
</script>

<style lang="scss">
  .category {
    .card:hover {
      box-shadow: inset 0 0 10px white;
    }
    .board:not(:last-child) {
      margin-bottom: 5vh;
    }
  }
</style>

