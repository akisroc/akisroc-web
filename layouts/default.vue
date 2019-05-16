<template>
  <div>
    <navigation></navigation>
    <section class="section">
      <div class="container">
        <nuxt/>
      </div>
    </section>
  </div>
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
  $body-background-color: rgba($blue, 0.2);
  $card-background-color: rgba($yellow, 0.05);
  @import "../node_modules/bulma/bulma";
</style>
