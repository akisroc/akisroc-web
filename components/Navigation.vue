<template lang="pug">
  nav.navbar.is-dark(role="navigation", aria-label="main navigation")
    div.navbar-brand
      nuxt-link.navbar-item(to="/") /\
    a.burger.navbar-burger(role="button", aria-label="menu", aria-expanded="false",
                           data-target="responsive-navbar")
      span(aria-hidden="true")
      span(aria-hidden="true")
      span(aria-hidden="true")
    div#responsive-navbar.navbar-menu
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
            nuxt-link.button.is-light(to="/users/keor")
              strong Keor
            a.button.is-dark(href="#") Se déconnecter
</template>
