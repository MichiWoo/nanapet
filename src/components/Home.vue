<template lang="pug">
  main
    .position-relative
    section.section.section-lg.section-shaped.pb-250
      .shape.shape-style-1.shape-default
        span
        span
        span
        span
        span
        span
        span
        span
        span
      .container.py-lg-md.d-flex
        .col.px-0
          .row
            .col-lg-6
              h1.display-3.text-white
                | A beautiful Design System
                span completed with examples
              p.lead.text-white
                | The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you&apos;re good to go.
              .btn-wrapper
                a.btn.btn-info.btn-icon.mb-3.mb-sm-0(@click="showPets")
                  span.btn-inner--icon
                    i.fa.fa-code
                  span.btn-inner--text Ver Mascotas
                a.btn.btn-white.btn-icon.mb-3.mb-sm-0
                  span.btn-inner--icon
                    i.ni.ni-cloud-download-95
                  span.btn-inner--text Algo más
</template>

<script>
export default {
  name: 'Home',
  methods: {
    showPets () {
      this.$router.push('Dashboard')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>


