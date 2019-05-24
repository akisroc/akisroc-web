<template lang="pug">
  nuxt-link.category-card.card(
    :to="localePath({name: 'categories-slug', params: {slug: category.slug}})")
    header.card-header
      h3.card-header-title {{ category.title }}
    p.card-content.is-small {{ category.description }}
</template>

<script>
  export default {
    props: {
      category: Object
    }
  }
</script>
