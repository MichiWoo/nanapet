<template lang="pug">
  footer.footer.has-cards
     .container
      .row.row-grid.align-items-center.my-md
        .col-lg-6
          h3.text-primary.font-weight-light.mb-2 Gracias por participar en esta aventura.
          h4.mb-0.font-weight-light Esperamos que puedan divertirse y cuidar muy bien a sus mascotas.
        .col-lg-6.text-lg-center.btn-wrapper
          a.btn.btn-neutral.btn-icon-only.btn-twitter.btn-round.btn-lg(target='_blank' href='' data-toggle='tooltip' data-original-title='Follow us')
            i.fab.fa-twitter
          a.btn.btn-neutral.btn-icon-only.btn-facebook.btn-round.btn-lg(target='_blank' href='' data-toggle='tooltip' data-original-title='Like us')
            i.fab.fa-facebook-square
          a.btn.btn-neutral.btn-icon-only.btn-instagram.btn-lg.btn-round(target='_blank' href='' data-toggle='tooltip' data-original-title='Follow us')
            i.fab.fa-instagram
          a.btn.btn-neutral.btn-icon-only.btn-github.btn-round.btn-lg(target='_blank' href='' data-toggle='tooltip' data-original-title='Star on Github')
            i.fab.fa-github
      hr
      .row.align-items-center.justify-content-md-between
        .col-md-6
          .copyright
            | &copy; 2018
            i.fab.fa-twitter 
            | @michiwoo.
        .col-md-6
          ul.nav.nav-footer.justify-content-end
            li.nav-item
              a.nav-link(href='' target='_blank') Michiwoo Webs
            li.nav-item
              a.nav-link(href='' target='_blank') Desarrolladores
            li.nav-item
              a.nav-link(href='http://blog.creative-tim.com' target='_blank') Blog
            li.nav-item
              a.nav-link(href='https://github.com/michiwoo' target='_blank') MIT License
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  .footer {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
</style>

