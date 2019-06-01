<template lang="pug">
  nuxt-link.card.post-excerpt-card.tooltip.is-tooltip-multiline(:to="postHref",
                                              :data-tooltip="'« ' + postExcerpt + ' [...] »'")
    div.card-content
      figure.columns.image.is-hidden-mobile
        avatar.column.is-rounded(:src="authorImg", :alt="authorName")
        figcaption.column
          nuxt-link(:to="authorHref") {{ authorName }}
      div
        p.content.is-small
          | Dernier post le {{ postDate }} <br/>
          em
            nuxt-link(to="/") {{ threadTitle }}
</template>

<script>
  import Avatar from '../Avatar'

  export default {
    components: {
      Avatar
    },
    props: {
      authorName: String,
      authorImg: String,
      authorHref: String,
      postExcerpt: String,
      postHref: String,
      postDate: String,
      threadTitle: String,
      threadHref: String
    }
  }
</script>

<style lang="scss">
  .post-excerpt-card {
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
</style>
