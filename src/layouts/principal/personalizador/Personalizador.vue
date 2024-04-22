<template>
  <div class="pa-6">
    <h5 class="text-h5">Configuraciones</h5>
  </div>
  <v-divider></v-divider>
  <perfect-scrollbar style="height: calc(100vh - 90px)">
    <div class="pa-6">
      <h6 class="text-h6 mb-2">Herramienta de diseño</h6>
      <v-btn-toggle 
        v-model="personalizador.setDisenioHorizontal" 
        color="primary" 
        class="my-2 btn-group-custom  gap-3" 
        rounded="0" 
        group>

          <v-btn 
            :value="false" 
            variant="text" 
            elevation="9" 
            class="rounded-md">
            <LayoutColumnsIcon stroke-width="1.5" size="21" class="mr-2 icon" /> Vertical
          </v-btn>
          <v-btn 
            :value="true" 
            variant="text" 
            elevation="9" 
            class="rounded-md">
            <LayoutNavbarIcon stroke-width="1.5" size="21" class="mr-2 icon" /> Horizontal
          </v-btn>

      </v-btn-toggle>

      <h6 class="text-h6 mt-8 mb-5">Tema Diseño Claro</h6>
      <v-item-group 
        mandatory 
        v-model="personalizador.accionDelTema" 
        class="ml-n2 v-row">

        <v-col cols="4" v-for="tema in temaColores" :key="tema.nombre" class="pa-2">
          <v-item v-slot="{ isSelected, toggle }" :value="tema.nombre">
            <v-sheet
              rounded="md"
              class="border cursor-pointer d-block text-center px-5 py-4 hover-btns"
              elevation="9"
              @click="toggle"
            >
              <v-avatar :class="tema.bg" size="25" variant="text">
                <CheckIcon color="white" size="18" v-if="isSelected" />
              </v-avatar>
            </v-sheet>
          </v-item>
        </v-col>

      </v-item-group>

      <h6 class="text-h6 mt-11 mb-5">Tema Diseño Oscuro</h6>
      <v-item-group mandatory v-model="personalizador.accionDelTema" class="ml-n2 v-row">
        <v-col cols="4" v-for="tema in temaColoresOscuros" :key="tema.nombre" class="pa-2">
          <v-item v-slot="{ isSelected, toggle }" :value="tema.nombre">
            <v-sheet
              rounded="md"
              class="border cursor-pointer d-block text-center px-5 py-4 hover-btns"
              elevation="9"
              @click="toggle" 
            >
              <v-avatar :class="tema.bg" size="25" color="dark">
                  <CheckIcon color="white" size="18" v-if="isSelected" />
              </v-avatar>
            </v-sheet>
          </v-item>
        </v-col>
      </v-item-group>


      <h6 class="text-h6 mt-11 mb-2">Contenedor Opciones</h6>
        <v-btn-toggle 
          v-model="personalizador.enCaja" 
          color="primary" 
          class="my-2 btn-group-custom gap-3" 
          rounded="0" 
          group>
          <v-btn :value="true" variant="text" elevation="9" class="rounded-md">
            <LayoutDistributeVerticalIcon stroke-width="1.5" size="21" class="mr-2 icon" />
            Boxed
          </v-btn>
          <v-btn :value="false" variant="text" elevation="9" class="rounded-md ">
            <LayoutDistributeHorizontalIcon stroke-width="1.5" size="21" class="mr-2 icon" />
            Full
          </v-btn>
        </v-btn-toggle>


        <v-sheet v-if="personalizador.setDisenioHorizontal != true">
          <h6 class="text-h6 mt-11 mb-2">Sidebar Type</h6>
          <v-btn-toggle 
            v-model="personalizador.minimizarBarraLateral" 
            color="primary" 
            class="my-2 btn-group-custom gap-3" 
            rounded="0" 
            group>
            <v-btn :value="false" variant="text" elevation="9" class="rounded-md">
              <LayoutSidebarIcon stroke-width="1.5" size="21" class="mr-2 icon" />
              Full
            </v-btn>
            <v-btn :value="true" variant="text" elevation="9" class="rounded-md">
              <LayoutSidebarLeftCollapseIcon stroke-width="1.5" size="21" class="mr-2 icon" />
              Collapse
            </v-btn>
          </v-btn-toggle>
        </v-sheet>

        <h6 class="text-h6 mt-11 mb-2">Card with</h6>
        <v-btn-toggle 
          v-model="personalizador.setBordeDeLaTarjeta" 
          color="primary" 
          class="my-2 btn-group-custom gap-3" 
          rounded="0" 
          group>
          <v-btn :value="false" variant="text" elevation="9" class="rounded-md">
            <LayoutSidebarLeftCollapseIcon stroke-width="1.5" size="21" class="mr-2 icon" />
            Shadow
          </v-btn>
          <v-btn :value="true" variant="text" elevation="9" class="rounded-md">
            <LayoutSidebarIcon stroke-width="1.5" size="21" class="mr-2 icon" />
            Border
          </v-btn>
        </v-btn-toggle>

    </div>
  </perfect-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { usePersonalizarStore } from "@/stores/personalizador";
import {
  CheckIcon,
  LayoutColumnsIcon,
  LayoutDistributeHorizontalIcon,
  LayoutDistributeVerticalIcon,
  LayoutNavbarIcon,
  LayoutSidebarLeftCollapseIcon,
  TextDirectionLtrIcon,
  TextDirectionRtlIcon
} from 'vue-tabler-icons';

const tema = useTheme();
const personalizador = usePersonalizarStore();

// themes color options
const temaColores = ref([
  {
    nombre: 'BLUE_THEME',
    bg: 'themeBlue'
  },
  {
    nombre: 'CYAN_THEME',
    bg: 'themeCyan'
  }
])

// Dark Theme Colors
const temaColoresOscuros = ref([
  { 
    nombre: 'DARK_BLUE_THEME', 
    bg: 'themeDarkBlue' 
  },
  { nombre: 'DARK_CYAN_THEME', 
    bg: 'themeDarkCyan' 
  },
])
</script>