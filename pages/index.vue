<template lang="pug">
  div
    nav.category.card(v-for="i in 2", :key="i")
      header.card-header
        h2.card-header-title Akisroc
      div.card-content
        div.board.columns(v-for="i in 4", :key="i")
          div.card.column.is-three-quarters
            header.card-header
              h3.card-header-title
                nuxt-link(to="/boards/place-frozell") Place Frozell
            p.card-content.is-small
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              | molestiae?
          post-excerpt-card.column(author-name="Ec'bêl", author-img="ecbel.jpg",
                                   author-href="/users/ecbel", post-excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem sit amet, consectetur adipisicing"
                                   post-href="/", post-date="22 mai 2019 à 17:15",
                                   thread-title="La Peste de Nar'zashj", thread-href="/")
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import PostExcerptCard from "../components/cards/PostExcerptCard";

export default {
  components: {
    PostExcerptCard,
    AppLogo
  }
}
</script>

<style lang="scss">
  .board {
    &:hover {
      transform: scale3d(0.994, 0.994, 1);
      font-weight: bold;
    }
  }
</style>

