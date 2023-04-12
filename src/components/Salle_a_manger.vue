<template>
  <main id="salle_a_manger">
      <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="frere"></div>
  </main>
</template>

<script setup>

</script>

<style scoped>
#salle_a_manger{
    background-image: url(/lieu/salle_a_manger.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#frere{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background-image: url(/perso/frere.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>