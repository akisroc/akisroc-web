<template lang="pug">
  nav.navbar.is-dark(role="navigation", aria-label="main navigation")
    a.burger.navbar-burger(@click="toggle", role="button",
                           aria-label="menu", aria-expanded="false",
                           data-target="responsive-navbar")
      span(aria-hidden="true")
      span(aria-hidden="true")
      span(aria-hidden="true")
    div#responsive-navbar.navbar-menu(@click="toggle")
      div.navbar-start
        nuxt-link.navbar-item(to="/") Page d'accueil
        a.navbar-item(href="#")
          span.badge.has-badge-rounded.has-badge-light.has-badge-small(data-badge="1")
            | Messages privés
        div.navbar-item.has-dropdown.is-hoverable
          a.navbar-link Gestion
          div.navbar-dropdown
            a.navbar-item(href="#") Troupes
            a.navbar-item(href="#") Ressources
      div.navbar-end
        div.navbar-item
          div.buttons
            nuxt-link.button.is-light(v-if="$auth.loggedIn",
                                      :to="'/users/' + $auth.user.slug")
              strong {{ $auth.user.username }}
            nuxt-link.button.is-dark(v-if="!$auth.loggedIn", to="/login") Se connecter
            button.button.is-dark(v-else, to="/logout", @click.prevent="logout") Se déconnecter
</template>

<script>
  export default {
    data () {
      return {
        $burgers: [],
        $burgersTarget: null
      }
    },
    mounted () {
      this.$burgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'), 0
      )
      this.$burgersTarget = document.getElementById('responsive-navbar')
    },
    methods: {
      toggle () {
        this.$burgers.forEach(el => {
          el.classList.toggle('is-active')
        })
        this.$burgersTarget.classList.toggle('is-active')
      },
      async logout () {
        try {
          await this.$auth.logout().catch(e => {
            this.$toast.error('Déconnexion échouée.')
          })
          if (!this.$auth.loggedIn) {
            this.$toast.success('Déconnexion réussie.')
          }
        } catch (e) {
          this.$toast.error('Déconnexion échouée.')
        }
      }
    },
  }
</script>
