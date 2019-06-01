<template lang="pug">
  img(v-if="src && alt", :src="src", :alt="alt")
  img(v-else="default-avatar.jpg")
</template>

<script>
  export default {
    props: {
      src: String,
      alt: String
    }
  }
</script>
