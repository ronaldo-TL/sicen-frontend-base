<template>
    <v-app-bar elevation="0" :priority="priority" height="70" class="">
        <v-btn
            class="hidden-md-and-down"
            icon
            color="primary"
            variant="text"
            @click.stop="personalizador.SET_MINIMIZAR_BARRA_LATERAL(!personalizador.minimizarBarraLateral)"
        >
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>
        <v-btn class="hidden-lg-and-up" icon variant="flat" @click.stop="personalizador.SET_CAJA_BARRA_LATERAL" size="small">
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>

        <!-- search mobile -->
        <!-- <v-btn class="hidden-lg-and-up ml-3" icon variant="text" color="primary" @click="searchbox">
            <SearchIcon size="17" stroke-width="1.5" />
        </v-btn> -->

        <!-- <v-sheet v-if="showSearch" class="search-sheet v-col-12">
            <Searchbar :closesearch="searchbox" />
        </v-sheet> -->

        <v-sheet>
            <Buscador />
        </v-sheet>

        <h3>SICEN</h3>
        <!-- <div class="hidden-md-and-down">
            <Navigations />
        </div> -->
        <v-spacer />
        <DDLenguaje />

        <v-btn icon variant="text" color="primary" to="/dashboards/prueba2">
            <v-badge  color="error">
                <GridDotsIcon stroke-width="1.5" size="22" />
            </v-badge>
        </v-btn>
        <v-btn
            variant="text"
            color="primary"
            class="hidden-lg-and-up"
            icon
            @click.stop="appsdrawer = !appsdrawer"
        >
            <GridDotsIcon size="17" stroke-width="1.5" />
        </v-btn>
        <div class="ml-2">
            <DDPerfil />
        </div>
    </v-app-bar>
    <v-navigation-drawer v-model="appsdrawer" location="right" temporary>
        <RightMobileSidebar />
    </v-navigation-drawer>
</template>


<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { usePersonalizarStore } from '../../../stores/personalizador';
import { GridDotsIcon, LanguageIcon, SearchIcon, Menu2Icon, BellRingingIcon, ShoppingCartIcon } from 'vue-tabler-icons';
import DDPerfil from './DDPerfil.vue';
import Buscador from './Buscador.vue';
import RightMobileSidebar from './RightMobileSidebar.vue';
import DDLenguaje from './DDLenguaje.vue';

const personalizador = usePersonalizarStore();
const showSearch = ref(false);
const appsdrawer = ref(false);
const priority = ref(personalizador.setDisenioHorizontal ? 0 : 0);
function searchbox() {
    showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
    priority.value = newPriority;
});

</script>