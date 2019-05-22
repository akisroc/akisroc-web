<template lang="pug">
  nuxt-link.card.post-excerpt-card.tooltip.is-tooltip-multiline(:to="postHref",
                                              :data-tooltip="'« ' + postExcerpt + ' [...] »'")
    div.card-content
      figure.columns.image
        img.column.is-rounded(:src="authorImg", :alt="authorName")
        figcaption.column
          nuxt-link(:to="authorHref") {{ authorName }}
      div
        p.content.is-small
          | Le {{ postDate }} <br/>
          em
            nuxt-link(to="/") {{ threadTitle }}
</template>

<script>
  export default {
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
