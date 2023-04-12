<template>
  <main id="cuisine">
      <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="maitresse"></div>
  </main>
</template>

<script setup>

</script>

<style scoped>
#cuisine {
  background-image: url(/lieu/cuisine.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
#maitresse {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 400px;
  background-image: url(/perso/maitresse.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>