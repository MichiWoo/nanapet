<template lang="pug">
  section.hero.is-primary
    .hero-head
      .container.has-text-centered
        h1.title NanaPet
        small v. 1.0.0
    .hero-body
      .container.has-text-centered
        h2.subtitle Aplicación para el cuidado de las mascotas 🐶
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="css">
  .hero.is-primary {
    padding: 25px 0;
  }

  .hero-body {
    padding: 1rem 1.5rem;
  }
  
</style>


