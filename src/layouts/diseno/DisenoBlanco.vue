<script setup lang="ts">
import { RouterView } from "vue-router";
import { usePersonalizarStore } from '../../stores/personalizador';
const personalizador = usePersonalizarStore();
</script>
<template>
  <v-locale-provider>
    <v-app :theme="personalizador.accionDelTema">
      <RouterView />
    </v-app>
  </v-locale-provider>
</template>
