<template lang="pug">
  main
    .position-relative
      section#sectionDash.section.section-lg.section-shaped.pb-250
        .container.py-lg-md.d-flex
            .col.px-0
              .row
                .col-lg-12
                  h1.display-3
                  | Agregar Nueva Mascota
                  br
                  br
              .row
                .col-md-4
                  .form-group
                    input.form-control.form-control-alternative(
                      type='text', 
                      placeholder='Nombre de la mascota',
                      v-model="newMascota.nombre",
                      )
                .col-md-2
                  .form-group
                    .input-group.input-group-alternative
                      .input-group-prepend
                        span.input-group-text
                          i.far.fa-calendar-alt
                      input.form-control.datepicker(
                        type='text',
                        v-model="newMascota.fechaNac",
                        )
                .col-md-2
                  .custom-control.custom-radio.mb-3
                    input#radioSexF.custom-control-input(
                      name='radioSex', 
                      type='radio',
                      value="F",
                      v-model="newMascota.sexo"
                      )
                    label.custom-control-label(for='radioSexF') Fem.
                  .custom-control.custom-radio.mb-3
                    input#radioSexM.custom-control-input(
                      name='radioSex',
                      type='radio',
                      value="M",
                      v-model="newMascota.sexo"
                      )
                    label.custom-control-label(for='radioSexM') Masc.
              .row
                .col-md-2
                  .form-group
                    input.form-control.form-control-alternative(
                      type='text', 
                      placeholder='Especie de la mascota',
                      v-model="newMascota.especie"
                      )
                .col-md-2
                  .form-group
                    input.form-control.form-control-alternative(
                      type='text', 
                      placeholder='Escribe la raza',
                      v-model="newMascota.raza"
                      )
                .col-md-2
                  .form-group
                    input.form-control.form-control-alternative(
                      type='text', 
                      placeholder='Escribe la talla',
                      v-model="newMascota.talla",
                      )
                .col-md-2
                  .form-group
                    input.form-control.form-control-alternative(
                      type='text', 
                      placeholder='Peso de la mascota',
                      v-model="newMascota.peso",
                      )
              .row
                .col-md-6
                  .form-group
                    input.form-control.form-control-alternative(
                      type='text', 
                      placeholder='Descripcion...',
                      v-model="newMascota.descripcion",
                      )
                .col-md-2
                  .form-group
                    input.form-control.form-control-alternative(
                      type='text', 
                      placeholder='Fotografía',
                      v-model="newMascota.foto",
                      )
              .row
                button.btn.btn-primary(@click="savePet()") Guardar
</template>

<script>
import moment from 'moment'
import firebaseApp from 'firebase'
let bd = firebaseApp.database()
let mascotasRef = bd.ref('mascotas')

export default {
  name: 'New',
  firebase: {
    mascotas: mascotasRef
  },
  data () {
    return {
      newMascota: {
        nombre: '',
        fechaNac: '',
        especie: '',
        raza: '',
        talla: '',
        peso: '',
        descripcion: '',
        sexo: '',
        foto: ''
      }
    }
  },
  methods: {
    savePet () {
      console.log(this.newMascota)
      mascotasRef.push(this.newMascota)
      this.newMascota.nombre = ''
      this.newMascota.fechaNac = ''
      this.newMascota.especie = ''
      this.newMascota.raza = ''
      this.newMascota.talla = ''
      this.newMascota.peso = ''
      this.newMascota.descripcion = ''
      this.newMascota.sexo = ''
      this.newMascota.foto = ''

    }
  },
  created () {
    this.fechaNacimiento = moment().format('YYYY-MM-DD')
  }
}
</script>

<style scoped>

</style>


