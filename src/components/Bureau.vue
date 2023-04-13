<template>
    <main id="bureau">
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="pere"></div>
        <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
        <div class="text" v-if="showSecondParagraph">
            <p class="text1">semble fouiller dans le bureau<br>
            Capitaine, j’étais en train de ranger le bureau, mais enfin vous voilà.</p>
            <span class="continuer " v-if="showButton1" @click="showSecondParagraph = false; showThirdParagraph = true; showButton2 = true">continuer</span>
        </div>
        <div class="text" v-if="showThirdParagraph">
            <p class="text2">Le meurtre de mon fils doit avoir une enquête rapide, rendez vous compte à quel point cela est grave ?</p>
            <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">continuer</span>
        </div>
        <div class="text" v-if="showFourthParagraph">
            <p class="text3">Il vous donnait des pots de vin afin de protéger le manoir en effectuant des rondes régulières. </p>
            <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false; showButton3 = false; showSecondParagraph1 = true; showButton4 = true">continuer</span>
        </div>
        <div class="text" v-if="showSecondParagraph1">
            <p class="text1">Comment avez vous pu venir seulement 24h après que le meurtre ait été commis, après tout ce que mon fils a fait pour vous.</p>
            <span class="continuer " v-if="showButton4" @click="showSecondParagraph1 = false; showThirdParagraph2 = true; showButton5 = true">continuer</span>
        </div>
        <div class="text" v-if="showThirdParagraph2">
            <p class="text2">Vous ne méritez pas ce badge présent sur votre uniforme, sortez de cette pièce !</p>
            <span class="continuer" v-if="showButton5" @click="showThirdParagraph2 = false; showFourthParagraph3 = true; showButton6 = true">continuer</span>
        </div>
        <div class="text" v-if="showFourthParagraph3">
            <p class="text3">Et vous osez m’accuser, vous savez les personnes derrière ces accusations ne valent rien, ils s’amusent à balancer n’importe qui pour se sortir de la prison. Cette affaire sera bientôt au tribunal, sachez le !</p>
            <span class="continuer" v-if="showButton6" @click="showFourthParagraph3 = false; showButton6 = false">Fouiller la salle</span>
        </div>
            <div class="text" v-if="armeOpen">
                <p class="text2">Oh Vous avez trouvez un couteau, a qui il pourrait bien appartenir ?</p>
            </div>
        </div>
        <div id="arme" @click="foundArme">
            <div id="knife" v-if="armeOpen"></div>
        </div>
    </main>

</template>

<script setup>
import { ref } from "vue";
// import Typed from "typed.js";

// define the variables
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
let armeOpen = ref(false);
// define the function to open the form
const foundArme = () => {
    armeOpen.value = !armeOpen.value
    const arme = document.getElementById('arme');
    if (!arme.dataset.clicked) {
        arme.dataset.clicked = "true";
        arme.style.transform = "translate(-50%, -50%) scale(4)";
        arme.style.transition = 'all 1s';
    } else {
        arme.dataset.clicked = "";
        arme.style.transform = "";
    }
}

// onMounted(() => {
//     // initialise l'animation pour le premier paragraphe
//     const typed1 = new Typed('.text1', {
//         strings: ["Bienvenue Capitaine Brown, merci de vous être libéré pour nous permettre d’éclaircir l’affaire. Les personnes présentes lors du meurtre sont tous revenus aujourd’hui, dans le but de se faire interroger pour nous permettre d’avoir des informations sur ce malheur."],
//         typeSpeed: 25,
//         showCursor: false,
//         // onComplete: () => {
//         //     // affiche le bouton "continuer" pour passer à la suite
//         //     showButton1.value = true;
//         //     console.log(showButton1.value);
//         // },
//     });
//
//     // initialise l'animation pour le deuxième paragraphe
//     const typed2 = new Typed('.text2', {
//         strings: ["Le corps a été retrouvé et je crains qu’il ne soit encore dans le manoir, soyez prudent avec ces meurtriers, l’un d’entre eux est coupable, c’est certain. Je regrette beaucoup de ne pas avoir été présent mardi, cela ne se serait jamais produit en ma présence. Pour le bien de la famille, essayez de tout faire pour résoudre cette enquête."],
//         typeSpeed: 25,
//         showCursor: false,
//         // onComplete: () => {
//         //     // affiche le bouton "continuer" pour passer à la suite
//         //     showButton2.value = true;
//         //     console.log(showButton2.value);
//         // },
//     });
// });
</script>

<style scoped>
#bureau{
    background-image: url(/lieu/bureau.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#pere{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background-image: url(/perso/pere.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
#arme{
    width: 20%;
    height: 5%;
    position: absolute;
    top: 75%;
    left: 80%;
    transform: rotate(35deg);
    cursor: pointer;
}
#knife{
    width: 80px;
    height: 80px;
    background-image: url(/arme/knife.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>