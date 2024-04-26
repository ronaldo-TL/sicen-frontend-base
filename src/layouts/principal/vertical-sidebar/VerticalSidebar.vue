<template >
    <v-navigation-drawer
        left
        v-model="personalizador.cajaBarraLateral"
        elevation="0"
        rail-width="75"
        app
        class="leftSidebar"
        :rail="personalizador.minimizarBarraLateral"
        expand-on-hover 
        width="270"
    >
            <div class="pa-20 d-flex justify-center" style="margin-top: 20px;">
                <v-locale-provider>
                    <div>
                        <v-img :src="logo" width="120" height="auto"></v-img>
                    </div>
                </v-locale-provider> 
            </div>
               

            
            <perfect-scrollbar class="scrollnavbar">

            <v-list class="pa-6">
          
                <template v-for="(item, i) in menuBarraLateral">
             
                    <NavGroup 
                        :item="item" 
                        v-if="item.header" 
                        :key="item.title" />
              
                    <NavCollapse 
                        class="leftPadding" 
                        :item="item" 
                        :level="0" 
                        v-else-if="item.children" />
               
                    <NavItem 
                        :item="item" 
                        v-else 
                        class="leftPadding" />
        
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
import logo from "@/assets/images/logos/logoMjti.png";
const personalizador = usePersonalizarStore();
const menuBarraLateral = shallowRef(sidebarItems);
</script>
