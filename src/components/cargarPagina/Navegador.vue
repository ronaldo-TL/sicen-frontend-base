
<template>
  <v-btn 
    variant="text" 
    color="primary" 
    class="custom-hover-primary nav-links" 
    href="#">SICEN
  </v-btn>

  <v-switch
    v-model="isDarkTheme"
    hide-details
    color="primary"
  ></v-switch>
 


  <v-btn 
    class="custom-hover-primary bg-primary text-white" 
    flat 
    href="/auth/login"
    ><span class="text-white">Ingresar</span>
  </v-btn>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePersonalizarStore } from '@/stores/personalizador';

const personalizador = usePersonalizarStore();
const isDarkTheme = ref(false);

const temaColores = ref([
    {
      nombre: 'CYAN_THEME',
      bg: 'themeCyan'
    }
  ])

  const temaColoresOscuros = ref([
    { nombre: 'DARK_CYAN_THEME', 
      bg: 'themeDarkCyan' 
    },
  ])

  
  watch(isDarkTheme, (newValue) => {
    if (newValue) {
      personalizador.accionDelTema = 'DARK_CYAN_THEME'; 
    } else {
      personalizador.accionDelTema = 'BLUE_THEME';
    }
  });

  const currentThemeColors = ref(temaColores.value);
  watch(() => personalizador.accionDelTema, (newValue) => {
    if (newValue === 'DARK_CYAN_THEME') {
      currentThemeColors.value = temaColoresOscuros.value;
    } else {
      currentThemeColors.value = temaColores.value;
    }
  });
</script>

<script lang="scss" scoped>

</script>