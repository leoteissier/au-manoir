<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";

const scenario = ref(true);
const closeScenario = () => {
    scenario.value = false;
    console.log(scenario.value);
};

</script>
<!--<script>-->
<!--import Hall from "./components/Hall.vue";-->
<!--import Bureau from "./components/Bureau.vue";-->
<!--export default {-->
<!--    name: 'App',-->
<!--    components: {-->
<!--        Hall,-->
<!--        Bureau-->
<!--    },-->
<!--    data() {-->
<!--        return {-->
<!--            scenario : true,-->
<!--            choix: 'Hall',-->
<!--            isActive: 'Hall',-->
<!--            composants: [-->
<!--                'Hall',-->
<!--                'Bureau',-->
<!--            ],-->
<!--            show: true,-->
<!--            showNavBar: false,-->
<!--        }-->
<!--    },-->
<!--    computed: {-->
<!--        selectComponent() {-->
<!--            return this.composants.find((component) => component === this.choix)-->
<!--        },-->
<!--    },-->
<!--}-->
<!--</script>-->

<template>
  <main id="cluedo">
      <div id="scenario" v-if="scenario">
          <h1 data-aos="fade-down"  data-aos-offset="200" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
              Vous vous retrouvez dans la peau d’un enquêteur qui doit résoudre le meurtre d’une personne.
              Le but final du jeu est de deviner qui à <span>tué cette personne</span>, avec <span>quelle arme</span> et dans <span>quelle pièce</span>.
              Trois champs de saisies seront disponibles à la fin du jeu, et si ces derniers sont bons, l’ enquête sera accomplie.
          </h1>
          <h1 data-aos="fade-down"  data-aos-offset="200" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <span @click="closeScenario" class="click">Êtes-vous prêt ?</span>
          </h1>
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
    align-items: center;
}
#scenario h1{
    width: 50%;
    text-align: center;
}
#scenario span{
    color: #FFC300;
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
