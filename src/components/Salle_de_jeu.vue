<template>
  <main id="salle_de_jeu">
    <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="associe"></div>
    <div class="click" id="associe" @click="openDiv" v-if="tueur"></div>
    <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
        <div class="text" v-if="showSecondParagraph">
            <p class="text1">
                Capitaine, il serait temps, c’est maintenant que vous apparaissez, dois-je vous rappeler que les dernières heures ont vu mon associé disparaître.</p>
            <span class="continuer" v-if="showButton1" @click="showSecondParagraph = false; showSecondParagraph1 = true; showButton4 = true">continuer</span>
        </div>
        <div class="text" v-if="showSecondParagraph1">
            <p class="text1">Cependant, je dois vous faire une remarque très importante et je l’espère, ce meurtre, doit être résolu au plus vite, pas comme la découverte de
                transactions suspectes dont mon très cher associé, profitait sans que vous le voyez. Il vous payait en pots de vins ou ?</p>
            <span class="continuer" v-if="showButton4" @click="showSecondParagraph1 = false; showThirdParagraph = true; showButton2 = true">continuer</span>
        </div>
        <div class="text" v-if="showThirdParagraph">
            <p class="text2">Si je peux vous fournir quelques informations, ces derniers jours, sa femme a été quelques fois aperçue en ville près de magasins
                vendant des armes, et surtout en pleine discussion avec des individus malsains, connus du grand banditisme.</p>
            <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">continuer</span>
        </div>
        <div class="text" v-if="showFourthParagraph">
            <p class="text3">Ces derniers temps, une histoire d’argent était au cœur des disputes. Elle n’a probablement pas eu accès à l’argent nécessaire
                et s’est retrouvée en plein milieu d’un dilemme, en choisissant la voie la plus sombre…</p>
            <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false; showButton3 = false; tueur = true">Fouiller la salle</span>
        </div>
        <div class="text" v-if="showDiv">
            <p class="text3"> Indice : vous remarquez que l'associé de la victime a dans sa poche, une clé anglaise, et qu’il possède des rougeurs au mains, vous faîtes comme si vous n'avez rien vu. </p>
        </div>
    </div>
  </main>
</template>
<script setup>

import { ref } from 'vue'

let showSecondParagraph = ref(true);
let showButton1 = ref(true);
let showSecondParagraph1 = ref(false);
let showButton4 = ref(false);
let showThirdParagraph = ref(false);
let showButton2 = ref(false);
let showFourthParagraph = ref(false);
let showButton3 = ref(false);
let showDiv = ref(false);
let tueur = ref(false);

const openDiv = () => {
    showDiv.value = !showDiv.value;
};

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