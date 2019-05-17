<template>
  <div>
    <nav v-for="i in 20" :key="i" class="thread card columns">
      <header class="card-header column is-three-quarters">
        <h2 class="card-header-title">
          <a href="#">La Peste de Nar'zashj</a>
        </h2>
      </header>
      <div class="card-content">
        Par <a href="#">Ec'bêl</a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>
