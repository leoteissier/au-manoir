<template>
  <main id="cuisine">
    <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="maitresse"></div>
    <div class="dialogue" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">

    <div class="text" v-if="showSecondParagraph">
      <p class="text1">
      Capitaine, c’est terrible ce qu’il nous arrive, allez-vous réussir à trouver le coupable ?
      </p>
        <span class="continuer" v-if="showButton1" @click="showSecondParagraph = false; showSecondParagraph1 = true; showButton4 = true">continuer</span>
        </div>
        <div class="text" v-if="showSecondParagraph1">
            <p class="text1">Vous lui avez probablement serré la main avant de venir me parler, et je n’ai pas d’informations sur cela, malheureusement mon mari et moi avions des problèmes sur le règlement d’une dette,</p>
            <span class="continuer" v-if="showButton4" @click="showSecondParagraph1 = false; showThirdParagraph = true; showButton2 = true">continuer</span>
        </div>
    <div class="text" v-if="showThirdParagraph">
      <p class="text2">mais jamais, je n’aurais fait ça, croyez-moi, le seul qui aurait pu faire quelque chose d’aussi atroce, c'est son père.
          Il a récemment perdu ses millions sur des paris sportifs et des parties de pokers, il était venu dernièrement demander à emprunter des bagues et des
          objets de notre bibliothèque, pour se rembourser. </p>
      <span class="continuer" v-if="showButton2" @click="showThirdParagraph = false; showFourthParagraph = true; showButton3 = true">continuer </span>
    </div>
    <div class="text" v-if="showFourthParagraph">
      <p class="text3"> Mon mari l’a empêché de faire de la sorte et lui a dit de rentrer chez lui. Je ne suis qu’une veuve accusant un beau-père malsain et malhonnête.</p>
      <span class="continuer" v-if="showButton3" @click="showFourthParagraph = false; showButton3 = false">Fouiller la salle</span>
    </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from "vue";
  // import Typed from "typed.js";

  // define the variables
  let showSecondParagraph = ref(true);
  let showButton1 = ref(true);
  let showSecondParagraph1 = ref(false);
let showButton4 = ref(false);
  let showThirdParagraph = ref(false);
  let showButton2 = ref(false);
  let showFourthParagraph = ref(false);
  let showButton3 = ref(false);

</script>

<style scoped>
#cuisine {
  background-image: url(/lieu/cuisine.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
#maitresse {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 400px;
  background-image: url(/perso/maitresse.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>