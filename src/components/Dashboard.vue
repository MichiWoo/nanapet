<template lang="pug">
  main
    .position-relative
      section#sectionDash.section.section-lg.section-shaped.pb-250
        .container.py-lg-md.d-flex
            .col.px-0
              .row
                .col-lg-12
                  h1.display-3
                  | Mis Mascotas
                  br
                  span (Todas...)
                  p.lead
                    | Listado de Mascotas
                  br
                  .btn-wrapper.text-white
                    a.btn.btn-info.btn-icon.mb-3.mb-sm-0(@click="newPet")
                      span.btn-inner--icon
                        i.fas.fa-paw
                      span.btn-inner--text Nueva Mascota
                  br
              .row
                .col-lg-12
                  .row.row-grid
                    .col-lg-4(v-for="pet in mascotas" :key="pet.id")
                      .card.card-lift--hover.shadow.border-0
                        .card-body.py-5
                          img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="pet.foto" :alt="pet.nombre" style="height: 200px;")
                          br
                          h6.text-primary.text-uppercase Nombre: {{ pet.nombre}}
                          p.description.mt-3
                            | Descripción: {{ pet.descripcion}}
                          div
                            span.badge.badge-pill.badge-primary {{ pet.especie}}
                            span.badge.badge-pill.badge-primary {{ pet.raza }}
                            span.badge.badge-pill.badge-primary {{ pet.talla }} cms.
                            span.badge.badge-pill.badge-primary {{ pet.peso }} kgs.
                          br
                          button.btn.btn-info(type="button")
                            i.fas.fa-plus
                      br
</template>

<script>
import firebaseApp from 'firebase'
let bd = firebaseApp.database()
let mascotasRef = bd.ref('mascotas')

export default {
  name: 'Dashboard',
  firebase: {
    mascotas: mascotasRef
  },
  data () {
    return {
    }
  },
  methods: {
    newPet () {
      this.$router.push('/New')
    }
  }
}
</script>

<style lang="css" scoped>
  .results {
    margin-top: 50px;
  }

  #sectionDash {
    padding-top: 10px;
  }
</style>
