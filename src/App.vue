<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main id="cluedo">
      <nav data-aos="fade-down" data-aos-duration="1000">
          <router-link to="/bibliotheque" class="bibliotheque_link"></router-link>
          <router-link to="/bureau" class="bureau_link"></router-link>
          <router-link to="/cuisine" class="cuisine_link"></router-link>
          <router-link to="/" class="hall_link"></router-link>
          <router-link to="/salle-a-manger" class="salle_a_manger_link"></router-link>
          <router-link to="/salle-de-bain" class="salle_de_bain_link"></router-link>
          <router-link to="/salle-de-jeu" class="salle_de_jeu_link"></router-link>
          <router-link to="/salon" class="salon_link"></router-link>
      </nav>
      <router-view></router-view>
  </main>
</template>

<style scoped>
#cluedo{
    position: relative;
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
