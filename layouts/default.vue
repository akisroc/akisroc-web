<template lang="pug">
  div
    navigation
    section.section
      div.container
        nuxt/
</template>

<script>
  import Navigation from '~/components/Navigation.vue'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/initial-variables";
  $body-background-color: rgba($blue, 0.25);
  $card-background-color: rgba($yellow, 0.05);
  @import "../node_modules/bulma/bulma";
  @import "../node_modules/bulma-badge/src/sass/index";
</style>
