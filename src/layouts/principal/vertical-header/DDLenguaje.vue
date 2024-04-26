<script setup lang="ts">
import { ref } from 'vue';
import { DDLenguaje } from '@/_mockApis/headerData';
import flag1 from '@/assets/images/flag/icon-flag-en.svg';
import flag2 from '@/assets/images/flag/icon-flag-es.svg';

</script>
<template>

    <v-menu :close-on-content-click="false" location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn icon variant="text" color="primary" v-bind="props">
                <v-avatar size="22">
                    <img 
                        v-if="$i18n.locale === 'es'" 
                        :src="flag2" :alt="$i18n.locale" 
                        width="22" 
                        height="22" 
                        class="obj-cover" />

                    <img    
                        v-if="$i18n.locale === 'en'" 
                        :src="flag1" 
                        :alt="$i18n.locale" 
                        width="22" 
                        height="22" 
                        class="obj-cover" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="200" elevation="10">
            <v-list class="theme-list">
                <v-list-item
                    v-for="(item, index) in DDLenguaje"
                    :key="index"
                    color="primary"
                    :active="$i18n.locale == item.valor"
                    class="d-flex align-center"
                    @click="() => ($i18n.locale = item.valor)"
                >
                    <template v-slot:prepend>
                        <v-avatar size="22">
                            <img :src="item.avatar" :alt="item.avatar" width="22" height="22" class="obj-cover" />
                        </v-avatar>
                    </template>
                    <v-list-item-title class="text-subtitle-1 font-weight-regular">
                        {{ item.titulo }}
                        <span class="text-disabled text-subtitle-1 pl-2">({{ item.subtexto }})</span>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-menu>
</template>