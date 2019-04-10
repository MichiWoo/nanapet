<template lang="pug">
  main
    Loader(v-show="isLoading")
    ModalInfo(v-show="modalStatus" :title="titleModal" :content="contentModal" @padre:close="cerrarModal")
    section.section(v-show="!isLoading")
      .container
        .columns
          .column.is-4.is-offset-4
            h3.title.has-text-centered Login a Sistema
            .field
              label.label Usuario
              .control
                input.input.is-primary(
                  type='text', 
                  placeholder='Nombre de usuario',
                  v-model="usuario",
                )
            .field
              label.label Contraseña
              .control.has-icons-left.has-icons-right
                input.input.is-primary(
                  type='password', 
                  placeholder='Contraseña',
                  v-model="password",
                  @keyup.enter="loguearse"
                )
                span.icon.is-small.is-left
                  i.fas.fa-user
            .field
            div.has-text-centered
              button.button.is-primary(@click="loguearse()") Entrar
              br
              hr
              a.button.is-medium.is-danger
                span.icon.is-medium
                  i.fab.fa-google
                span Google
              | 
              a.button.is-medium.is-link
                span.icon.is-medium
                  i.fab.fa-facebook
                span Facebook
              | 
              a.button.is-medium.is-info
                span.icon.is-medium
                  i.fab.fa-twitter
                span Twitter
</template>

<script>
// import authServices from '@/services/auth'
import Loader from '@/components/shared/Loader.vue'
import ModalInfo from '@/components/shared/ModalInfo.vue'

export default {
  name: 'Login',
  components: { Loader, ModalInfo },
  data () {
    return {
      usuario: '',
      password: '',
      isLoading: false,
      modalStatus: false,
      contentModal: '',
      titleModal: '',
      modalNavBar: false,
      user: {}
    }
  },
  methods: {
    // loguearse () {
    //   this.isLoading = true
    //   authServices.verificacion(this.usuario, this.password)
    //     .then(res => {
    //       console.log(res)
    //       if (res.length > 0) {
    //         setTimeout(() => {
    //           this.user = res
    //           console.log(this.user[0])
    //           this.isLoading = false
    //           this.titleModal = 'Usuario Correcto'
    //           this.contentModal = `${this.usuario} ha iniciado sesión. 😎`
    //           this.modalStatus = true
    //           this.$store.commit('usuarioLogueado', this.user[0])
    //           this.entrarSistema()
    //         }, 1000)
    //       } else {
    //         setTimeout(() => {
    //           this.isLoading = false
    //           this.titleModal = 'Usuario Incorrecto'
    //           this.contentModal = 'El usuario no ha podido iniciar sessión, favor de revisar sus credenciales. 🙁'
    //           this.modalStatus = true
    //         }, 1000)
    //       }
    //     })
    // },
    // entrarSistema () {
    //   this.modalNavBar = true
    //   this.$store.commit('setlogin', this.modalNavBar)
    //   this.$router.push('Home')
    // },
    cerrarModal () {
      this.modalStatus = false
    }
  }
}
</script>

