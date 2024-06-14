<template>
  <div class="py-16 overflow-hidden">
    <v-container>
      <v-row>
        <v-col 
          cols="12" 
          lg="6"
          md="12"
          class="d-flex aling-center">
            <div class="mt-8 mt-lg-0">
              <span
                class="text-h6 d-flex align-center gap-2"
                data-aos="fade-up"
                data-aos-duration="400">
                <RocketIcon 
                  size="18"
                  class="text-success"/>
                  Sistema Centralizador de Sistemas
              </span>
              <h1
                class="bannerTitle pt-5 font-weight-bold"
                data-aos="fade-up"
                data-aos-duration="500">
                Centraliza y simplifica: 
                <span class="text-success">Integra todos los sistemas</span> 
                Punto de control
              </h1>
              <p 
              class="pt-8 pb-6 text-h5 font-weight-regular" 
              data-aos="fade-up" 
              data-aos-duration="800">
                Sistema moderno desarrollado por 
                <span class="text-success"><b>Ronald Titirico</b></span> 
                <!-- con temas personalizables y una interfaz de usuario amigable. -->
              </p>
              <div 
                class="mt-6 d-sm-flex gap-3"
                data-aos="fade-up" 
                data-aos-duration="800">
                  <!-- <v-btn 
                    href="/auth/login" 
                    color="success" 
                    size="large" 
                    class="m-btn-full btn-custom-lg" 
                    flat
                  >Ingresar</v-btn> -->
                </div>
            </div>
        </v-col>
        <v-col 
          cols="12" 
          md="6" 
          class="d-none d-lg-block">
            <div class="bannerSlider bg-lightprimary">
              <div class="d-flex flex-row">
                <div class="rounded-md">
                  <!-- animateUp -->
                  <div class="animateUp">
                    <img src="@/assets/images/landingpage/bannerimg1.svg" />
                  </div>
                  <div class="animateUp">
                    <img src="@/assets/images/landingpage/bannerimg1.svg" />
                  </div>
                </div>
                <div class="rounded-md">
                  <div class="animateDown">
                    <!-- <img src="@/assets/images/landingpage/bannerimg2.svg" /> -->
                    <LogosNavegador/>
                  </div>
                  <div class="animateDown">
                    <!-- <img src="@/assets/images/landingpage/bannerimg2.svg" /> -->
                    <LogosNavegador/>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script setup lang="ts">
import { RocketIcon } from 'vue-tabler-icons';
import LogosNavegador from "./LogosMinisterio.vue";

</script>
<style lang="scss" scoped>
.v-container {
    max-width: 1200px !important;
}

</style>
