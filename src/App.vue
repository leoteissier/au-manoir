<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted, ref} from "vue";

const scenario = ref(true);
const closeScenario = () => {
    scenario.value = false;
    console.log(scenario.value);
};

const soundActivated = ref(true);
const audio = new Audio("/Cluedo.mp3"); // Remplacer par le chemin de votre fichier audio
audio.loop = true; // Activer la lecture en boucle du son

let sonActif = ref(true);
let sonNonActif = ref(false);
function toggleSound() {
    if (soundActivated.value === true) {
        audio.play(); // Joue le son
        sonNonActif.value = true;
        sonActif.value = false;
    } else {
        audio.pause(); // Pause le son
        sonActif.value = true;
        sonNonActif.value = false;
    }
    soundActivated.value = !soundActivated.value; // Inverse l'état du son activé/désactivé
}


</script>

<template>
    <main id="cluedo">
        <div id="scenario" v-if="scenario">
            <h1 data-aos="fade-down" data-aos-offset="200" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <span @click="closeScenario" class="click">MARDI NOIR AU MANOIR</span>
            </h1>
            <h2 data-aos="fade-down" data-aos-offset="200" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
                Vous êtes un <span>enquêteur</span> chargé de résoudre une enquête qui a eu lieu dans un manoir. Le <span>majordome</span> de la <span>victime</span> vous interpelle dès le début de l’histoire et vous explique que le meurtre a eu lieu et que <span>six personnes</span> se trouvaient à l’intérieur et cinq d’entre elles détiennent des <span>clés capitales</span> pour faire avancer l’enquête.
                <br><br>
                En effet, la <span>victime</span> est un riche milliardaire possédant de nombreuses terres. Il avait réuni les principaux membres de sa <span>famille</span>, qu’il considérait comme son troisième poumon. Dans un premier temps, son <span>neveu</span> qui avait été déshérité quelques mois plus tôt après un incident auprès de la famille. Puis, un <span>associé</span> d’une de ces entreprises, qui à découvert des transactions suspectes quelques jours avant l’invitation. Son <span>frère aîné</span>  était aussi de la partie, et a toujours été jaloux de la réussite de son frère. Sa <span>femme</span> était également présente, et était contrainte à rembourser son mari, mais manquait de fonds. Enfin, son <span>infirmière personnelle</span>  qui le soignait commençait à ne plus se sentir à l’aise au sein de sa famille, puis pour terminer son <span>père</span> qui était endetté financièrement après des placements sur des paris sportifs.
                <br><br>
                Votre tâche est donc d’étudier les différentes pistes, afin de dénicher et de retrouver qui à tué la victime, dans quelle pièce et avec quelle arme.
            </h2>
            <h1 data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <span @click="closeScenario" class="click" id="ready" >Êtes-vous prêt ?</span>
            </h1>
            <div id="nom">
                <p>Pablo MOURATO / Gregory LAISSUS / Léo TEISSIER / Louis PEYRARD</p>
            </div>
        </div>
        <div id="son">
            <p class="click" @click="toggleSound" v-if="sonActif">Activer le son</p>
            <p class="click" @click="toggleSound" v-if="sonNonActif">désactiver le son</p>
        </div>
        <nav v-if="!scenario" data-aos="fade-down" data-aos-duration="1000">
            <router-link to="/bibliotheque" class="bibliotheque_link"></router-link>
            <router-link to="/bureau" class="bureau_link"></router-link>
            <router-link to="/cuisine" class="cuisine_link"></router-link>
            <router-link to="/" class="hall_link"></router-link>
            <router-link to="/salle-a-manger" class="salle_a_manger_link"></router-link>
            <router-link to="/salle-de-bain" class="salle_de_bain_link"></router-link>
            <router-link to="/salle-de-jeu" class="salle_de_jeu_link"></router-link>
            <router-link to="/salon" class="salon_link"></router-link>
        </nav>
        <router-view v-if="!scenario"></router-view>
    </main>
</template>
<!--<template>-->
<!--    <main id="cluedo">-->
<!--        <nav>-->
<!--            <div class="bibliotheque_link" @click="choix = 'Bureau'"></div>-->
<!--            <div class="bureau_link" @click="choix = 'Bureau'"></div>-->
<!--            <div class="cuisine_link" @click="choix = 'Bureau'"></div>-->
<!--            <div class="hall_link" @click="choix = 'Hall'"></div>-->
<!--            <div class="salle_a_manger_link" @click="choix = 'Bureau'"></div>-->
<!--            <div class="salle_de_bain_link" @click="choix = 'Bureau'"></div>-->
<!--            <div class="salle_de_jeu_link" @click="choix = 'Bureau'"></div>-->
<!--            <div class="salon_link" @click="choix = 'Bureau'"></div>-->
<!--        </nav>-->
<!--        <component :is="selectComponent" />-->
<!--    </main>-->
<!--</template>-->

<style scoped>
#cluedo{
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
#nom{
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    z-index: 999;
}
span{
    color: #FFC700;
}

#ready{
    font-size: 1.5em;
    font-weight: bold;
}

#scenario{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0);
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    padding: 3em;
}
#scenario h2{
    width: 90%;
    text-align: left;
    font-size: 1.7em;
}
#scenario h1{
    text-align: left;
}
#son{
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
nav{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background-image: url(/map.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 10;
}
.bibliotheque_link{
    position: absolute;
    top: 35px;
    left: 108px;
    width: 82px;
    height: 60px;
    /*background-color: red;*/
}
.bureau_link{
    position: absolute;
    top: 239px;
    left: 206px;
    width: 73px;
    height: 42px;
    /*background-color: red;*/
}
.cuisine_link{
    position: absolute;
    top: 23px;
    left: 20px;
    width: 61px;
    height: 60px;
    /*background-color: red;*/
}
.hall_link{
    position: absolute;
    top: 208px;
    left: 120px;
    width: 58px;
    height: 72px;
    /*background-color: red;*/
}
.salle_a_manger_link{
    position: absolute;
    top: 218px;
    left: 18px;
    width: 74px;
    height: 63px;
    /*background-color: red;*/
}
.salle_de_bain_link{
    position: absolute;
    top: 106px;
    left: 19px;
    width: 86px;
    height: 77px;
    /*background-color: red;*/
}
.salle_de_jeu_link{
    position: absolute;
    top: 99px;
    left: 216px;
    width: 64px;
    height: 115px;
    /*background-color: red;*/
}
.salon_link{
    position: absolute;
    top: 20px;
    left: 216px;
    width: 65px;
    height: 47px;
    /*background-color: red;*/
}
</style>
