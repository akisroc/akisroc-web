<template lang="pug">
  div
</template>

<script>
  export default {
    beforeMount() {
      this.$axios.get('/posts')
    }
  }
</script>
