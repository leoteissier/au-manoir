<template>
  <main id="salon">
      <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="neveu"></div>
    <div class="click" id="indiceFound" @click="openDiv"></div>
    <div class="click" id="chandelierFound" @click="openDiv2" v-if="chandelier && indiceFound"></div>
    <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
      <div class="text" v-if="showSecondParagraph">
        <p class="text1">"Bienvenue Capitaine, on voit que vous prenez vos aises ici, je ne sais pas si mon oncle aurait apprécié cela.</p>
        <span class="continuer " v-if="showButton1" @click="showSecondParagraph = false; showThirdParagraph = true; showButton2 = true">continuer</span>
      </div>
      <div class="text" v-if="showThirdParagraph">
        <p class="text2"> Honnêtement, m’accuser de son meurtre ? C’est impossible, c’était quelqu’un que j'aimais énormément, en plus, tout le long de la soirée,
            je suis resté dans ma chambre à lire des livres, mon père m’a rejoint quelques heures après.</p>
        <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">continuer</span>
      </div>
      <div class="text" v-if="showFourthParagraph">
        <p class="text3">Malgré les différends que l’on a eux, cela ne justifie en aucun cas cet acte abominable, si une personne devait être arrêtée,
            c’est ma tante, elle devait récemment rembourser une dette, elle lui avait emprunté près de 500 000€.
            La solution plausible pour elle serait d’avoir choisi la simplicité, son associé dispose d’informations cruciales sur les étranges absences.
          </p>
        <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false; showFifthParagraph = true; showButton4 = true">continuer</span>
      </div>
        <div class="text" v-if="showFifthParagraph">
            <p class="text3">Creuser cette piste et essayer de vous renseigner là-dessus, mais de mon jeune âge, aurais - je eu le courage d’effectuer un acte de la sorte ?"</p>
            <span class="continuer" v-if="showButton4" @click="showFifthParagraph = false; chandelier = true">inspecter la salle</span>
        </div>
      <div data-aos="fade-right"  data-aos-delay="500" data-aos-duration="1000" class="text" v-if="showDiv">
        <p class="text3">Indice : vous remarquerez qu’un chandelier manque à l’appel…</p>
        <div id="indice" @click="openDiv"></div>
      </div>
      <div data-aos="fade-right"  data-aos-delay="500" data-aos-duration="1000" class="text" v-if="showDiv2">
        <p class="text3">Indice : vous retrouvez le chandelier au pied du poêle à bois si vous êtes attentif, la chandelle est complètement détruite et semble mouillée…</p>
        <div id="chandelier" @click="openDiv2"></div>
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
let showFifthParagraph = ref(false);
let showButton4 = ref(false);
let showDiv = ref(false);
let showDiv2 = ref(false);
let indiceFound = ref(false);
let chandelier = ref(false);

const openDiv = () => {
  showDiv.value = !showDiv.value;
  indiceFound.value = true;
};
const openDiv2 = () => {
  showDiv2.value = !showDiv2.value;
};
</script>

<style scoped>
#salon{
    background-image: url(/lieu/salon.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#neveu{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background-image: url(/perso/neveu.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#indiceFound{
  position: absolute;
  width: 100px;
  height: 100px;
  top: 10%;
  left: 48%;
}


#chandelierFound{
  position: absolute;
  width: 175px;
  height: 100px;
  bottom: 25%;
  left: 45%;
}
#chandelier{
  width: 150px;
  height: 100px;
  background-image: url(/arme/chandelier.png);
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}
.text3{
  display: flex;
  gap: 25px;
}

</style>