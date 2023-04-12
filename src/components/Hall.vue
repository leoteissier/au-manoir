<template>
  <main id="hall">
    <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="majordome"></div>
  </main>
</template>

<script setup>

</script>

<style scoped>
#hall{
    position: relative;
    background-image: url(/lieu/hall.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#majordome{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background-image: url(/perso/majordome.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>