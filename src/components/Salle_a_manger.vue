<template>
  <main id="salle_a_manger">
    <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="frere"></div>
    <div class="click" id="cordeFound" @click="openDiv" v-if="corde"></div>
    <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
        <div class="text" v-if="showSecondParagraph">
            <p class="text1">"Tiens, tiens, on dirait que Columbo est de retour, dans tous les cas, il est important de vous dire que le suspect est assez logique, son infirmière, à peine payée, se plaignait tout le temps.</p>
            <span class="continuer " v-if="showButton1" @click="showSecondParagraph = false; showThirdParagraph = true; showButton2 = true">continuer</span>
        </div>
        <div class="text" v-if="showThirdParagraph">
            <p class="text2">Mon fils ? Il est innocent, lorsque nous avons retrouvé le cadavre, il était avec moi au salon en train d’allumer un feu.</p>
            <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">continuer</span>
        </div>
        <div class="text" v-if="showFourthParagraph">
            <p class="text3">Cette dernière n'était plus à l'aise au sein de la famille, elle lui volait des affaires, ce malheureux s'en est rendu compte à force, elle devait faire quelque chose, c'est elle !"</p>
            <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false; showButton3 = false; corde = true">Fouiller la salle</span>
        </div>
        <div data-aos="fade-right"  data-aos-delay="500" data-aos-duration="1000" class="text" v-if="showDiv">
            <p class="text3">Indice : Vous trouvez une corde derrière le tableau. Elle paraît effritée et abîmée.</p>
            <div id="corde" @click="openDiv"></div>
        </div>
    </div>
  </main>
</template>

<script setup>

import { ref } from 'vue'

let showSecondParagraph = ref(true);
let showButton1 = ref(true);
let showThirdParagraph = ref(false);
let showButton2 = ref(false);
let showFourthParagraph = ref(false);
let showButton3 = ref(false); 
let corde = ref(false);
let showDiv = ref(false);

const openDiv = () => {
    showDiv.value = !showDiv.value;
};



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

#cordeFound{
    position: absolute;
    width: 100px;
    height: 100px;
    top: 25%;
    left: 72%;
}
#corde{
    width: 150px;
    height: 100px;
    background-image: url(/arme/rope.png);
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
}
.text3{
    display: flex;
    gap: 25px;
}
</style>