<template lang="pug">
  div
    navigation
    main.container
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
  @import "~bulma-tooltip";

  main {
    padding-top: 5vh;
  }
</style>
