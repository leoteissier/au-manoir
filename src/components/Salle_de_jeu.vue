<template>
  <main id="salle_de_jeu">
      <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="associe"></div>
  </main>
</template>

<script setup>

</script>

<style scoped>
#salle_de_jeu{
    background-image: url(/lieu/salle_de_jeu.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#associe{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background-image: url(/perso/associe.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>