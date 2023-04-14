<template>
  <main id="salle_a_manger">
    <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="frere"></div>
    <div class="click" id="cordeFound" @click="openDiv" v-if="corde"></div>
    <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
        <div class="text" v-if="showSecondParagraph">
            <p class="text1">
                Tiens, tiens, on dirait que Columbo est de retour aux affaires. Si des accusations sont à mon encontre ?</p>
            <span class="continuer " v-if="showButton1" @click="showSecondParagraph = false; showThirdParagraph = true; showButton2 = true">continuer</span>
        </div>
        <div class="text" v-if="showThirdParagraph">
            <p class="text2">Bien sûr que oui, cette famille devait imploser depuis longtemps, et l’on disait qu’une jalousie existait entre mon frère et moi-même,
                croyez vous que je serai assez fou pour organiser son meurtre ?</p>
            <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">continuer</span>
        </div>
        <div class="text" v-if="showFourthParagraph">
            <p class="text3">Vous délirez mon Capitaine. Quant aux rumeurs sur le fait que j’aurais envoyé mon fils à ma place, c’est faux, vous me croyez capable d’effectuer cela ?
                Il était dans sa chambre tout au long de la soirée, je l’ai rejoint quelque temps après. Vous délirez mon Capitaine. </p>
            <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false; showButton3 = false; showSecondParagraph1 = true; showButton4 = true">continuer</span>
        </div>
        <div class="text" v-if="showSecondParagraph1">
            <p class="text1">Il était dans sa chambre tout au long de la soirée, je l’ai rejoint quelques temps après. Il pourra vous confirmer cet alibi si vous le voyez.</p>
            <span class="continuer " v-if="showButton4" @click="showSecondParagraph1 = false; showThirdParagraph2 = true; showButton5 = true">continuer</span>
        </div>
        <div class="text" v-if="showThirdParagraph2">
            <p class="text2">Mais ne cherchez pas ici, vous ne trouverez rien.</p>
            <span class="continuer" v-if="showButton5" @click="showThirdParagraph2 = false; showFourthParagraph3 = true; showButton6 = true">continuer</span>
        </div>
        <div class="text" v-if="showFourthParagraph3">
            <p class="text3">Pour moi, les problèmes ne justifient pas le meurtre, mais cette infirmière aurait peut-être profité du moment pour passer à l’action. Je ne sais pas vraiment ou donner de la tête après toute cette mascarade.</p>
            <span class="continuer" v-if="showButton6" @click="showFourthParagraph3 = false; showButton6 = false; corde = true">Fouiller la salle</span>
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
let showSecondParagraph1 = ref(false);
let showButton4 = ref(false);
let showThirdParagraph2 = ref(false);
let showButton5 = ref(false);
let showFourthParagraph3 = ref(false);
let showButton6 = ref(false); 
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