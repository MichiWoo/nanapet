<template lang="pug">
  .modal.is-active
    .modal-background
    .modal-content
      .box
        h5.title {{ title }}
        p {{ content }}
        br
        .columns
          .column
            .level-right
              button.button.is-primary(@click="cerrarModal") Ok
      button.modal-close.is-large(aria-label='close' @click.prevent="cerrarModal")
</template>

<script>
  export default {
    name: 'ModalInfo',
    props: {
      title: '',
      content: ''
    },
    methods: {
      cerrarModal () {
        this.$emit('padre:close', false)
      }
    }
  }
</script>

