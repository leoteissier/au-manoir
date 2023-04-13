<template>
    <main id="bureau">
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="pere"></div>
        <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
            <div class="text" v-if="showSecondParagraph">
                <p class="text1">Tiens donc, Capitaine ! Quelle joie de vous voir.</p>
                <span class="continuer" v-if="showButton1" @click="showSecondParagraph = false; showThirdParagraph = true; showButton2 = true">continuer</span>
            </div>
            <div class="text" v-if="showThirdParagraph">
                <p class="text2">Mon fils, c’est de mon fils que l’on parle dans cette affaire, et vous, vous vous pointez seulement 24h après cette boucherie, honnêtement si vous seriez arrivé quelques heures après la découverte du corps de mon fils, vous auriez peut-être pu attraper le meurtrier.</p>
                <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">Fouiller la salle</span>
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