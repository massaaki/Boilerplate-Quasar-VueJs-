<template>
  <div id="lp">
    <h1 class="row justify-center">Landing page</h1>

    <div class="q-pa-md">
      <q-parallax>
        <template v-slot:media>
          <img src="../../assets/bg.jpg" />
        </template>
        <!-- <template v-slot:media>
          <video
            class="videoLayout"
            poster="https://cdn.quasar.dev/img/polina.jpg"
            autoplay
            loop
            muted
          >
            <source type="video/webm" src="https://cdn.quasar.dev/img/polina.webm" />
            <source type="video/mp4" src="https://cdn.quasar.dev/img/polina.mp4" />
          </video>
        </template>-->

        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: (scope.percentScrolled * 60) + '%',
              left: 0,
              right: 0
            }"
          >
            <div class="text-h3 text-white text-center">Quasar {{ $q.version }} boilerplate</div>
            <div class="text-h6 text-grey-3 text-center">By Massaaki</div>
          </div>
        </template>
      </q-parallax>
    </div>

    <div class="row justify-center">
      <div class="animated bounce infinite">
        <img src="../../assets/robo-quasar-logo-full.svg" />
      </div>
    </div>
    <div class="row justify-center">
      <q-btn
        color="primary"
        class="full-width q-mt-md"
        style="max-width: 400px"
        :to="{name: 'login'}"
      >Login</q-btn>
    </div>
    <div class="row justify-center q-mt-md">ou</div>
    <div class="row justify-center">
      <q-btn
        color="positive"
        class="full-width q-mt-md"
        style="max-width: 400px"
        :to="{name: 'register'}"
      >Registrar</q-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#lp {
  min-height: 200vh;
}
.animated {
  animation-duration: 1s;
}
img {
  max-width: 80px;
}
.videoLayout {
  width: 100%;
}
</style>