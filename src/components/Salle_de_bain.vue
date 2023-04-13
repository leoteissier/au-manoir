<template>
  <main id="salle_de_bain">
      <div id="dent" @click="dentFound"></div>
      <div id="baignoire" @click="traceFound"></div>
      <div class="dialogue" v-if="showFirstParagraph">
          <div class="text">
              <p>Une dent, qu'est quelle fait la ?</p>
          </div>
      </div>
  </main>
</template>

<script setup>
import {ref} from "vue";

let showFirstParagraph = ref(false);
// const traceFound = () => {
//     // deplacement de la dent
//     const dent = document.getElementById('trace');
//     trace.style.bottom = '366px';
//     trace.style.left = '129px';
//     // affichage de le pop-up
// }
const dentFound = () => {
    // deplacement de la dent
    const dent = document.getElementById('dent');
    if (!dent.dataset.clicked) {
        showFirstParagraph.value = true;
        dent.dataset.clicked = "true";
        dent.style.top = '50%';
        dent.style.left = '50%';
        dent.style.transform = "translate(-50%, -50%) scale(4)";
        dent.style.transition = 'all 1s';
    } else {
        showFirstParagraph.value = false;
        dent.dataset.clicked = "";
        dent.style.top = '58%';
        dent.style.left = '10%';
        dent.style.transform = "";
    }
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
    top: 58%;
    left: 10%;
    width: 30px;
    height: 30px;
    background-image: url(/indice/dent.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    /*background-color: red;*/
}
#baignoire{
    /*background-color: red;*/
    position: absolute;
    bottom: 0;
    right: 0;
    width: 464px;
    height: 343px;
}

.img img{
    width:100px;
}

.text3{
    display: flex;
    gap: 25px;
}
</style>