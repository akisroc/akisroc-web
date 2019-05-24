<template lang="pug">
  form(method="post", @submit.prevent="login")
    fieldset
      legend Login
      div.field
        div.control
          input.input(type="text", placeholder="Login", required="true"
                      v-model.trim="username")
      div.field
        div.control
          input.input(type="password", placeholder="Password", required="true"
                      v-model.trim="password")
      div.field
        div.control
          button.button Login
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login () {
        try {
          this.$toast.show('Connexion...');
          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          }).catch(e => {
            this.$toast.error('Connexion échouée.')
          })
          if (this.$auth.loggedIn) {
            this.$toast.success('Connexion réussie.')
          }
        } catch (e) {
          this.$toast.error('Identifiant et/ou mot de passe invalide(s).')
        }
      }
    }
  }
</script>
