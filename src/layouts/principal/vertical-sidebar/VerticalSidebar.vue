<template>
    <v-navigation-drawer
        left
        v-model="personalizador.cajaBarraLateral"
        elevation="0"
        rail-width="75"
        app
        class="leftSidebar"
        :rail="personalizador.minimizarBarraLateral"
        expand-on-hover width="270"
    >

        <v-locale-provider>
        <div class="pa-5">
            <Logo />
        </div>
        </v-locale-provider>

        
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar">
            <v-list class="pa-6">
          
                <template v-for="(item, i) in menuBarraLateral">
             
                    <NavGroup :item="item" v-if="item.header" :key="item.title" />
              
                    <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
               
                    <NavItem :item="item" v-else class="leftPadding" />
      
                </template>
            </v-list>
            <!-- <div class="pa-6 userbottom">
                <Profile />
            </div> -->
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>
f

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { usePersonalizarStore } from '@/stores/personalizador';
import sidebarItems from './sidebarItems';

import NavGroup from './NavGroup/index.vue';
import NavItem from './NavItem/index.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import Logo from '../logo/Logo.vue';

const personalizador = usePersonalizarStore();
const menuBarraLateral = shallowRef(sidebarItems);
</script>