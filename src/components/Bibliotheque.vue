<template>
    <main id="bibliotheque">
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="infermiere"></div>
    </main>
</template>

<script setup>

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
</style>