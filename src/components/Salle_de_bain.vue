<template>
  <main id="salle_de_bain">
      <div id="dent" @click="dentFound"></div>
  </main>
</template>

<script setup>
const dentFound = () => {
    // deplacement de la dent
    const dent = document.getElementById('dent');
    dent.style.bottom = '366px';
    dent.style.left = '129px';
    // affichage de la pop-up
}
</script>

<style scoped>
#salle_de_bain{
    position: relative;
    background-image: url(/lieu/salle_de_bain.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#dent{
    position: absolute;
    bottom: 41%;
    left: 10%;
    width: 10px;
    height: 10px;
    background-image: url(/indices/dent.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    /*background-color: red;*/
}
</style>