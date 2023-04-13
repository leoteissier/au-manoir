<template>
    <main id="bibliotheque">
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="infermiere"></div>
        <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
            <div class="text" v-if="showSecondParagraph">
                <p class="text1">range des livres<br>
                    Capitaine, c’est à moi d’être interrogé et d’être accusé ? Une dame de mon âge, commettant un meurtre atroce.
                </p>
                <span class="continuer" v-if="showButton1" @click="showSecondParagraph = false; showThirdParagraph = true; showButton2 = true">continuer</span>
            </div>
            <div class="text" v-if="showThirdParagraph">
                <p class="text2">Écoutez, si une personne doit être accusée, ce serait son mauvais et jaloux frère aîné qui le désirait fortement, dirigez-vous sur cette piste ou bien, cherchez, mais ce n’est pas ici que vous trouverez la coupable… 
                </p>
                <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">continuer </span>
            </div>
            <div class="text" v-if="showFourthParagraph">
                  <p class="text3"> Je ne suis qu’une pauvre infirmière, qu'ai je bien pu faire pour mériter cela, je suis ici depuis le début et je m’occupe jour et nuit de la famille.</p>
                  <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false">Fouiller la salle</span>
            </div>
            <div class="text" v-if="livreOpen">
                <p class="text2">"Oh Capitaine, vous avez trouvez un livre avec du sang dessus, je pense que c’est le livre
                    de la coupable, mais a qui peux appartenir ce livre ?"
                </p>
            </div>
        </div>
        <div id="livre" @click="foundlivre"></div>
    </main>
</template>

<script setup>
import {ref} from "vue";

let showSecondParagraph = ref(true);
let showButton1 = ref(true);
let showThirdParagraph = ref(false);
let showButton2 = ref(false);
let showFourthParagraph = ref(false);
let showButton3 = ref(false);
let livreOpen = ref(false)

const foundlivre = () => {
    livreOpen.value = !livreOpen.value
    const livre = document.getElementById('livre');
    if (!livre.dataset.clicked) {
        livre.dataset.clicked = "true";
        livre.style.top = '50%';
        livre.style.left = '50%';
        livre.style.transform = "translate(-50%, -50%) scale(4)";
        livre.style.transition = 'all 1s';
    } else {
        livre.dataset.clicked = "";
        livre.style.top = '48%';
        livre.style.left = '55%';
        livre.style.transform = "";
    }
}
</script>

<style scoped>
#bibliotheque{
    background-image: url(/lieu/bibliotheque.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#infermiere{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background-image: url(/perso/infermiere.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
#livre{
    position: absolute;
    top: 48%;
    left: 55%;
    width: 25px;
    height: 25px;
    background-image: url(/indice/livre.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
}
</style>