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
          div.card.column
            div.card-content.columns
              figure.column.is-one-fifth.image.is-32x32
                img.is-rounded(src="ecbel.jpg", alt="Ec'bêl")
                figcaption
                  a(href="#") Ec'bêl
              div.column
                p.content.is-small
                  | « Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  | Aspernatur, illum
                  |
                  a(href="#") [...]
                  |  »
                p.content.is-small
                  | Le 14 mai 2019,
                  | dans
                  |
                  em
                    a(href="#") La Peste de Nar'zashj
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
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

