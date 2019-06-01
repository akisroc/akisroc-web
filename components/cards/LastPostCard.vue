<template lang="pug">
  post-excerpt-card(v-if="post",
                    :author-name="post.author.username", :author-img="post.author.avatar",
                    author-href="/users/ecbel", post-excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem sit amet, consectetur adipisicing",
                    post-href="/", post-date="22 mai 2019 à 17:15",
                    :thread-title="post.thread.title", thread-href="/")
</template>
<script>
  import PostExcerptCard from './PostExcerptCard'

  export default {
    components: { PostExcerptCard },
    props: {
      category: Object
    },
    data () {
      return {
        post: null
      }
    },
    beforeMount () {
      this.$axios.get('http://localhost:8000/posts', {
        params: {
          'thread.category': this.category.id,
          'limit': 1,
          'order': 'DESC'
        }
      }).then(res => {
        this.post = res.data[0]
        console.log(this.post.author)
      })
    }
  }
</script>
