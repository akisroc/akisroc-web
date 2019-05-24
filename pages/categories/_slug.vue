<template lang="pug">
  div
    nav.thread.card.columns(v-for="i in 20", :key="i")
      header.card-header.column.is-three-quarters
        h2.card-header-title
          a(href="#") La Peste de Nar'zashj
      p.card-content
        | Par
        |
        a(href="#") Ec'bêl
</template>

<script>
  export default {
  }
</script>
