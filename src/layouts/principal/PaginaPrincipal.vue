<template>
  <v-locale-provider> 
      <v-app
          :theme="personalizador.accionDelTema"
          :class="[
              personalizador.accionDelTema,
              personalizador.minimizarBarraLateral ? 'mini-sidebar' : '',
              personalizador.setDisenioHorizontal ? 'horizontalLayout' : 'verticalLayout',
              personalizador.setBordeDeLaTarjeta ? 'cardBordered' : ''
          ]"
      >
        <v-navigation-drawer 
          app 
          temporary 
          elevation="10" 
          location="right" 
          v-model="personalizador.cajaPersonalizada" 
          width="320">
            <Personalizador />
        </v-navigation-drawer>
       <VerticalSidebar v-if="!personalizador.setDisenioHorizontal" />
        <VerticalHeader v-if="!personalizador.setDisenioHorizontal" /> 
        <!-- <HorizontalHeader v-if="personalizador.setDisenioHorizontal" /> -->
        <!-- <HorizontalSidebar v-if="personalizador.setHorizontalLayout" /> -->
        <v-main>
          <v-container fluid class="page-wrapper pb-sm-15 pb-10">
            <div :class="personalizador.enCaja ? 'maxWidth' : ''">
              <RouterView />
              <v-btn
                class="customizer-btn"
                size="large"
                icon
                variant="flat"
                color="primary"
                @click.stop="personalizador.SET_CAJA_PERSONALIZADA(!personalizador.cajaPersonalizada)"
              >
                <SettingsIcon />
              </v-btn>
            </div>
          </v-container>
        </v-main>
      </v-app>
    </v-locale-provider>
  <HorizontalHeader v-if="personalizador.setDisenioHorizontal" />
  
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import { usePersonalizarStore } from '../../stores/personalizador';
import HorizontalHeader from "./horizontal-header/HorizontalHeader.vue";
import VerticalHeader from "./vertical-header/VerticalHeader.vue";
import VerticalSidebar from "./vertical-sidebar/VerticalSidebar.vue";
import Personalizador from './personalizador/Personalizador.vue';

const personalizador = usePersonalizarStore()
</script>