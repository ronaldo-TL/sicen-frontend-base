<template>
  <div>  
    <div>
      <v-app-bar
        height="80"
        class="lp-header"
        flat>
        <v-container class="py-sm-4 py-0">
          <v-toolbar class="d-flex align-center">

            <div>
              <!-- <RtlLogo /> -->
              <v-img :src="logo" width="280" height="auto"></v-img>
            </div>

            <div class="navigation ml-auto d-lg-flex d-none">
                  <Navegador />
            </div>
            <v-btn 
              variant="text" 
              class="hidden-lg-and-up ml-auto" 
              icon 
              @click.stop="aplicacionesDrawer = !aplicacionesDrawer">
                
              <Menu2Icon size="22" stroke-width="1.5" />
            </v-btn>

            
          </v-toolbar>
        </v-container>
      </v-app-bar>
    </div>


    <v-navigation-drawer 
      class="lp-drawer" 
      v-model="aplicacionesDrawer" 
      location="left" 
      temporary>
     <BarraLateralMovil />
    </v-navigation-drawer>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { usePersonalizarStore } from '@/stores/personalizador';
  import Navegador from '@/components/cargarPagina/Navegador.vue';
  import BarraLateralMovil from '@/components/cargarPagina/BarraLateralMovil.vue'
  import logo from "@/assets/images/logos/mini_logo_mjti.png";
  import { Menu2Icon } from 'vue-tabler-icons';
  const aplicacionesDrawer = ref(false);
  const personalizador = usePersonalizarStore();
</script>

<style lang="scss" scoped>
.v-container {
    max-width: 1200px !important;
}
</style>