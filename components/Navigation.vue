<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">/\</nuxt-link>
    </div>

    <a role="button" class="navbar-burger burger" aria-label="menu"
       aria-expanded="false" data-target="responsive-navbar"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div id="responsive-navbar" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">Page d'accueil</nuxt-link>
        <a href="#" class="navbar-item">
          <span class="badge has-badge-rounded has-badge-light has-badge-small" data-badge="1">Messages privés</span>
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Gestion</a>
          <div class="navbar-dropdown">
            <a href="#" class="navbar-item">Troupes</a>
            <a href="#" class="navbar-item">Ressources</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link to="/users/keor" class="button is-light">
              <strong>Keor</strong>
            </nuxt-link>
            <a href="#" class="button is-dark">
              Se déconnecter
            </a>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>
