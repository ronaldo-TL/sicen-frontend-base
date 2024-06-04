<template>
  <v-app-bar  
    elevation="10" 
    :prioridad="prioridad" 
    height="70" 
    class="horizontal-header">

    <div :class="personalizador.enCaja ? 'maxWidth v-toolbar__content' : 'v-toolbar__content px-6'">
      <v-locale-provider>
          <div class="hidden-md-and-down">
              <Logo />
          </div>
      </v-locale-provider>
    </div>
  </v-app-bar>


  <v-btn 
    class="hidden-lg-and-up ms-3" 
    icon rounded="sm" 
    variant="flat" 
    @click.stop="personalizador.SET_CAJA_BARRA_LATERAL" 
    size="small">
    <Menu2Icon size="20" stroke-width="1.5" />
  </v-btn>

  <v-btn 
    class="hidden-lg-and-up ml-3" 
    icon 
    rounded="sm"
    variant="flat" 
    size="small" 
    @click="cajaDeBusqueda">
    <SearchIcon size="17" stroke-width="1.5" />
  </v-btn>
  <v-sheet v-if="mostrarBuscar" class="search-sheet v-col-12">
    <Searchbar :closesearch="cajaDeBusqueda" />
  </v-sheet>
  

</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { usePersonalizarStore } from '../../../stores/personalizador';

import { GridDotsIcon, LanguageIcon, SearchIcon, Menu2Icon, BellRingingIcon, ShoppingCartIcon } from 'vue-tabler-icons';
import Logo from '../logo/Logo.vue';

// Importaciones

const personalizador = usePersonalizarStore();
const mostrarBuscar = ref(false);
const caja = ref(false);
const appsCaja = ref(false);
const prioridad = ref(personalizador.setDisenioHorizontal ? 0 : 0);

function cajaDeBusqueda() {
  mostrarBuscar.value = !mostrarBuscar.value;
}
watch(prioridad, (nuevaPrioridad) => {
    // yes, console.log() is a side effect
  prioridad.value = nuevaPrioridad;
});

// // count items
// const store = useEcomStore();
// const getCart = computed(() => {
//     return store.cart;
// });
</script>