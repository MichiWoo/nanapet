<template lang="pug">
  #app
    NavBar
    router-view
    Footer
</template>

<script>
import Home from '@/components/Home.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import NavBar from '@/components/layout/NavBar.vue'

import Firebase from 'firebase'
import config from '@/services/config'

Firebase.initializeApp(config)


export default {
  name: 'app',
  components: { Home, Header, Footer, NavBar },
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
  @import url('./framework/css/argon.css');
</style>
