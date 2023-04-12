<template>
    <main id="hall">
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="majordome" v-if="!tueur"></div>
        <div class="click" id="majordome" @click="openForm" v-if="tueur"></div>
        <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
            <div class="text" v-if="showSecondParagraph">
                <p class="text1">"Bienvenue Capitaine Brown, merci de vous être libéré pour nous permettre d’éclaircir l’affaire. Les personnes présentes lors du meurtre sont tous revenus aujourd’hui, dans le but de se faire interroger pour nous permettre d’avoir des informations sur ce malheur.</p>
                <span class="continuer" v-if="showButton1" @click="showSecondParagraph = false; showThirdParagraph = true; showButton2 = true"> continuer 1</span>
            </div>
            <div class="text" v-if="showThirdParagraph">
                <p class="text2">Le corps a été retrouvé et je crains qu’il ne soit encore dans le manoir, soyez prudent avec ces meurtriers, l’un d’entre eux est coupable, c’est certain. Je regrette beaucoup de ne pas avoir été présent mardi, cela ne se serait jamais produit en ma présence. Pour le bien de la famille, essayez de tout faire pour résoudre cette enquête.</p>
                <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true"> continuer 2</span>
            </div>
            <div class="text" v-if="showFourthParagraph">
                <p class="text3">Je vous souhaite bonne chance Capitaine Brown, je vous laisse maintenant vous occuper de cette affaire. Et quand vous aurez trouvé le tueur venez me voir pour finir votre enquête."</p>
                <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false; showButton3 = false; tueur = true"> continuer 3</span>
            </div>
            <div class="text" v-if="victoire">
                <p class="text3">"Bien joué Capitaine Brown, vous avez résolu cette affaire. Je vous remercie de votre aide."</p>
            </div>
        </div>
        <div id="formTueur" v-if="showForm">
            <form @submit.prevent="checkValues">
                <label for="tueur">Tueur:</label>
                <input type="text" id="tueur" name="teur" v-model="tueurValue">
                <label for="arme">Arme:</label>
                <input type="text" id="arme" name="arme" v-model="armeValue">
                <label for="lieu">Lieu:</label>
                <input type="text" id="lieu" name="lieu" v-model="lieuValue">
                <input type="submit" value="Envoyer">
            </form>
        </div>
    </main>
</template>

<script setup>
import {onMounted, ref, watchEffect} from "vue";
// import Typed from "typed.js";

// define the variables
let showSecondParagraph = ref(true);
let showButton1 = ref(true);
let showThirdParagraph = ref(false);
let showButton2 = ref(false);
let showFourthParagraph = ref(false);
let showButton3 = ref(false);
let tueur = ref(false);
let showForm = ref(false);
const tueurValue = ref("");
const armeValue = ref("");
const lieuValue = ref("");
let victoire = ref(false);
// define the function to open the form
const openForm = () => {
    if (victoire.value) {
        return;
    }
    showForm.value = !showForm.value;
};


function checkValues() {
    if (
        tueurValue.value.toLowerCase() === "camelien" &&
        armeValue.value.toLowerCase() === "poignard" &&
        lieuValue.value.toLowerCase() === "bibliotheque"
    ) {
        showForm.value = false;
        victoire.value = true;
    }
}

// retrieve the values from local storage and initialize the variables
onMounted(() => {
    showSecondParagraph.value = localStorage.getItem('showSecondParagraph') === 'true';
    showButton1.value = localStorage.getItem('showButton1') === 'true';
    showThirdParagraph.value = localStorage.getItem('showThirdParagraph') === 'true';
    showButton2.value = localStorage.getItem('showButton2') === 'true';
    showFourthParagraph.value = localStorage.getItem('showFourthParagraph') === 'true';
    showButton3.value = localStorage.getItem('showButton3') === 'true';
    tueur.value = localStorage.getItem('tueur') === 'true';
    console.log(tueur.value);
});

// store the values in local storage when they change
watchEffect(() => {
    localStorage.setItem('showSecondParagraph', showSecondParagraph.value.toString());
    localStorage.setItem('showButton1', showButton1.value.toString());
    localStorage.setItem('showThirdParagraph', showThirdParagraph.value.toString());
    localStorage.setItem('showButton2', showButton2.value.toString());
    localStorage.setItem('showFourthParagraph', showFourthParagraph.value.toString());
    localStorage.setItem('showButton3', showButton3.value.toString());
    localStorage.setItem('tueur', tueur.value.toString());
    console.log(tueur.value);
});

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
#hall{
    position: relative;
    background-image: url(/lieu/hall.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
#majordome{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background-image: url(/perso/majordome.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
#formTueur{
    position: absolute;
    top: 40%;
    left: 40%;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
#formTueur input{
    width: 100%;
    height: 20px;
    border: none;
    margin: 5px 0;
}
#formTueur label{
    color: white;
}
#formTueur input[type="submit"]{
    width: 80px;
    height: 25px;
    margin-top: 10px;
    background-color: #f5f5f5;
    border: none;
    cursor: pointer;
}
#formTueur input[type="submit"]:hover{
    background-color: #e5e5e5;
}
#victoire{
    position: absolute;
    top: 40%;
    left: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 20%;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    color: white;
}
</style>