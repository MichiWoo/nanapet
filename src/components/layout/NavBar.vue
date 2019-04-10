<template lang="pug">
  header
    nav.navbar.navbar-expand-lg.navbar-dark.bg-default
      .container
        router-link.a.navbar-brand.mr-lg-5(to="/")
          img(src='../../assets/mascotasLogo.png')
        button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbar_global' aria-controls='navbar_global' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbar_global.navbar-collapse.collapse
          .navbar-collapse-header
            .row
              .col-6.collapse-brand
                router-link.a(to="/")
                  img(src='../../assets/mascotasLogo.png')
              .col-6.collapse-close
                button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbar_global' aria-controls='navbar_global' aria-expanded='false' aria-label='Toggle navigation')
                  span
                  span
          ul.navbar-nav.navbar-nav-hover.align-items-lg-center
            li.nav-item.dropdown
              router-link.a.nav-link(role='button' to="/")
                | 🏠 Home
          ul.navbar-nav.align-items-lg-center.ml-lg-auto
            li.nav-item
              a.nav-link.nav-link-icon(href='https://www.facebook.com/creativetim' target='_blank' data-toggle='tooltip' title='Like us on Facebook')
                i.fab.fa-facebook-square
                span.nav-link-inner--text.d-lg-none Facebook
            li.nav-item
              a.nav-link.nav-link-icon(href='https://www.instagram.com/creativetimofficial' target='_blank' data-toggle='tooltip' title='Follow us on Instagram')
                i.fab.fa-instagram
                span.nav-link-inner--text.d-lg-none Instagram
            li.nav-item
              a.nav-link.nav-link-icon(href='https://twitter.com/creativetim' target='_blank' data-toggle='tooltip' title='Follow us on Twitter')
                i.fab.fa-twitter-square
                span.nav-link-inner--text.d-lg-none Twitter
            li.nav-item
              a.nav-link.nav-link-icon(href='https://github.com/creativetimofficial/argon-design-system' target='_blank' data-toggle='tooltip' title='Star us on Github')
                i.fab.fa-github
                span.nav-link-inner--text.d-lg-none Github
            li.nav-item.d-none.d-lg-block.ml-lg-4
              a.btn.btn-neutral.btn-icon(href='https://www.creative-tim.com/product/argon-design-system' target='_blank')
                span.btn-inner--icon
                  i.fas.fa-sign-in-alt
                span.nav-link-inner--text
                |  Login 🚪
</template>

<script>
export default {
  name: 'NavBar'
//   methods: {
//     displayBurger () {
//       let burger = document.getElementById('navBurger')
//       let nav = document.getElementById(burger.dataset.target)
//       burger.classList.toggle('is-active')
//       nav.classList.toggle('is-active')
//     }
//   }
}
</script>

<style lang="css">
  #logoBrand {
    width: 200px;
    height: 112px;
  }
  nav.navbar {
    height: 80px;
  }

</style>

