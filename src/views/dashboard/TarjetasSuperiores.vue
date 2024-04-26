
<template>
    <v-row>
        <v-col cols="12" lg="2" md="4" sm="4" v-for="tarjeta in tarjetasSuperioresData" :key="tarjeta.titulo">
            <div
                :class="'text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6  bg-' + tarjeta.bgcolor"
            >
                <div :class="'bg-' + tarjeta.bgcolor">
                    <img :src="tarjeta.img" alt="icon" />
                    <div 
                        :class="'text-subtitle-1 text-capitalize font-weight-bold mt-3 text-' + tarjeta.textcolor" 
                        v-text="tarjeta.titulo">
                    </div>
                    <h4 :class="'text-h4 mt-1 text-' + tarjeta.textcolor" v-text="tarjeta.numero"></h4>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { tarjetasSuperioresData } from '@/_mockApis/components/principalData';
</script>
