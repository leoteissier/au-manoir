<template>
    <main id="bureau">
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" id="pere"></div>
    </main>
</template>

<script setup>

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
</style>