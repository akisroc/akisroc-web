<template>
  <div>
    <nav v-for="i in 2" :key="i" class="category card">
      <header class="card-header">
        <h2 class="card-header-title">Akisroc</h2>
      </header>
      <div class="card-content">
        <div v-for="i in 4" :key="i" class="board columns">
          <div class="card column is-three-quarters">
            <header class="card-header">
              <h3 class="card-header-title">
                <nuxt-link to="/boards/place-frozell">Place Frozell</nuxt-link>
              </h3>
            </header>
            <p class="card-content is-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, molestiae?</p>
          </div>
          <div class="card column">
            <div class="card-content columns">
              <figure class="column is-one-fifth image is-32x32">
                <img class="is-rounded" src="ecbel.jpg" alt="Ec'bêl">
                <figcaption><a href="#">Ec'bêl</a></figcaption>
              </figure>
              <div class="column">
                <p class="content is-small">
                  « Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, illum <a href="#">[..]</a> »
                </p>
                <p class="content is-small">
                  Le 14 mai 2019,
                  dans <em><a href="#">La Peste de Nar'zashj</a></em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
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

