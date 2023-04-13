<template>
  <main id="salle_de_bain">
      <div id="dent" @click="dentFound"></div>
      <div id="baignoire"></div>
      <div id="sang" @click="sangFound"></div>
      <div class="dialogue_perso">
          <div class="text"  v-if="showFirstParagraph">
              <p>Une dent, qu'est quelle fait la ?</p>
          </div>
          <div class="text" v-if="showSecondParagraph">
              <p>Du sang, à qui il peut appartenir ?</p>
          </div>
      </div>
  </main>
</template>

<script setup>
import {ref} from "vue";

let showFirstParagraph = ref(false);
let showSecondParagraph = ref(false);
const sangFound = () => {
    // deplacement de la dent
    const sang = document.getElementById('sang');
    if (!sang.dataset.clicked) {
        showFirstParagraph.value = true;
        sang.dataset.clicked = "true";
        sang.style.bottom = '50%';
        sang.style.right = '50%';
        sang.style.transform = "translate(-50%, -50%) scale(4)";
        sang.style.transition = 'all 1s';
    } else {
        showFirstParagraph.value = false;
        sang.dataset.clicked = "";
        sang.style.bottom = '20%';
        sang.style.right = '10%';
        sang.style.transform = "";
    }
}
const dentFound = () => {
    // deplacement de la dent
    const dent = document.getElementById('dent');
    if (!dent.dataset.clicked) {
        showSecondParagraph.value = true;
        dent.dataset.clicked = "true";
        dent.style.top = '50%';
        dent.style.left = '50%';
        dent.style.transform = "translate(-50%, -50%) scale(4)";
        dent.style.transition = 'all 1s';
    } else {
        showSecondParagraph.value = false;
        dent.dataset.clicked = "";
        dent.style.top = '60%';
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
    top: 60%;
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
#sang{
    position: absolute;
    bottom: 20%;
    right: 10%;
    width: 50px;
    height: 50px;
    background-image: url(/indice/sang.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    /*background-color: red;*/
}
.img img{
    width:100px;
}
.dialogue_perso{
    position: absolute;
    bottom: 20%;
    left: 40%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text3{
    display: flex;
    gap: 25px;
}
</style>